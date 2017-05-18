import React from 'react';
import { withRouter } from 'react-router-dom';

class MinorNavBar extends React.Component {

  handleTopClick(e) {
    e.preventDefault();
    this.props.history.push("/top-tracks");
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.history.push("/tracks/new");
  }

  renderAddTrack() {
    if (this.props.currentUser) {
      return(
        <section className="add-track inside-link">
          <span onClick={this.handleAddClick.bind(this)}>
            <i className="fa fa-music" aria-hidden="true"></i>
            Add a track
          </span>
        </section>
      );
    }
    return(
      null
    );
  }

  render() {
    return(
      <nav className="nav-minor">
        <section className="top-`tracks inside-link">
          <span onClick={this.handleTopClick.bind(this)}>
            <i className="fa fa-line-chart" aria-hidden="true"></i>
            Top Tracks
          </span>
        </section>
        {this.renderAddTrack()}
        <section className="me-links outside-link">
          <a href="https://github.com/brady-kimball/elucidate">
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/brady-kimball/">
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </a>
        </section>
      </nav>
    );
  }
}

export default withRouter(MinorNavBar);
