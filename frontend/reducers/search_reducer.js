import { RECEIVE_SEARCH_RESULTS, CLEAR_RESULTS }
  from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, action.results);
    case CLEAR_RESULTS:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
