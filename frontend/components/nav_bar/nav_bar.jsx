import React from 'react';
import { Link } from 'react-router-dom';
import AuthFormModalContainer from '../auth_form/auth_form_modal_container';

class NavBar extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <nav>
          <button onClick={this.logout.bind(this)}>Log Out</button>
        </nav>
      );
    } else {
      return(
        <nav>
          <AuthFormModalContainer type="login" />
          <AuthFormModalContainer type="signup" />
        </nav>
      );
    }
  }
}

export default NavBar;
