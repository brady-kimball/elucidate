import React from 'react';
import TrackShowHeaderContainer from './track_show_header_container';
import { findOffset, randomId, validRange } from '../../util/annotation_util';
import sanitizeHtml from 'sanitize-html';
import AnnotationFormContainer from "../annotations/annotation_form_container";
import AnnotationShowContainer from "../annotations/annotation_show_container";

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
    this.props.fetchAnnotations(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
    this.state = {
      selection: [],
      currentAnnotation: {},
      yPos: ""
    };
  }

  renderLyrics() {
    let track = this.props.track || {};
    let lyrics = track.lyrics || "";
    let lines = [];
    let lineNumber = 0;
    let lyricChunk;

    this.props.annotations.forEach( (annotation, idx) => {
      lyricChunk = lyrics.slice(lineNumber, annotation.start_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'))
      lyricChunk = lyrics.slice(annotation.start_index, annotation.end_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, `lyrics-annotated`, annotation));
      lineNumber = annotation.end_index;
    })

    lyricChunk = lyrics.slice(lineNumber, lyrics.length);
    lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'));

    return <p className="lyric-text">{lines}</p>;
  }

  handleAnnotationClick(annotation) {
    return e => {
      e.preventDefault;
      this.setState({ yPos: e.pageY });
      this.setState({currentAnnotation: annotation});
    };
  }

  renderLyricChunk(lyrics, className, annotation) {
    if (className === 'lyrics-annotated') {
      return (
        <span className={className}
              onClick={this.handleAnnotationClick(annotation)}
              key={annotation.id}>{lyrics}</span>
      );
    } else {
      return (
        <span className={className}
              key={randomId()}>{lyrics}</span>
      );
    }
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/tracks/${this.props.track.id}/edit`);
  }

  handleDelete(e) {
    e.preventDefault();
    let answer = confirm(
      "Are you sure?  This action will permanently delete this track"
    );
    if (answer) {
      this.props.deleteTrack(this.props.track.id);
      this.props.history.push("/");
    }
  }

  editButton(track) {
    if (this.props.currentUser && (this.props.currentUser.id === track['user_id'])) {
      return (
        <section className="owner-button">
          <button onClick={this.handleEdit.bind(this)}>Edit</button>
        </section>
      );
    } else {
      return null;
    }
  }

  deleteButton(track) {
    if (this.props.currentUser && (this.props.currentUser.id === track['user_id'])) {
      return (
        <section className="owner-button delete">
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </section>
      );
    } else {
      return null;
    }
  }

  getRange(e) {
    e.preventDefault();
    let selection = document.getSelection();

    if (selection.toString().length > 0) {
      this.setState({ currentAnnotation: "" });
      let anchorNode = selection.anchorNode;
      let start = selection.anchorOffset;

      for (let i = 0; i < 2; i++) {
        if (i === 1) {
          anchorNode = selection.focusNode;
          start = selection.focusOffset;
        }

        let end = start + selection.toString().length;
        let offset = findOffset(anchorNode.parentElement);
        start += offset;
        end += offset;
        let track = this.props.track;
        let lyricSlice = track.lyrics.slice(start,end);
        console.log(selection);
        console.log(lyricSlice);
        console.log(selection.toString());
        console.log(lyricSlice === selection.toString());
        if (track.lyrics.slice(start, end) === selection.toString() ) {
          this.setState({selection: [start, end]});
          console.log([start, end]);
          console.log(this.state.yPos);
          console.log(validRange(this.state.selection, this.props.annotations));
          if (validRange(this.state.selection, this.props.annotations)) {
            this.setState({yPos: e.pageY});
          }
          return [start, end];
        }
      }
    }
  }

  renderAnnotation() {
    if (this.state.currentAnnotation) {
      return <AnnotationShowContainer annotation={this.state.currentAnnotation} />;
    } else if (validRange(this.state.selection, this.props.annotations)) {
      return <AnnotationFormContainer selection={this.state.selection} />;
    }
  }

  render() {
    let track = this.props.track || {};
    let style = {
      position: "absolute",
      top: this.state.yPos - 370
    };
    return(
      <div className="song-show">
        <TrackShowHeaderContainer track={track} />

        <main className="song-body col-layout">
          <section className="col primary-col lyrics-container">
            {this.editButton(track)}
            <section onMouseUp={this.getRange.bind(this)}
                      className="lyrics">
              {this.renderLyrics()}
            </section>
            {this.deleteButton(track)}
          </section>

          <section className="col secondary-col">
            <section  className="annotation-box" style={style}>
              {this.renderAnnotation()}
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default TrackShow;
