import React from 'react';
import TrackShowHeader from './track_show_header';

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
  }

  renderLyrics() {
    let track = this.props.track || {};
    let lyrics = track.lyrics || "";

    let lines = lyrics.split("\n").map(function(line, n){
          return (n === 0) ? [line] : [<br />, line];
      });
      return <p className="lyric-text">{lines}</p>;
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



  getText(e) {
    let text;
    if ( document.all ) {
      text = document.selection.createRange().text;
    } else {
      text = document.getSelection();
    }
    debugger
    text.addRange()
    console.log(text.toString());
  }

  wrapSelectedText(e) {
    debugger
    let selection= window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span= document.createElement("span");
    span.appendChild(selectedText);
    selection.insertNode(span);
  }

  render() {
    let track = this.props.track || {};
    return(
      <div className="song-show">
        <TrackShowHeader track={track} />

        <main className="song-body col-layout">
          <section className="col primary-col lyrics-container">
            {this.editButton(track)}
            <section  onMouseUp={this.wrapSelectedText.bind(this)}
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
