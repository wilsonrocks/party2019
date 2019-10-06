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
    <Route
      path="/thankyou/winter"
      render={() => (
        <ThankYou giver="Winter">
          <p>
            Thank you for our lovely presents, we love these sticker books but
            we haven't seen these ones! We are super excited to do them!
          </p>
        </ThankYou>
      )}
    />
  </Switch>
);
export default ThankYouRouter;
