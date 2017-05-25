import React from 'react';
import SearchIndexItem from './search_index_item';

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

  renderTitles() {
    let titles = this.props.searchResults.titles;
    if (titles.length > 0) {
      return(
        titles.map( track => <SearchIndexItem key={track.id} track={track} />)
      );
    } else {
      return null;
    }
  }

  renderArtists() {
    let artists = this.props.searchResults.artists;
    if (artists.length > 0) {
      return(
        artists.map( track => <SearchIndexItem key={track.id} track={track} />)
      );
    } else {
      return null;
    }
  }

  renderLyrics() {
    let lyrics = this.props.searchResults.lyrics;
    if (lyrics.length > 0) {
      return(
        lyrics.map( track => <SearchIndexItem key={track.id} track={track} />)
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
                placeholder="Search..."
                value={this.state.query}
                onChange={this.update.bind(this)}/>

        <ul className='search-results'>
          {titles.length > 0 ? <li className="header">Titles</li> : null}
          {titles.length > 0 ? this.renderTitles() : null}
          {artists.length > 0 ? <li className="header">Artists</li> : null}
          {artists.length > 0 ? this.renderArtists() : null}
          {lyrics.length > 0 ? <li className="header">Lyrics</li> : null}
          {lyrics.length > 0 ? this.renderLyrics() : null}
        </ul>
      </section>
    );
  }
}

export default SearchIndex;
