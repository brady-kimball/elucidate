import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  showTrack(id) {
    return(
      e => this.props.history.push(`/tracks/${id}`)
    );
  }

  render() {
    let track = this.props.track;
    return(
      <li className={"track-index-item"}
        onClick={this.showTrack(track.id)}>
        <section className="track-row">
          <section className="track-num">
              <h3>{this.props.idx}</h3>
          </section>
          <figure>art</figure>
          <section className="track-info">
            <h3>{track.title}</h3>
            <h5>{track.artist}</h5>
          </section>
        </section>

      </li>
    );
  }
}

export default withRouter(TrackIndexItem);
