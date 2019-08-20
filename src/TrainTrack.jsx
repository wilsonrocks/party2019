import React, { useState, useEffect } from 'react';
import { useTransition, useSpring, animated } from 'react-spring';

import EvelynImage from './images/evelyn.png';
import AmosImage from './images/amos.png';

const content = [
  null, EvelynImage, null, AmosImage,
];

const TrainTrack = () => {
  const [active, setActive] = useState(0);
  const rotateActive = () => setActive((active + 1) % content.length);

  useEffect(() => {
    const timer = setTimeout(rotateActive, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [active])

  const trackStyles = useSpring({
    from: {
      transform: 'translate3d(-100vw,0,0)',
    },
    transform: 'translate3d(0,0,0)',
  });

  const transitions = useTransition(active, null, {
    from: {
      transform: 'translate3d(100vw, 0, 0) skew(-15deg, 0)',
      position: 'absolute',
    },
    enter: {
      transform: 'translate3d:(0, 0, 0) skew(0, 0)',
    },
    leave: {
      transform: 'translate3d(-100vw, 0, 0)  skew(-15deg 0)',
    },
  });

  return (
    <animated.div className="track-wrapper" style={trackStyles}>
      <div className="train-track">
        {
          transitions.map(
            ({ item: active, key, props: style }) => {
              return (content[active] ?
                <animated.img
                  src={content[active]}
                  alt=""
                  className="train"
                  key={key}
                  style={style} />
                : <animated.div key={key} style={style} className="train" />
              )
            }
          )}
      </div>
      <div className="spacer" />
    </animated.div>
  )
};

export default TrainTrack;