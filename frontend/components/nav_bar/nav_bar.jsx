import React from 'react';
import { Link } from 'react-router-dom';
import AuthFormModalContainer from '../auth_form/auth_form_modal_container';

class NavBar extends React.Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  guestLogin(e) {
    e.preventDefault();
    let _guest = {
      userIdentifier: "guest",
      password: "password"
    };
    this.props.login(_guest);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <nav className="group">

          <section className="nav-right">
            <button className="auth-button"
                    onClick={this.logout.bind(this)}>
              Log Out
            </button>
          </section>
        </nav>
      );
    } else {
      return(
        <nav className="group">

          <section className="nav-right">
            <button onClick={this.guestLogin.bind(this)}
                    className="auth-button">
              Guest
            </button>
            <AuthFormModalContainer type="login" />
            <AuthFormModalContainer type="signup" />
          </section>
        </nav>
      );
    }
  }
}

export default NavBar;
