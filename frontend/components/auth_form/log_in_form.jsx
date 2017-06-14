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
    if (!this.props.loading) {
      this.props.receiveLoading(true);
      this.props.login(this.state);
    }
  }

  guestLogin(e) {
    e.preventDefault();
    let _guest = {
      userIdentifier: "guest",
      password: "password"
    };
    if (!this.props.loading) {
      this.props.receiveLoading(true);
      this.props.login(_guest);
    }
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  renderButtons() {
    if (this.props.loading) {
      return (
        <section className="login-buttons">
          <button className='disabled' type={"button"}
            onClick={this.guestLogin.bind(this)}>
            Guest
          </button>
          <button className='disabled'>Log In</button>
        </section>
      );
    } else {
      return (
        <section className="login-buttons">
          <button type={"button"}
            onClick={this.guestLogin.bind(this)}>
            Guest
          </button>
          <button>Log In</button>
        </section>
      );
    }
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
        {this.renderButtons()}
      </form>
    );
  }
}

export default LogInForm;
