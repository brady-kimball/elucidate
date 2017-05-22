import React from 'react';

class AnnotationShow extends React.Component {


  render() {
    let annotation = this.props.annotation;
    return (
      <section className='annotation-detail'>
        {annotation.body}
      </section>
    );
  }
}

export default AnnotationShow;
