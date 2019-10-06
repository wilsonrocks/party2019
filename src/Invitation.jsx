import React from 'react';
const TrainTrack = React.lazy(() => import('./TrainTrack'));
const Text = React.lazy(() => import('./Text'));

const Invitation = ({
  match: {
    params: { name }
  }
}) => (
  <React.Fragment>
    <TrainTrack />
    <Text name={name} />
  </React.Fragment>
);

export default Invitation;
