import React from 'react';
import { allTracks } from '../../reducers/selectors.js';
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.receiveLoading(true)
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
    if (this.props.loading) {
      return(
        <section className="track-index">
          <div className="loader"></div>
        </section>
      );
    } else {
      return(
        <section className="track-index">
          <header>
            <h3>Top Songs</h3>
            <h3>Annotations</h3>
          </header>
          <ul>
            {this.renderTracks()}
          </ul>
        </section>
      );
    }
  }
}

export default TrackIndex;
