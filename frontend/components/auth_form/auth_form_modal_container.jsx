import React from 'react';
import { connect } from 'react-redux';
import AuthFormModal from './auth_form_modal';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFormModal);
