import React from 'react';

class TrackForm extends React.Component {
  componentWillMount() {
    if (this.props.track && (this.props.currentUser.id !== this.props.track.user_id)) {
      this.props.history.replace(`/tracks/${this.props.match.params.trackId}`);
    }
    if (!(this.props.track)) {
      this.props.fetchSingleTrack(this.props.match.params.trackId).then(
        () => this.setState(this.initializeState())
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = this.initializeState();
  }

  initializeState() {
    let state = {
      title: "",
      artist: "",
      user_id: this.props.currentUser.id,
      lyrics: "",
      writers: "",
      producers: "",
      editors: "",
      link: ""
    };
    return this.props.track || state;
  }

  buttonText() {
    return this.props.track ? "Update Track" : "Add Track";
  }


  update(property) {
    return e => {
      e.preventDefault();
      this.setState({ [property]: e.target.value });
    };
  }



  handleBack(e) {
    e.preventDefault();
    if (this.props.track) {
      this.props.history.push(`/tracks/${this.props.track.id}`);
    } else {
      this.props.history.push("/");
    }
  }

  handleDelete(e) {
    e.preventDefault();
    let answer = confirm(
      "Are you sure?  This action will permanently delete this track"
    );
    if (answer) {
      this.props.deleteTrack(this.props.track.id);
      this.props.history.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.link && !this.validYoutubeLink()) {
      alert('Please check the format of your youtube link and try again :)')
      return;
    }
    if (this.props.track) {
      let updatedTrack = Object.assign(
        {}, this.state, {id: this.props.track.id}
      );
      this.props.updateTrack(updatedTrack)
        .then( ({ track }) => {
          this.props.history.push(`/tracks/${track.id}`);
        });
    } else {
      this.props.createTrack(this.state)
        .then( ({ track }) => {
          this.props.history.push(`/tracks/${track.id}`);
        });
    }
  }

  validYoutubeLink() {
    return (/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/.test(this.state.link));
  }

  renderDeleteButton() {
    if (this.props.track) {
      return(
        <button type="button"
                onClick={this.handleDelete.bind(this)}
                className="delete">
            Delete track
        </button>
      );
    }
  }

  render() {
    return(
      <section className="add-track-page">
        <main className="track-form-container">
          <h1>Add a Track</h1>
          <article className="primary-info">
            <small> * required</small>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <header>
                <h2>Track Info</h2>
                <hr className="hr-bottom"/>
              </header>
              <section className="song-info-col primary-info-section">
                <section className="half-col">
                  <label> By *
                    <input  type="text"
                            placeholder="The primary artist, author, creator, etc."
                            value={this.state.artist}
                            onChange={this.update("artist")}
                            required/>
                  </label>
                  <label> Title *
                    <input  type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.update("title")}
                            required/>
                  </label>
                  <header>
                    <h3>Additional Info</h3>
                    <hr className="hr-bottom"/>
                  </header>
                  <label> Written By:
                    <input  type="text"
                            placeholder="e.g. Pharrell Williams, Sean Garrett, John Lennon"
                            value={this.state.writers}
                            onChange={this.update("writers")}/>
                  </label>
                  <label> Produced by:
                    <input  type="text"
                            placeholder="e.g. Rick Rubin, Kanye West, George Martin"
                            value={this.state.producers}
                            onChange={this.update("producers")}/>
                  </label>
                  <label> Editors
                    <input  type="text"
                            placeholder="e.g. Dave Golden, Leslie Bloom, Steven Price"
                            value={this.state.editors}
                            onChange={this.update("editors")}/>
                  </label>
                  <header>
                    <h3>Audio/Video</h3>
                    <hr className="hr-bottom"/>
                  </header>
                  <label> Link
                    <input  type="text"
                            placeholder="e.g. youtube.com/watch?v=evef8FCK6wk"
                            value={this.state.link}
                            onChange={this.update("link")}/>
                  </label>
                  <header>
                    <h3>Album Art</h3>
                    <hr className="hr-bottom"/>
                  </header>
                  <label>
                    <input  type="file"/>
                  </label>
                </section>

                <section className="half-col">
                  <label> Lyrics *</label>
                  <br/>
                  <textarea cols="40" rows="20" tabIndex="3"
                            onChange={this.update("lyrics")}
                            value={this.state.lyrics} required></textarea>
                </section>
              </section>
              <hr />
              <section className="buttons">
                <button type="button" onClick={this.handleBack.bind(this)}>
                  Back
                </button>
                <button>{this.buttonText()}</button>
                {this.renderDeleteButton()}
              </section>
            </form>
          </article>
        </main>
      </section>
    );
  }
}

export default TrackForm;
