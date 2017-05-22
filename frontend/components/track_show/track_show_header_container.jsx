import React from 'react';
import { connect } from 'react-redux';
import TrackShowHeader from './track_show_header';
import updateTrackArt from '../../util/track_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    track: ownProps.track,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  updateTrackArt: (track) => dispatch(updateTrackArt(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShowHeader);
