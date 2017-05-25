import React from 'react';
import Modal from 'react-modal';
import { LogInFormContainer, SignUpFormContainer }
  from './auth_form_container';

class AuthFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      type: this.props.type
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.modalCustomStyles = {
      overlay : {
        position         : 'fixed',
        top              : 0,
        left             : 0,
        right            : 0,
        bottom           : 0,
        display          : 'flex',
        alignItems       : 'center',
        justifyContent   : 'center',
        backgroundColor  : 'rgba(90,98,107,.9)',
        zIndex           : 10
      },
      content : {
        position    : 'null', // to override default styles
        top         : 'null',
        left        : 'null',
        right       : 'null',
        bottom      : 'null',
        border      : '2px solid #5B6675',
        background  : '#fff',
        padding     : '20px 15px',
        maxWidth    : '560px',
        minWidth    : '400px',
        height      : 'auto',
        'z-index'   : 10
      }
    };
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  switchAuthType() {
    let otherType = (this.state.type === "login" ? "signup" : "login");
    this.props.clearErrors();
    this.setState({type: otherType});
  }

  switchButtonText() {
    if (this.state.type === "login") {
      return "Need to register? Sign up here >>";
    } else {
      return "Already signed up? Log in here >>";
    }
  }

  renderErrors() {
    let errors = this.props.errors;
    if (errors.length > 0) {
      let errorItems = errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
      return(
        <section className = "errors">
          <span>Whoops!</span>
          <ul>
            {errorItems}
          </ul>
        </section>
      );
    }
    return null;
  }

  renderForm() {
    if (this.state.type === "login") {
      return <LogInFormContainer />;
    } else {
      return <SignUpFormContainer />;
    }
  }

  render() {
    return(
      <div className="auth-button">
        <button onClick={this.openModal}>
          {this.props.type === "login" ? "Log In" : "Sign Up"}
        </button>

        <Modal
          contentLabel="Auth Form"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.modalCustomStyles}>
          <section className="auth-form">
            {this.renderErrors()}
            {this.renderForm()}
            <span onClick={this.switchAuthType.bind(this)}>
              {this.switchButtonText()}
            </span>
          </section>
        </Modal>
      </div>
    );
  }
}

export default AuthFormModal;
