import React, { useEffect, useState } from 'react';
import './App.css';
import Amos from './Amos';
import Evelyn from './Evelyn';

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
      <Amos loopState={loopState} />
      <Evelyn loopState={loopState} />
    </div>
  );
}

export default App;
