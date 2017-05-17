import React from 'react';
import { allTracks } from '../../reducers/selectors.js';

class TrackIndex extends React.Component {
  componentWillMount() {
    console.log("I mounted");
    this.props.fetchTracks();
  }

  componentWillReceiveProps(props) {
    console.log(props);
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
