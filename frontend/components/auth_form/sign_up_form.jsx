import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      avatar: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.update("username")}/>
        <input  type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.update("email")}/>
        <input  type="text"
                placeholder="Upload an Avatar"
                value={this.state.avatar}
                onChange={this.update("avatar")}/>
        <input  type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.update("password")}/>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
