import React from 'react';
import TrackShowHeader from './track_show_header';

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
  }

  render() {
    let track = this.props.track || {};
    let extraData = {}
    return(
      <div className="song-show">
        <TrackShowHeader track={track} />

        <main className="song-body">
          <section className="col primary-col lyrics">

          </section>

          <section className="col secondary-col">

          </section>
        </main>
      </div>
    );
  }
}

export default TrackShow;
