import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';
import AnnotationFormContainer from '../annotations/annotation_form_container';

class AnnotationContainerShow extends React.Component {

  renderAnnotations() {
    return this.props.annotations.map( (annotation) => {
      return (
        <li key={annotation.id} className="annotation-item">
          <section className="voting">
            <button className="downvote"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
            <span className="score">12</span>
            <button className="upvote"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
          </section>
          <AnnotationShowContainer annotation={annotation} />
        </li>
      )
    })
  }

  render() {
    let annotations = this.props.annotations;
    let container = this.props.container;
    return (
      <section className='annotation-container'>
        <ul className="annotation-items">{this.renderAnnotations()}</ul>
        <AnnotationFormContainer container={container} />
      </section>
    );
  }
}

export default AnnotationContainerShow;
