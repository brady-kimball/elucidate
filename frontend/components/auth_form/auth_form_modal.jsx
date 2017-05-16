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
  }

  switchAuthType() {
    let otherType = (this.state.type === "login" ? "signup" : "login");
    this.setState({type: otherType});
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  placeForm() {
    if (this.state.type === "login") {
      return <LogInFormContainer />;
    } else {
      return <SignUpFormContainer />;
    }
  }

  buttonText() {
    if (this.props.type === "login") {
      return "Log In";
    } else {
      return "Sign Up";
    }
  }

  switchButtonText() {
    if (this.state.type === "login") {
      return "Need to register? Sign up here >>";
    } else {
      return "Already signed up? Log in here >>";
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}>{this.buttonText()}</button>

        <Modal
          contentLabel="Auth Form"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          {this.placeForm()}
          <span onClick={this.switchAuthType.bind(this)}>
            {this.switchButtonText()}
          </span>
        </Modal>
      </div>
    );
  }
}

export default AuthFormModal;
