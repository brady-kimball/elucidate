import React from 'react';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }

  updateProperty(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      body: this.state.body,
      user_id: this.props.currentUser.id,
      annotation_id: this.props.annotationId
    });
    this.setState({body: ""})
  }

  render() {
    return (
      <form className="comment-form"
            onSubmit={this.handleSubmit.bind(this)}>
        <input  type="text"
                value={this.state.body}
                placeholder="Join the conversation..."
                onChange={this.updateProperty("body")}
                required/>
        <button>Submit</button>
      </form>
    );
  }
}

export default CommentForm
