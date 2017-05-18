import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, deleteTrack } from '../../actions/track_actions';

const mapStateToProps = (state, { match }) => {
  return {
    track: state.tracks[match.params.trackId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
