import React from 'react';

class AnnotationShow extends React.Component {

  destroySelf(e) {
    e.preventDefault();
    this.props.destroyAnnotation(this.props.annotation.id);
  }

  render() {
    let annotation = this.props.annotation;
    return(
      <section className="annotation-detail">
        <p>{annotation.body}</p>
        <section className="annotation-extras">
          <h5 className='annotation-author'>{annotation.user}</h5>
          <button onClick={this.destroySelf.bind(this)}>Delete</button>
        </section>
      </section>
    );
  }
}



export default AnnotationShow;
