import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route } from 'react-router-dom';
import TrackIndexContainer from './track_index/track_index_container';

const App = (props) => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route path="/" component={TrackIndexContainer} />
    </Switch>
  </div>
);


export default App;
