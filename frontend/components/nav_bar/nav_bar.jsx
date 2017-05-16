import React from 'react';
import { Link } from 'react-router-dom';
import AuthFormModal from '../auth_form/auth_form_modal';

class NavBar extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout()
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
          <AuthFormModal type="login" />
          <AuthFormModal type="signup" />
        </nav>
      );
    }
  }
}

export default NavBar;
