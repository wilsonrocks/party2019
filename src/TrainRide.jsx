import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';

const loopStateToStyles = (loopState, offset, middleOffset) => {
  switch ((loopState + offset) % 6) {
    case 0:
      return {
        left: '100%',
        opacity: 1,
      };
    case 1:
    case 2:
      return {
        left: `${middleOffset}%`,
        opacity: 1,
      }
    case 3:
      return {
        left: '-100%',
        opacity: 1,
      }
    case 4:
      return {
        left: '-100%',
        opacity: 0,
      }
    case 5:
      return {
        left: '100%',
        opacity: 0,
      }
    default: throw new Error(`invalid loopState ${loopState}`);
  }
}


const getMiddleOffset = ref => {
  if (!ref || !ref.current) return 50;
  const trainWidth = ref.current.width;
  const parentWidth = ref.current.parentNode.offsetWidth;
  const middleOffset = 100 * (parentWidth / 2 - trainWidth / 2) / parentWidth;
  return middleOffset;
}

const TrainRide = ({ loopState, offset = 0, imgSrc }) => {

  const ref = useRef();
  const middleOffset = getMiddleOffset(ref);

  const styles = useSpring(loopStateToStyles(loopState, offset, middleOffset));
  return (
    <animated.img className="train" style={styles} src={imgSrc} ref={ref} />
  );

}

export default TrainRide;