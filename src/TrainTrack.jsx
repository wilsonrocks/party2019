import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import EvelynImage from './images/evelyn.png';
import AmosImage from './images/amos.png';


const TrainTrack = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle(!toggle);

  useEffect(() => {
    const timer = setTimeout(changeToggle, 2200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [toggle]);

  const transitions = useTransition(toggle, null, {
    from: {
      transform: 'translate3d(100vw, 0, 0)',
      position: 'absolute',
    },
    enter: {
      transform: 'translate3d:(0, 0, 0)',
    },
    leave: {
      transform: 'translate3d(-100vw, 0, 0)',
    },
  });

  return (
    <div className="train-track">
      {
        transitions.map(
          ({ item: toggle, key, props: style }) => (
            <animated.img
              src={toggle ? EvelynImage : AmosImage}
              alt="Train"
              key={key}
              style={style} />
          )
        )}
    </div>
  )
};

export default TrainTrack;