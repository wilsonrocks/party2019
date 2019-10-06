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

    <Route
      path="/thankyou/lucy-and-josie"
      render={() => (
        <ThankYou giver="Lucy and Josie">
          <p>
            Thank you for our lovely presents! Evelyn loved the original You
            Choose book so much that it fell apart, so she's very excited about
            the space version - as well as the jungle sock puppets. Amos got
            very excited when he saw his dinosaur book. We're all big Axel
            Scheffler fans here:)
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/sam-and-ben"
      render={() => (
        <ThankYou giver="Sam and Ben">
          <p>
            Thank you for our lovely presents! We have lots of bugs in our
            garden so Evelyn can't wait to make a home for them. Amos, (and
            Evelyn and Mummy and Daddy) has loved driving the little red car -
            an instant hit!
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/django-and-fiadh"
      render={() => (
        <ThankYou giver="Django and Fiadh">
          <p>
            Thank you for our lovely presents! Evelyn's mug is amazing, and she
            did the jigsaws with her nana today, needing some help with
            Fluttershy and Rainbow dash. Amos loves his park book as well -
            great interactions!
          </p>
          <p> Also, thank you for your cakes, they were delicious:)</p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/annie-and-lizzie"
      render={() => (
        <ThankYou giver="Annie and Lizzie">
          <p>
            Thank you for our lovely presents! Evelyn loves crafty things like
            her dressing up book, and Amos will love doing painting - he's just
            starting to enjoy making <del>marks</del> mess!
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/eva"
      render={() => (
        <ThankYou giver="Eva and Benjamine">
          <p>
            Thank you for our lovely presents! Amos will love listening to this
            beautiful story:)
          </p>
        </ThankYou>
      )}
    />

    <Route
      path="/thankyou/isabella-and-isaac"
      render={() => (
        <ThankYou giver="Isabella and Isaac">
          <p>
            Thank you for our lovely presents! Evelyn loves her bracelet, and
            got up very early the day after to look at all the bits to make the
            mirror! Amos loves his truck and belt as well:)
          </p>
        </ThankYou>
      )}
    />
  </Switch>
);
export default ThankYouRouter;
