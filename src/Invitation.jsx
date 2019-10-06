import React from 'react';
const TrainTrack = React.lazy(() => import('./TrainTrack'));
const Text = React.lazy(() => import('./Text'));

const Invitation = ({
  match: {
    params: { name }
  }
}) => (
  <div className="invitation-wrapper">
    <TrainTrack />
    <Text name={name} />
  </div>
);

export default Invitation;
