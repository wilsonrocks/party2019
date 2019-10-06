import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import cuddlingImage from './images/cuddling.png';

const ThankYou = ({ giver, children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const styles = useSpring(
    imageLoaded
      ? {
          transform: 'translate3d(0,0,0) rotate3d(0,0,0,0) scale(1,1)'
        }
      : {
          transform:
            'translate3d(100%,0,0) rotate3d(0.5,0.5,0,90deg) scale(1, 0)'
        }
  );
  return (
    <animated.div className="thank-you-wrapper" style={styles}>
      <div className="inner-wrapper">
        <h1>Thank you!</h1>

        <div className="cuddling-wrapper">
          <img
            alt=""
            src={cuddlingImage}
            className="cuddling"
            onLoad={() => setImageLoaded(true)}
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
