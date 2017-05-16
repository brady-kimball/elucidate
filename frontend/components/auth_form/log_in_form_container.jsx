import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
