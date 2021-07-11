import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import {
  Button,
  Container,
  DetailsWrapper,
  Recipient,
  Text,
  Wrapper,
} from '../../../components/Gwen.2021';
import yogImage from './greek.png';
import gwenImage from './gwenyog.png';

const GUEST_LIST: Record<string, string | undefined> = {
  ann: 'Ann and Martin',
  mark: 'Mark, Sarah and Amy',
  paul: 'Paul, Mel, Luke and Dylan',
  leah: 'Leah, Emmet and Max',
  kathleen: 'Kathleen',
};

interface Props {
  name?: string;
}

const Invite: FunctionComponent<Props> = ({ name }) => {
  const [showingDetails, setShowingDetails] = useState<boolean>(false);
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper showingDetails={showingDetails}>
        {name && <Recipient>Dear {name}</Recipient>}
        <Text>
          <span>Sunday</span>
          <span>12 September</span>
          <span> 2pm</span>
        </Text>
        <div>
          <Image
            src={yogImage}
            height="373"
            width="271"
            alt="Gwen's First Birthday"
            priority
          />
        </div>
        <div>
          <Image src={gwenImage} height="357" width="216" alt="" priority />
        </div>

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
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsObject = {
    paths: Object.keys(GUEST_LIST).map((name) => ({ params: { name } })),
    fallback: false,
  };
  return pathsObject;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const name = context.params?.name;
  if (typeof name === 'string') return { props: { name: GUEST_LIST[name] } };

  return { props: {} };
};

export default Invite;
