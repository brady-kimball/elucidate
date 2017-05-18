import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route } from 'react-router-dom';
import TrackIndexContainer from './track_index/track_index_container';
import TrackShowContainer from './track_show/track_show_container';
import MinorNavBarContainer from './minor_nav_bar/minor_nav_bar_container';
import NewTrackContainer from './new_track/new_track_container';

const App = (props) => (
  <div className="app">
    <NavBarContainer />
    <MinorNavBarContainer />
    <Switch>
      <Route exact path="/tracks/new" component={NewTrackContainer} />
      <Route path="/tracks/:trackId" component={TrackShowContainer} />
      <Route path="/" component={TrackIndexContainer} />
    </Switch>
  </div>
);


export default App;
