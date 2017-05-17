import React from 'react';
import { allTracks } from '../../reducers/selectors.js';

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  renderTracks() {
    return this.props.tracks.map( (track) => (
      <li key={track.id}>{track.title}</li>
    ));
  }

  render() {
    return(
      <ul>
        {this.renderTracks()}
      </ul>
    );
  }
}

export default TrackIndex;
