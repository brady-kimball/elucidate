import * as APIUtil from '../util/vote_api_util';

export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE = "RECEIVE_VOTE";

export const receiveVotes = votes => {
  return ({
    type: RECEIVE_VOTES,
    votes
  });
};

export const receiveVote = vote => {
  return ({
    type: RECEIVE_VOTE,
    vote
  })
}

export const fetchVotes = () => dispatch => {
  return APIUtil.fetchVotes().then(
    votes => dispatch(receiveVotes(votes))
  );
};
