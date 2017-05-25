import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

  logoClick(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  authButtons() {
    if (this.props.currentUser) {
      return(
        <section className="nav-right logged-in">
          <img  className="avatar-thumb"
                src={this.props.currentUser.avatar_url} />
          <button className="auth-button"
                  onClick={this.logout.bind(this)}>
            Log Out
          </button>
        </section>
      );
    } else {
      return(
        <section className="nav-right">
          <button onClick={this.guestLogin.bind(this)}
            className="auth-button">
            Guest
          </button>
          <AuthFormModalContainer type="login" />
          <AuthFormModalContainer type="signup" />
        </section>
      );
    }
  }

  render() {
    return(
      <nav className="nav-major">
        <section className="search">
          <input type="search"
                  placeholder="Search..."/>
        </section>

        <section className="logo"
                  onClick={this.logoClick.bind(this)}>
          <span className="logo-link">ELUCIDATE</span>
        </section>

        {this.authButtons()}
      </nav>
    );
  }
}

export default withRouter(NavBar);
