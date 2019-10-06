import React from 'react';
import { animated, useSpring } from 'react-spring';

import cuddlingImage from './images/cuddling.png';

const ThankYou = ({ giver, children }) => {
  const styles = useSpring({
    from: {
      transform: 'translate3d(100%,0,0) rotate3d(0.5,0.5,0,90deg)'
    },
    to: { transform: 'translate3d(0,0,0) rotate3d(0,0,0,0)' }
  });
  const imageStyles = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' }
  });
  return (
    <animated.div className="thank-you-wrapper" style={styles}>
      <div className="inner-wrapper">
        <h1>Thank you!</h1>

        <div className="cuddling-wrapper">
          <animated.img
            alt=""
            src={cuddlingImage}
            className="cuddling"
            style={imageStyles}
          />
        </div>

        <h2>Dear {giver},</h2>
        <p>Thank you for coming to our party!</p>
        <p>{children}</p>

        <p>Love from EVELYN and AMOS XXXXXX</p>
      </div>
    </animated.div>
  );
};
export default ThankYou;
