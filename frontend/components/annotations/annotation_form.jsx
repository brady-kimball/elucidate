import React from 'react';
import { withRouter } from 'react-router-dom';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    let container = this.props.container || {};
    this.state = {
      user_id: this.props.currentUser.id,
      annotation_container_id: container.id,
      body: ""
    };
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.props.selection) {
      this.props.createAnnotationContainer({
        start_index: this.props.selection[0],
        end_index: this.props.selection[1],
        track_id: this.props.trackId,
      }).then(this.createAnnotationAfterContainer.bind(this))
    } else {
      this.props.createAnnotation(this.state);
      this.setState({body: ""});
    }
  }

  createAnnotationAfterContainer({ annotationContainer }) {
    this.props.createAnnotation({
      user_id: this.state.user_id,
      annotation_container_id: annotationContainer.id,
      body: this.state.body
    });
  }

  render() {

    return(
      <section className='annotation-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                  placeholder="Add your thoughts"
                  value = {this.state.body}
                  onChange={this.update("body")} />
                <button>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(AnnotationForm);
