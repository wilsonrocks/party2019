import React from 'react';
import { animated, useSpring } from 'react-spring';

const loopStateToStyles = (loopState, offset) => {
  switch ((loopState + offset) % 6) {
    case 0:
      return {
        transform: 'translate3d(100%, 0, 0)',
        opacity: 1,
      };
    case 1:
    case 2:
      return {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
      }
    case 3:
      return {
        transform: 'translate3d(-100%, 0, 0)',
        opacity: 1,
      }
    case 4:
      return {
        transform: 'translate3d(-100%, 0, 0)',
        opacity: 0,
      }
    case 5:
      return {
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0,
      }
    default: throw new Error(`invalid loopState ${loopState}`);
  }
}


const TrainRide = ({ loopState, offset = 0, children }) => {

  const styles = useSpring(loopStateToStyles(loopState, offset));


  return (
    <animated.div className="train" style={styles}>
      {children}
    </animated.div>
  );

}

export default TrainRide;