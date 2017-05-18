import React from 'react';

class TrackForm extends React.Component {


  render() {
    return(
      <section className="add-track-page">
        <main className="track-form-container">
          <h1>Add a Track</h1>
            <section className="primary-info">
              <header>
                <h2>Primary info</h2>
                <h3> * required</h3>
                <hr className="hr-bottom"/>
              </header>
              <form>

              </form>
            </section>

            <section className="additional-info">
              <header>
                <h2>Additional info</h2>
                <h3> * required</h3>
                <hr className="hr-bottom"/>
              </header>
              <form>

              </form>
            </section>
        </main>
      </section>
    )
  }
};

export default TrackForm;
