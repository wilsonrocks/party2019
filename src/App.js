import React, { useEffect, useState } from 'react';
import './App.css';
import TrainRide from './TrainRide';

import EvelynImage from './images/evelyn.png';
import AmosImage from './images/amos.png';

function App() {
  const [loopState, setLoopState] = useState(0);
  const cycleLoop = () => setLoopState(loopState + 1);

  useEffect(() => {
    const timer = setTimeout(cycleLoop, 750);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [loopState]);

  return (
    <div className="App">
      <TrainRide loopState={loopState} offset={0} imgSrc={AmosImage} />
      <TrainRide loopState={loopState} offset={3} imgSrc={EvelynImage} />
    </div >
  );
}

export default App;
