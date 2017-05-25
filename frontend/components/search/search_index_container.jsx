import React from 'react';
import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchSearchResults, clearResults } from '../../actions/search_actions';
import { searchResultsArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    searchResults: searchResultsArray(state.searchResults)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    clearResults: () => dispatch(clearResults())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
