import { RECEIVE_VOTES, RECEIVE_VOTE, CLEAR_VOTES }
  from '../actions/vote_actions';
import { merge } from 'lodash';

let defaultState={
  annotations: {},
  comments: {}
};

const votesReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VOTES:
      return Object.assign({}, defaultState, action.votes);
    case RECEIVE_VOTE:
      let dupState = merge({}, defaultState, state);
      if (action.vote.type === "Annotation") {
        dupState['annotations'][action.vote.id] = action.vote.value;
      } else {
        dupState['comments'][action.vote.id] = action.vote.value;
      }
      return dupState;
    case CLEAR_VOTES:
      return defaultState;
    default:
      return state;
  }
};

export default votesReducer;
