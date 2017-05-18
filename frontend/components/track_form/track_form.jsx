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

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({ [property]: e.target.value });
    };
  }

  buttonText() {
    return this.props.track ? "Edit Track" : "Add Track";
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.track) {
      let updatedTrack = Object.assign(
        {},this.state,{id: this.props.track.id}
      );
      debugger
      this.props.updateTrack(updatedTrack);
    } else {
      this.props.createTrack(this.state);
    }
    this.props.history.push("/");
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
                  <label> By *</label>
                  <input  type="text"
                          value={this.state.artist}
                          onChange={this.update("artist")}/>
                  <label> Title *</label>
                  <input  type="text"
                          value={this.state.title}
                          onChange={this.update("title")}/>
                  <header>
                    <h3>Additional Info</h3>
                    <hr className="hr-bottom"/>
                  </header>
                  <label> Writers</label>
                  <input  type="text"
                          value={this.state.writers}
                          onChange={this.update("writers")}/>
                  <label> Producers</label>
                  <input  type="text"
                          value={this.state.producers}
                          onChange={this.update("producers")}/>
                  <label> Editors</label>
                  <input  type="text"
                          value={this.state.editors}
                          onChange={this.update("editors")}/>
                  <header>
                    <h3>Audio/Video</h3>
                    <hr className="hr-bottom"/>
                  </header>
                  <label> Link</label>
                  <input  type="text"
                          value={this.state.link}
                          onChange={this.update("link")}/>
                </section>

                <section className="half-col">
                  <label> Lyrics *</label>
                  <br/>
                  <textarea cols="40" rows="20" tabIndex="3"
                            onChange={this.update("lyrics")}
                            value={this.state.lyrics}></textarea>
                </section>
              </section>
              <hr />
              <button>{this.buttonText()}</button>
            </form>
          </article>
        </main>
      </section>
    );
  }
}

export default TrackForm;
