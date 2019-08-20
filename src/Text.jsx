import React from 'react';
import { animated, useTrail } from 'react-spring';

const invitee = window.location.pathname.slice(1).split('-').join(' ');

const notes = [
  <div>
    {invitee && <p className="invitee">Dear {window.location.pathname.slice(1).split('-').join(' ')}</p>}
    <h1>It&apos;s Party Time!</h1>
    <p>with Evelyn &amp; Amos</p>
  </div>
  ,
  <div>
    <h1>Ravensprings Park</h1>
    <h2>miniature railway</h2>
  </div>
  ,
  <div>
    <h1>Saturday 5 October</h1>
    <h2>2 - 5pm</h2>
  </div>
  ,
  <div>
    <p>Food for children</p>
    <p>Tea and cake for grown-ups</p>
    <p>Bring wellies and waterproofs</p>
  </div>
  ,
  <div>
    <p>Ravensprings Park</p>
    <p>Cawcliffe Road</p>
    <p>Brighouse</p>
    <p>HD6 2HP</p>
    <a href="https://www.bhme.co.uk/">bhme.co.uk</a>
  </div>
  ,
  <div>
    <h1>RSVP</h1>
    <p>Shelley: <a href="tel:07761901734">07761901734</a></p>
    <p>James: <a href="tel:07814509239">07814509239</a></p>
  </div>
  ,
];


const Text = () => {
  const trail = useTrail(notes.length, {
    from: {
      x: 1,
    },
    to: {
      x: 0,
    },
  });

  return (
    <div className="text-wrapper">
      {
        trail.map(({ x }, index) =>
          <animated.section
            key={index}
            style={{
              transform: x.interpolate(n => `translate3d(0, ${100 * n}%, 0) rotate(${((index * 19) % 12) - 6}deg) scale(${1 + 0.3 * n})`)
            }}
          >
            {notes[index]}
          </animated.section>)
      }
    </div>
  );
};

export default Text;
