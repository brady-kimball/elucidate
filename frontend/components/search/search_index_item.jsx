import React from 'react';

class SearchIndexItem extends React.Component {

  render() {
    let track = this.props.track;
    return (
      <li className="single-result" key={track.id}>
        <section className="thumbnail">
          <img src={track.art_url} />
        </section>
        <section className="result-detail">
          <section className="result-title">
            <h3>{track.title}</h3>
          </section>
          <section className="result-artist">
            <h5>{track.artist}</h5>
          </section>
        </section>
      </li>
    );
  }
}

export default SearchIndexItem;
