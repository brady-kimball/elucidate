import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdentifier: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  guestLogin(e) {
    e.preventDefault();
    let _guest = {
      userIdentifier: "guest",
      password: "password"
    };
    this.props.login(_guest);
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input  type="text"
                placeholder="Enter username or email"
                value={this.state.userIdentifier}
                onChange={this.update("userIdentifier")}/>
        <input  type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.update("password")}/>
        <section className="login-buttons">
          <button type={"button"}
            onClick={this.guestLogin.bind(this)}>
            Guest
          </button>
          <button>Log in</button>
        </section>
      </form>
    );
  }
}

export default LogInForm;
