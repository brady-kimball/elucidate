import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthFormModalContainer from '../auth_form/auth_form_modal_container';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    let container = this.props.container || {};
    let currentUser = this.props.currentUser || {};
    this.state = {
      user_id: currentUser.id,
      annotation_container_id: container.id,
      body: "",
    };
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.selection) {
      this.props.createAnnotationContainer({
        start_index: this.props.selection[0],
        end_index: this.props.selection[1],
        track_id: this.props.trackId,
      }).then(
        this.sendContainerUp.bind(this)
      ).then(
        this.createAnnotationAfterContainer.bind(this)
      );
      this.props.clearSelection();
    } else {
      this.props.createAnnotation({
        user_id: this.props.currentUser.id,
        annotation_container_id: this.state.annotation_container_id,
        body: this.state.body
      });
      this.setState({body: ""});
    }
  }

  sendContainerUp({ annotationContainer }) {
    this.props.setCurrentContainer(annotationContainer);
    return annotationContainer;
  }

  createAnnotationAfterContainer(annotationContainer) {
    return this.props.createAnnotation({
      user_id: this.props.currentUser.id,
      annotation_container_id: annotationContainer.id,
      body: this.state.body
    });
  }

  sessionRender() {
    if (this.props.currentUser) {
      return(
        <form className="form-input" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                  placeholder="Add your thoughts"
                  value = {this.state.body}
                  onChange={this.update("body")}
                  required
                  autoFocus/>
                <button>
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <section className="form-input">
          <h3>Log in to contribute:</h3>
          <AuthFormModalContainer type="login" />
          <AuthFormModalContainer type="signup" />
        </section>
      );
    }
  }


  render() {

    return(
      <section className='annotation-form'>
        {this.sessionRender()}
      </section>
    );
  }
}

export default withRouter(AnnotationForm);
