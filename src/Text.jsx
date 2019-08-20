import React from 'react';

const Text = () => {
  const invitee = window.location.pathname.slice(1).split('-').join(' ');

  return (
    <div className="text-wrapper">
      <section>
        <div>
          {invitee && <p className="invitee">Dear {window.location.pathname.slice(1).split('-').join(' ')}</p>}
          <h1>It&apos;s Party Time!</h1>
          <p>with</p>
          <h2>Evelyn and Amos</h2>
        </div>
      </section>

      <section>
        <div>
          <h1>Ravensprings Park</h1>
          <h2>miniature railway</h2>
        </div>
      </section>

      <section>
        <div>
          <h1>Saturday 5 October</h1>
          <h2>2 - 5pm</h2>
        </div>
      </section>

      <section>
        <div>
          <p>Food for children</p>
          <p>Tea and cake for grown-ups</p>
          <p>Bring wellies and waterproofs</p>
        </div>
      </section>

      <section>
        <div>
          <p>Ravensprings Park</p>
          <p>Cawcliffe Road</p>
          <p>Brighouse</p>
          <p>HD6 2HP</p>
          <a href="https://www.bhme.co.uk/">bhme.co.uk</a>
        </div>
      </section>

      <section>
        <div>
          <h1>RSVP</h1>
          <p>Shelley: 07761901734</p>
          <p>James: 07814509239</p>
        </div>
      </section>

    </div>
  )
}

export default Text;
