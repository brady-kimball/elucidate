import React from 'react';
import { allTracks } from '../../reducers/selectors.js';
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  renderTracks() {
    return this.props.tracks.map( (track, idx) => {
      return(
        <TrackIndexItem key={track.id}
                        track={track}
                        idx={idx + 1} />
      );
    });
  }

  render() {
    return(
      <section className="track-index">
        <h3>Top Songs</h3>
        <ul>
          {this.renderTracks()}
        </ul>
      </section>
    );
  }
}

export default TrackIndex;
