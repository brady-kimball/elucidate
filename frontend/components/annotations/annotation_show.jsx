import React from 'react';
import CommentBoxContainer from '../comments/comment_box_container';

class AnnotationShow extends React.Component {

  destroySelf(e) {
    e.preventDefault();
    let answer = confirm(
      "Are you sure?  This action can't be undone"
    );
    if (answer) {
      this.props.destroyAnnotation(this.props.annotation.id);
    }
  }

  renderButton() {
    let currentUser = this.props.currentUser || {};
    if (currentUser.username === this.props.annotation.user) {
      return <button onClick={this.destroySelf.bind(this)}>Delete</button>;
    } else {
      return null;
    }
  }

  render() {
    let annotation = this.props.annotation;
    return(
      <section className="annotation-detail">
        <section className="body">
          <section className="voting">
            <button className="downvote"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
            <span className="score">12</span>
            <button className="upvote"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
        </section>
        <p>{annotation.body}</p>
      </section>
        <section className="annotation-extras">
          <h5 className='annotation-author'>{annotation.user}</h5>
          {this.renderButton()}
        </section>
        <CommentBoxContainer annotation={annotation} />
      </section>
    );
  }
}



export default AnnotationShow;
