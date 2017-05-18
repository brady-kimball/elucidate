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
            <section className="song-info primary-col">
              <figure  className="song-art">
                Art
              </figure>
              <section className="song-info-container">
                <h1>{track.title}</h1>
                <h2>{track.artist}</h2>
              </section>
            </section>

            <section className="site-info secondary-col">
              <span> Youtube link or song analytics </span>
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
