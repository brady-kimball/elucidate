import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';
import AnnotationFormContainer from '../annotations/annotation_form_container';

class AnnotationContainerShow extends React.Component {

  renderAnnotations() {
    return this.props.annotations.map( (annotation) => {
      return (
        <li>
          <AnnotationShowContainer annotation={annotation} />
        </li>
      )
    })
  }

  render() {
    let annotations = this.props.annotations;
    let selection = [this.props.container.start_index, this.props.container.end_index];
    debugger
    return (
      <section className='annotation-container'>
        <ul>{this.renderAnnotations()}</ul>
        <AnnotationFormContainer selection={selection} />
      </section>
    );
  }
}

export default AnnotationContainerShow;
