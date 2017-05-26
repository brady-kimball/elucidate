import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack, deleteTrack } from '../../actions/track_actions';
import { fetchAnnotations } from '../../actions/annotation_actions';
import { sortedAnnotationContainers } from '../../reducers/selectors';
import { fetchAnnotationContainers } from '../../actions/annotation_container_actions';
import { destroyAnnotationContainer } from '../../actions/annotation_container_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchVotes } from '../../actions/vote_actions';


const mapStateToProps = (state, { match }) => {
  return {
    trackIds: Object.keys(state.tracks),
    track: state.tracks[match.params.trackId],
    currentUser: state.session.currentUser,
    annotationContainers: sortedAnnotationContainers(state.annotationContainers)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id)),
  fetchAnnotationContainers: (id) => dispatch(fetchAnnotationContainers(id)),
  fetchAnnotations: (id) => dispatch(fetchAnnotations(id)),
  fetchComments: (id) => dispatch(fetchComments(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  destroyAnnotationContainer: (id) => dispatch(destroyAnnotationContainer(id)),
  fetchVotes: () => dispatch(fetchVotes())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
