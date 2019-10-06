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
            about the Glitter Pinkie Pie pony, and Amos is going to look so cool
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
    <Route
      path="/thankyou/dylan"
      render={() => (
        <ThankYou giver="Dylan, Luke, Paul and Mel">
          <p>
            Thank you for our lovely presents! Amos has just learned to sort
            colours, so he's going to love the puzzle, and Evelyn is very
            excited about her unicorn crafts!
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/freddie-and-jacob"
      render={() => (
        <ThankYou giver="Freddie and Jacob">
          <p>
            Thank you for our lovely presents! Evelyn(and also James) is very
            excited about making geometric patterns, and also about her mermaid
            book. Amos started colouring in his book straight away and refused
            to open any other presents. He also loves bouncing his ball around
            and is looking forward to his train book.
          </p>

          <p>
            Also, thank you to Mummy and Daddy so much for doing face paints,
            and bringing lovely cake and generally being awesome :)
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/rose-and-esme"
      render={() => (
        <ThankYou giver="Rose and Esme">
          <p>
            Thank you for our lovely presents! Evelyn loves colouring and is
            very excited about making her own T-shirt. Amos, on the other hand
            is going to go crazy for the Dinosaur sponge art - he's just getting
            into making marks (and a mess!)
          </p>
        </ThankYou>
      )}
    />
  </Switch>
);
export default ThankYouRouter;
