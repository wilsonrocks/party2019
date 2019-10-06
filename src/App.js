import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import Invitation from './Invitation';

const Fallback = (
  <div className="fallback">
    <p>Just wait... It will be good.</p>
  </div>
);

const App = () => (
  <div className="App">
    <BrowserRouter>
      <React.Suspense fallback={Fallback}>
        <Switch>
          <Route path="/invitation/:name?" component={Invitation} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </div>
);

export default App;
