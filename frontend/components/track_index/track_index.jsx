import React from 'react';
import { allTracks } from '../../reducers/selectors.js';
import { withRouter } from 'react-router-dom';

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  renderTracks() {
    return this.props.tracks.map( (track, idx) => {
      let className = "";
      if (idx < 3) {
        className = "top-three-track";
      }
      return(
        <li className={className}
            key={track.id}
            onClick={this.showTrack(track.id)}>
          {track.title}
        </li>
      );
    });
  }

  showTrack(id) {
    return(
      e => this.props.history.push(`/tracks/${id}`)
    );
  }

  render() {
    return(
      <section className="track-index">
        <h1>Top Songs</h1>
        <ul>
          {this.renderTracks()}
        </ul>
      </section>
    );
  }
}

export default withRouter(TrackIndex);
