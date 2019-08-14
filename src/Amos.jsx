import React from 'react';
import { animated, useSpring } from 'react-spring';


const loopStateToStyles = loopState => {
  switch (loopState % 6) {
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


const Amos = ({ loopState }) => {

  const styles = useSpring(loopStateToStyles(loopState));


  return (
    <animated.div className="train" style={styles}>
      Amos
    </animated.div>
  );

}

export default Amos;