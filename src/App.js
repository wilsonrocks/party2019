import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import Invitation from './Invitation';
import ThankYouRouter from './ThankYouRouter';

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
          <Route path="/thankyou" component={ThankYouRouter} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </div>
);

export default App;
