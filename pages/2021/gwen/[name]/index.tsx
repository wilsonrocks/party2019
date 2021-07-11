import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import yogImage from './greek.png';
import {
  Button,
  DetailsWrapper,
  Recipient,
  Text,
  Wrapper,
} from './Gwen.2021.styles';
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
    <>
      <Wrapper showingDetails={showingDetails}>
        {name && <Recipient>Dear {name}</Recipient>}
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
