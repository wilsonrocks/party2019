import React from 'react';
import './App.scss';
const TrainTrack = React.lazy(() => import('./TrainTrack'));
const Text = React.lazy(() => import('./Text'));

const Fallback = (
  <div className="fallback">
    <p>Just wait... It will be good.</p>
  </div>
)


const App = () => (
  <div className="App">
    <React.Suspense fallback={Fallback}>
      <TrainTrack />
      <Text />
    </React.Suspense>
  </div >
);

export default App;
