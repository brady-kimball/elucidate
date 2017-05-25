import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchIndexItem extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/tracks/${this.props.track.id}`);
    this.props.clearResults();
  }

  render() {
    let track = this.props.track;
    return (
      <li className="single-result"
          key={track.id}
          onClick={this.handleClick.bind(this)}>
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

export default withRouter(SearchIndexItem);
