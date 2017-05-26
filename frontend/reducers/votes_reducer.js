import { RECEIVE_VOTES, RECEIVE_VOTE } from '../actions/vote_actions';
import { merge } from 'lodash';

const votesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VOTES:
      return Object.assign({}, action.votes);
    case RECEIVE_VOTE:
      let dupState = merge({}, state)
      if (action.vote.type === "Annotation") {
        dupState['annotations'][action.vote.id] = action.vote.value;
      } else {
        dupState['comments'][action.vote.id] = action.vote.value;
      }
      return dupState
    default:
      return state;
  }
};

export default votesReducer;
