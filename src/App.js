import React, { useEffect, useState } from 'react';
import './App.scss';
import TrainTrack from './TrainTrack';

function App() {
  const [loopState, setLoopState] = useState(0);
  const cycleLoop = () => setLoopState(loopState + 1);

  useEffect(() => {
    const timer = setTimeout(cycleLoop, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [loopState]);

  return (
    <div className="App">
      <TrainTrack />
    </div >
  );
}

export default App;
