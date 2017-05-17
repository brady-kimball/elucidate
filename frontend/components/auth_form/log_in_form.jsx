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
        <input  type="text"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.update("password")}/>
        <button>Log in</button>
      </form>
    );
  }
}

export default LogInForm;
