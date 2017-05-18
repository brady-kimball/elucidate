import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchSingleTrack } from '../../actions/track_actions';

const mapStateToProps = (state, { match }) => {
  return {
    track: state.tracks[match.params.trackId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleTrack: (id) => dispatch(fetchSingleTrack(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
