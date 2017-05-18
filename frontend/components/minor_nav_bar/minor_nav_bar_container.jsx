import React from 'react';
import { connect } from 'react-redux';
import MinorNavBar from './minor_nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinorNavBar);
