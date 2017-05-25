import * as APIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

// sync

export const receiveSearchResults = (results) => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    results
  });
};

export const clearResults = () => {
  return ({
    type: CLEAR_RESULTS
  });
};

// async

export const fetchSearchResults = query => dispatch => {
  return APIUtil.fetchSearchResults(query).then(
    results => dispatch(receiveSearchResults(results))
  );
};
