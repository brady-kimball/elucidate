import { RECEIVE_LOADING } from '../actions/loading_actions';

const defaultState = {
  loading: false
};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOADING:
      return Object.assign({}, state, { loading: action.loading });
    default:
      return state;
  }
};

export default loadingReducer;
