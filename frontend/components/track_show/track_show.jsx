import React from 'react';
import TrackShowHeaderContainer from './track_show_header_container';
import { findOffset, randomId, validRange } from '../../util/annotation_util';
import AnnotationFormContainer from "../annotations/annotation_form_container";
import AnnotationContainerShowContainer from "../annotation_containers/annotation_container_show_container";

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
    this.props.fetchAnnotations(this.props.match.params.trackId);
    this.props.fetchAnnotationContainers(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
    this.state = {
      selection: [],
      currentAnnotationContainer: {},
      yPos: ""
    };
  }

  getRange(e) {
    e.preventDefault();
    this.setState({yPos: (e.pageY - 360)});
    this.setState({ currentAnnotationContainer: "" });
    let selection = document.getSelection();
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
      if (track.lyrics.slice(start, end) === selection.toString() ) {
        this.setState({selection: [start, end]});
      }
    }
  }

  handleAnnotationContainerClick(annotationContainer) {
    return e => {
      e.preventDefault;
      let coords = e.target.getBoundingClientRect();
      let col = document.getElementsByClassName('annotation-col');
      let yPos = (coords.bottom + coords.top) / 2 - col[0].getBoundingClientRect().top - 20;
      this.setState({ yPos });
      this.setState({currentAnnotationContainer: annotationContainer});
    };
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


  renderLyrics() {
    let track = this.props.track || {};
    let lyrics = track.lyrics || "";
    let lines = [];
    let lineNumber = 0;
    let lyricChunk;

    this.props.annotationContainers.forEach( (annotationContainer, idx) => {
      lyricChunk = lyrics.slice(lineNumber, annotationContainer.start_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'))
      lyricChunk = lyrics.slice(annotationContainer.start_index, annotationContainer.end_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, `lyrics-annotated`, annotationContainer));
      lineNumber = annotationContainer.end_index;
    })

    lyricChunk = lyrics.slice(lineNumber, lyrics.length);
    lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'));

    return <p className="lyric-text">{lines}</p>;
  }

  renderLyricChunk(lyrics, className, annotationContainer) {
    if (className === 'lyrics-annotated') {
      return (
        <span className={className}
              onClick={this.handleAnnotationContainerClick(annotationContainer)}
              key={annotationContainer.id}>{lyrics}</span>
      );
    } else {
      return (
        <span className={className}
              key={randomId()}>{lyrics}</span>
      );
    }
  }

  renderAnnotation() {
    // if (this.state.currentAnnotationContainer.numAnnotations === 0) {
    //   this.props.destroyAnnotationContainer(this.state.currentAnnotationContainer.id);
    //   this.setState({currentAnnotationContainer: {}});
    // }
    //
    if (this.state.currentAnnotationContainer.id) {
      return <AnnotationContainerShowContainer container={this.state.currentAnnotationContainer} />;
    } else if (validRange(this.state.selection, this.props.annotationContainers)) {
      return(
        <section className='annotation-container-new'>
          <header>
            <h3> Start a discussion! </h3>
          </header>
          <AnnotationFormContainer selection={this.state.selection} trackId={this.props.track.id}/>
        </section>
      )
    }
  }

  render() {
    let track = this.props.track || {};
    let style = {
      position: "absolute",
      top: this.state.yPos
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

          <section className="col secondary-col annotation-col">
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
