import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Switch, Route }

const App = (props) => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route path="/" component= { } />
    </Switch>
  </div>
);


export default App;
