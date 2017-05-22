import React from 'react';
import { withRouter } from 'react-router-dom';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      track_id: this.props.match.params.trackId,
      body: "",
      start_index: this.props.selection.start_index,
      end_index: this.props.selection.end_index
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
  }

  render() {

    return(
      <section className='annotation-detail'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                  placeholder="Add some shit here"
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
