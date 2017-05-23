import React from 'react';
import { withRouter } from 'react-router-dom';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      track_id: this.props.match.params.trackId,
      body: "",
      start_index: this.props.selection[0],
      end_index: this.props.selection[1]
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
    this.props.createAnnotation(this.state);
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

export default withRouter (AnnotationForm);
