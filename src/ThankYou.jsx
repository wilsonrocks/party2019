import React from 'react';
import { animated, useSpring } from 'react-spring';

const ThankYou = ({ giver, children }) => {
  const styles = useSpring({
    from: {
      transform: 'translate3d(100%,0,0) rotate3d(0.5,0.5,0,90deg)'
    },
    to: { transform: 'translate3d(0,0,0) rotate3d(0,0,0,0)' }
  });
  return (
    <animated.div className="thank-you-wrapper" style={styles}>
      <h1>Thank you!</h1>
      <h2>Dear {giver},</h2>
      <p>Thank you for coming to our party!</p>
      <p>{children}</p>

      <p>Love from EVELYN and AMOS XXXXXX</p>
    </animated.div>
  );
};
export default ThankYou;
