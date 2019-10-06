import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import cuddlingImage from './images/cuddling.png';
import evelynSignatureImage from './images/evelyn.signature.png';
import amosSignatureImage from './images/amos.signature.png';

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

        {children}

        <div className="sign-off">
          <p>Love from</p>
          <img alt="Evelyn" src={evelynSignatureImage} /> <p>and</p>
          <img alt="Amos" src={amosSignatureImage} />
          <p>(Amos)</p>
          <p>X X X X X X</p>
        </div>
      </div>
    </animated.div>
  );
};
export default ThankYou;
