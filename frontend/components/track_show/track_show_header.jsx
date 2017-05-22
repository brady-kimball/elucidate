import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackShowHeader extends React.Component {
  extraData() {
    let track = this.props.track;
    let writtenBy =
      track.writers ? <li key="w" className="written-by">{track.writers}</li> : null;
    let producedBy =
      track.producers ? <li key="p" className="produced-by">{track.producers}</li> : null;
    let editedBy =
      track.editors ? <li key="e" className="edited-by">{track.editors}</li> : null;

    if (writtenBy || producedBy || editedBy) {
      return(
        <ul className="extra-data">
          {[writtenBy, producedBy, editedBy]}
        </ul>
      );
    } else {
      return null;
    }
  }

  musicLink() {
    if (/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/.test(this.props.track.link)) {
      let videoId = this.props.track.link.split('v=')[1];
      let ampersandPosition = videoId.indexOf('&');
      if(ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
      let videoLink = `https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&iv_load_policy=3`
      return(
        <iframe width="300" height="200"
                src={videoLink} frameBorder="0" allowFullScreen>
        </iframe>
      );
    } else {
      return null;
    }
  }

  handleEdit() {
    this.props.history.push(`/tracks/${this.props.track.id}/edit`);
  }

  renderEditButton() {
    let currentUser = this.props.currentUser || {};
    if (currentUser.id === this.props.track.user_id) {
      return(
        <button onClick={this.handleEdit.bind(this)} className="edit-art">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    let track = this.props.track;
    let artStyle = {
      backgroundImage: `url(${this.props.track.art_url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundColor: "#000",
    };
    return(
      <article className="song-header" style={artStyle}>
        <section className="col-layout song-header-inner">
          <section className="song-info primary-col">
            <figure  className="song-art">
              <img src={this.props.track.art_url} />
              {this.renderEditButton()}
            </figure>
            <section className="song-info-container">
              <h1>{track.title}</h1>
              <h2>{track.artist}</h2>
              {this.extraData()}
            </section>
          </section>

          <section className="site-info secondary-col">
            {this.musicLink()}
          </section>
        </section>
      </article>
    );
  }
}

export default withRouter(TrackShowHeader);
