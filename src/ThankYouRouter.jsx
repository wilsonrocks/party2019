import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ThankYou from './ThankYou';

const ThankYouRouter = () => (
  <Switch>
    <Route
      path="/thankyou/tristram"
      render={() => (
        <ThankYou giver="Tristram">
          <p>
            Thank you for our lovely presents, Evelyn is <em>very</em> excited
            about the Glitte Pinkie Pie pony, and Amos is going to look so cool
            splashing in puddles in his awesome suit!
          </p>
        </ThankYou>
      )}
    />
  </Switch>
);
export default ThankYouRouter;
