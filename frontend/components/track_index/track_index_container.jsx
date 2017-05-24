import React from 'react';
import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { tracksByAnnotations } from '../../reducers/selectors.js';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = state => {
  return {
    tracks: tracksByAnnotations(state.tracks),
    trackSlice: state.tracks
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
