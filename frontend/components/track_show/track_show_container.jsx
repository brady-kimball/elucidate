import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, deleteTrack } from '../../actions/track_actions';
import { fetchAnnotations } from '../../actions/annotation_actions';
import { sortedAnnotationContainers } from '../../reducers/selectors';
import { fetchAnnotationContainers } from '../../actions/annotation_container_actions';

const mapStateToProps = (state, { match }) => {
  return {
    track: state.tracks[match.params.trackId],
    currentUser: state.session.currentUser,
    annotationContainers: sortedAnnotationContainers(state.annotationContainers)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  fetchAnnotationContainers: (id) => dispatch(fetchAnnotationContainers(id)),
  fetchAnnotations: (id) => dispatch(fetchAnnotations(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
