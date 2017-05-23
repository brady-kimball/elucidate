import React from 'react';

class AnnotationShow extends React.Component {

  render() {
    let annotation = this.props.annotation;
    return(
      <section className='annotation-detail'>
        <p>{annotation.body}</p>
        <h5 className='annotation-author'>{annotation.user}</h5>
      </section>
    );
  }
}



export default AnnotationShow;
