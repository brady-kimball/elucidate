import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadFile(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null});
    }
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData["user[username]"] = this.state.username;
    formData["user[email]"] = this.state.email;
    formData["user[password]"] = this.state.password;
    formData["user[avatar]"] = file;
    debugger
    this.props.signup(formData);
  }

  render() {
    let img = "";
    if(this.state.imageFile){
      img = <img className="preview-image" src={this.state.imageUrl}/>;
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <input  type="text"
                name="user[username]"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.update("username")}/>
        <input  type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.update("email")}/>
        <input  type="file"
                onChange={this.uploadFile.bind(this)}/>
                {img}
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
