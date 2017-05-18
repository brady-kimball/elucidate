import React from 'react';

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchSingleTrack(this.props.match.params.trackId);
  }

  constructor(props) {
    super(props);
  }

  render() {
    let track = this.props.track || {};
    return(
      <div className="song-show">
        <article className="song-header">
          <section className="col-layout song-header-inner">
            <section className="song-info col primary-col">
              <span> album art and song info </span>

            </section>

            <section className="site-info col secondary-col">

            </section>
          </section>
        </article>
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
