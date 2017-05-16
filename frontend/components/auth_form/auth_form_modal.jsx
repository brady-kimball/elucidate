import React from 'react';
import Modal from 'react-modal';
import { LogInFormContainer, SignUpFormContainer }
  from './log_in_form_container';

class AuthFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  placeForm() {
    if (this.props.type === "login") {
      return <LogInFormContainer />
    } else {
      return <span>Nothing to see here</span>
    }
  }

  buttonText() {
    if (this.props.type === "login") {
      return "Log In";
    } else {
      return "Sign Up";
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
        </Modal>
      </div>
    );
  }
}

export default AuthFormModal;
