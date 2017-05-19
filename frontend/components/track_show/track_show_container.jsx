import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, deleteTrack } from '../../actions/track_actions';
import { fetchAnnotations } from '../../actions/annotation_actions';
import { sortedAnnotations } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  return {
    track: state.tracks[match.params.trackId],
    currentUser: state.session.currentUser,
    annotations: sortedAnnotations(state.annotations)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  fetchAnnotations: (id) => dispatch(fetchAnnotations(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
