import React from 'react';
import SearchIndexItem from './search_index_item';
import enhanceWithClickOutside from 'react-click-outside';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  update(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
    if (e.target.value.length > 0) {
      this.props.fetchSearchResults(e.target.value);
    } else {
      this.props.clearResults();
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({query: ""});
    this.props.clearResults();
  }

  handleClickOutside() {
    this.setState({query: ""});
    this.props.clearResults();
  }

  renderTracks(tracks) {
    if (tracks.length > 0) {
      return(
        tracks.map( track => (
          <SearchIndexItem  key={track.id}
                            track={track}
                            clearResults={this.props.clearResults} />
        ))
      );
    } else {
      return null;
    }
  }

  render() {
    let titles = this.props.searchResults.titles;
    let artists = this.props.searchResults.artists;
    let lyrics = this.props.searchResults.lyrics;
    return (
      <section className="search">
        <input  type="search"
                placeholder="Search artists, tracks or lyrics..."
                value={this.state.query}
                onChange={this.update.bind(this)}
                />

        <ul className='search-results'
            onClick={this.handleClick.bind(this)}>
          {titles.length > 0 ? <li className="header">Titles</li> : null}
          {titles.length > 0 ? this.renderTracks(titles) : null}
          {artists.length > 0 ? <li className="header">Artists</li> : null}
          {artists.length > 0 ? this.renderTracks(artists) : null}
          {lyrics.length > 0 ? <li className="header">Lyrics</li> : null}
          {lyrics.length > 0 ? this.renderTracks(lyrics) : null}
        </ul>
      </section>
    );
  }
}

export default enhanceWithClickOutside(SearchIndex);
