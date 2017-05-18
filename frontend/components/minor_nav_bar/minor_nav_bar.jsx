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
          <span onClick={this.handleAddClick.bind(this)}>Add a track</span>
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
        <section className="top-tracks inside-link">
          <span onClick={this.handleTopClick.bind(this)}>Top Tracks</span>
        </section>
        {this.renderAddTrack()}
        <section className="me-links outside-link">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </section>
      </nav>
    );
  }
}

export default withRouter(MinorNavBar);
