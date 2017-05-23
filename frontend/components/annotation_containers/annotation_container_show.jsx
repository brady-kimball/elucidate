import React from 'react';

class AnnotationShow extends React.Component {


  render() {
    let annotation = this.props.annotation;
    return (
      <section className='annotation-detail'>
        <p>Lists of annotations to come</p>
        <h5 className='annotation-author'>some user</h5>
      </section>
    );
  }
}

export default AnnotationShow;
