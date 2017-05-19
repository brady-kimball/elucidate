import React from 'react';
import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack, updateTrack, fetchSingleTrack, deleteTrack }
  from '../../actions/track_actions';

const mapStateToProps = (state, { match }) => {
  return {
    track: state.tracks[match.params.trackId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track)),
  updateTrack: (track) => dispatch(updateTrack(track)),
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
