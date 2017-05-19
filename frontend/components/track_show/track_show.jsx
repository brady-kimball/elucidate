import React from 'react';
import TrackShowHeader from './track_show_header';
import { findOffset } from '../../util/annotation_util';

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
    this.props.fetchAnnotations(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
    this.state = {
      selection: []
    };
  }

  renderLyrics() {
    let track = this.props.track || {};
    let lyrics = track.lyrics || "";
    let className = "";
    let lines = [];
    let lineNumber = 0;
    let lyricChunk;

    console.log(this.props.annotations);
    this.props.annotations.forEach( (annotation, idx) => {
      lyricChunk = lyrics.slice(lineNumber, annotation.start_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'))
      lyricChunk = lyrics.slice(annotation.start_index, annotation.end_index);
      lines = lines.concat(this.renderLyricChunk(lyricChunk, [`lyrics-annotated anno-${annotation.id}`]));
      lineNumber = annotation.end_index;
    })

    lyricChunk = lyrics.slice(lineNumber, lyrics.length);
    lines = lines.concat(this.renderLyricChunk(lyricChunk, 'lyrics-normal'));

    return <p className="lyric-text">{lines}</p>;
  }

  renderLyricChunk(lyrics, className) {
    let lines = lyrics.split("\n").map(function(line, n){
      if (n === 0) {
        return [<span className={className}>{line}</span>];
      } else {
        return <span className={className}><br />{line}</span>
      }
    });
    return lines;
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
    let selection = document.getSelection();
    let anchorNode = selection.anchorNode;
    let start = selection.anchorOffset;

    for (let i = 0; i < 2; i++) {
      if (i === 1) {
        anchorNode = selection.focusNode;
        start = selection.focusOffset;
      }
      let end = start + selection.toString().length;
      let offset = anchorNode.innerHTML === "<br>" ?
        findOffset(anchorNode) :
        findOffset(anchorNode.parentElement);
      start += offset;
      end += offset;
      let track = this.props.track;
      let lyricSlice = track.lyrics.slice(start,end);
      if (this.props.track.lyrics.slice(start, end) === selection.toString() ) {
        console.log(lyricSlice);
        console.log(selection.toString());
        console.log(lyricSlice === selection.toString());
        this.setState({selection: [start, end]});
        console.log([start, end]);
        return [start, end];
      }
    }
  }

  render() {
    let track = this.props.track || {};
    return(
      <div className="song-show">
        <TrackShowHeader track={track} />

        <main className="song-body col-layout">
          <section className="col primary-col lyrics-container">
            {this.editButton(track)}
            <section  onMouseUp={this.getRange.bind(this)}
                      className="lyrics">
              {this.renderLyrics()}
            </section>
            {this.deleteButton(track)}
          </section>

          <section className="col secondary-col">
            //Annotations and abouts :)
          </section>
        </main>
      </div>
    );
  }
}

export default TrackShow;
