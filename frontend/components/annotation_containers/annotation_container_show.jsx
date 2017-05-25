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
          <AnnotationShowContainer container={this.props.container} annotation={annotation} />
        </li>
      )
    })
  }

  destroySelfChecker() {
    let annotations = this.props.annotations;
    let container = this.props.container;
    if (this.canary && annotations.length === 0 && container.id) {
      this.props.destroyAnnotationContainer(container.id);
      this.canary = false;
    }
  }

  render() {
    let annotations = this.props.annotations;
    let container = this.props.container;
    this.destroySelfChecker();

    return (
      <section className='annotation-container'>
        <ul className="annotation-items">{this.renderAnnotations()}</ul>
        <AnnotationFormContainer container={container} />
      </section>
    );
  }
}

export default AnnotationContainerShow;
