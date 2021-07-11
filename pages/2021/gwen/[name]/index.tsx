import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import yogImage from './greek.png';
import gwenImage from './gwenyog.png';

import { useRouter } from 'next/router';

const Wrapper = styled.div<{ showingDetails: boolean }>`
  --blue: #0041b9;
  --padding: 10px;
  --border-radius: 10px;
  --duration: 0.3s;
  background: var(--blue);
  font-family: Roboto, cursive;

  position: relative;
  margin: auto;
  height: 100vh;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto repeat(2, minmax(0, 1fr));
  background-color: var(--blue);
  gap: var(--padding);
  padding: var(--padding);
  justify-items: center;
  align-items: center;
  transform: rotate3d(
      1,
      0.5,
      0,
      ${(props) => (props.showingDetails ? '90deg' : '0deg')}
    )
    scale(${(props) => (props.showingDetails ? 0.5 : 1)});
  opacity: ${(props) => (props.showingDetails ? 0 : 1)};
  transition: transform var(--duration), opacity var(--duration);
`;

const Text = styled.div`
  color: white;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: var(--padding);
`;

const Recipient = styled.h2`
  grid-column: span 2;
  text-align: center;
  color: white;
  margin: 0;
  padding: var(--padding);
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  background: var(--blue);
  border: solid white 3px;
  transition: color var(--duration), background-color var(--duration),
    border-color var(--duration);
  color: white;
  text-transform: uppercase;
  padding: var(--padding);
  border-radius: var(--border-radius);

  :hover,
  :focus {
    border: solid var(--blue) 3px;
    color: var(--blue);
    background-color: white;
  }

  :disabled {
    background: var(--blue);
    color: white;
  }
`;

const DetailsWrapper = styled.div<{ showingDetails: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  opacity: ${(props) => (props.showingDetails ? 1 : 0)};

  transition: opacity var(--duration);
  background-color: white;
  color: var(--blue);
  display: grid;
  place-items: center;
  padding: var(--padding);
  border-radius: var(--border-radius);
`;

const Invite: FunctionComponent = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showingDetails, setShowingDetails] = useState<boolean>(false);
  return (
    <>
      <Wrapper showingDetails={showingDetails}>
        <Recipient>Dear {name}</Recipient>
        <Text>
          <time>Sunday 12 September</time>
          <time> 2pm</time>
        </Text>
        <Image src={yogImage} height="373" width="271" />
        <Image src={gwenImage} height="357" width="216" />
        {/* <Image src={yogImage} layout="fill" objectFit="contain" /> */}
        {/* <Image src={gwenImage} layout="fill" objectFit="contain" /> */}

        <Button
          onClick={() => setShowingDetails(true)}
          disabled={showingDetails}
        >
          More details
        </Button>
      </Wrapper>
      <DetailsWrapper showingDetails={showingDetails}>
        <address>
          21 Kingston Avenue
          <br />
          Huddersfield
          <br />
          HD5 9HH
        </address>
        <Button onClick={() => setShowingDetails(false)}>Close</Button>
      </DetailsWrapper>
    </>
  );
};

export default Invite;
