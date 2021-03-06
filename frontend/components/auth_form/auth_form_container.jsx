import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import SignUpForm from './sign_up_form';
import { login, signup } from '../../actions/session_actions';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = state => ({
  errors: state.session.errors,
  loading: state.loading.loading
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  receiveLoading: (bool) => dispatch(receiveLoading(bool))
});

export const LogInFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);

export const SignUpFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
