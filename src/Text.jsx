import React, { useState, Fragment } from 'react';

const content = [
  <Fragment>
    <p className="invitee">{window.location.pathname.slice(1).split('-').join(' ')}</p>
    <p>please come to</p>
    <p>Evelyn and Amos' party</p>
    <p>Saturday 5 October</p>
    <p>2pm - 5pm</p>
  </Fragment>,

  <Fragment>
    <p>Ravensprings Park</p>
    <a href="https://www.bhme.co.uk/">bhme.co.uk</a>
    <p>Cawcliffe Road</p>
    <p>Brighouse</p>
    <p>HD6 2HP</p>
  </Fragment>,

  <Fragment>
    <p>Food for children</p>
    <p>Tea and cake for grown-ups</p>
    <p>Bring wellies and waterproofs</p>
  </Fragment>,
];


const Text = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="text-wrapper">
      {page > 0 ? <button type="button" onClick={() => setPage(page - 1)} >&lt;</button> : <span />}
      <div className="text">
        {content[page]}
      </div>
      {page < content.length - 1 ? <button type="button" onClick={() => setPage(page + 1)} >&gt;</button> : <span />}



    </div>
  );
};

export default Text;
