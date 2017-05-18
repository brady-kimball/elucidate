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

  editButton() {

  }

  render() {
    let track = this.props.track || {};
    return(
      <div className="song-show">
        <TrackShowHeader track={track} />

        <main className="song-body col-layout">
          <section className="col primary-col lyrics-container">
            <section className="lyrics">
              {this.renderLyrics()}
            </section>
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
