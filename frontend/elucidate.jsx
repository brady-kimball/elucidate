import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import * as TrackActions from './actions/track_actions';
import * as AnnotationActions from './actions/annotation_actions';
import {allTracks} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  Modal.setAppElement(document.body);
  window.store = store;
  window.trackActions = TrackActions;
  window.annotationActions = AnnotationActions;
  window.allTracks = allTracks;

  ReactDOM.render(<Root store={store}/>, root);
});
