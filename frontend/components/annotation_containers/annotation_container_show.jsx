import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';
import AnnotationFormContainer from '../annotations/annotation_form_container';

class AnnotationContainerShow extends React.Component {
  constructor(props) {
    super(props)
    this.canary = true
  }
  renderAnnotations() {
    return this.props.annotations.map( (annotation) => {
      return (
        <li key={annotation.id} className="annotation-item">
          <AnnotationShowContainer
            container={this.props.container}
            annotation={annotation}
            clearCurrentContainer={this.props.clearCurrentContainer}/>
        </li>
      )
    })
  }

  render() {
    let annotations = this.props.annotations;
    let container = this.props.container;

    return (
      <section className='annotation-container'>
        <p className="arrow"><i className="arrow left"></i></p>
        <ul className="annotation-items">{this.renderAnnotations()}</ul>
        <AnnotationFormContainer container={container} />
      </section>
    );
  }
}

export default AnnotationContainerShow;
