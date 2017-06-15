import React from 'react';
import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { tracksByAnnotations } from '../../reducers/selectors.js';
import { fetchTracks } from '../../actions/track_actions';
import { receiveLoading } from '../../actions/loading_actions';


const mapStateToProps = state => {
  return {
    tracks: tracksByAnnotations(state.tracks),
    trackSlice: state.tracks,
    loading: state.loading.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks()),
  receiveLoading: (bool) => dispatch(receiveLoading(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
