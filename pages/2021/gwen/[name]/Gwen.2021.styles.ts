import styled from 'styled-components';

const BLUE = '#0041b9';
const PADDING = '10px';
const BORDER_RADIUS = '10px';
const DURATION = '0.3s';

export const Container = styled.div`
  background-color: ${BLUE};
  min-height: 100vh;
`;

export const Wrapper = styled.div<{ showingDetails: boolean }>`
  background: ${BLUE};
  font-family: Roboto, cursive;

  position: relative;
  margin: auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto repeat(2, minmax(0, 1fr));
  background-color: ${BLUE};
  gap: ${PADDING};
  padding: ${PADDING};
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
  transition: transform ${DURATION}, opacity ${DURATION};
`;

export const Text = styled.div`
  color: white;
  padding: ${PADDING};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: ${PADDING};
`;

export const Recipient = styled.h2`
  grid-column: span 2;
  text-align: center;
  color: white;
  margin: 0;
  padding: ${PADDING};
  display: grid;
  place-items: center;
`;

export const Button = styled.button`
  background: ${BLUE};
  border: solid white 3px;
  transition: color ${DURATION}, background-color ${DURATION},
    border-color ${DURATION};
  color: white;
  text-transform: uppercase;
  padding: ${PADDING};
  border-radius: ${BORDER_RADIUS};

  :hover,
  :focus {
    border: solid ${BLUE} 3px;
    color: ${BLUE};
    background-color: white;
  }

  :disabled {
    background: ${BLUE};
    color: white;
  }
`;

export const DetailsWrapper = styled.div<{ showingDetails: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  opacity: ${(props) => (props.showingDetails ? 1 : 0)};

  transition: opacity ${DURATION};
  background-color: white;
  color: ${BLUE};
  display: grid;
  place-items: center;
  padding: ${PADDING};
  border-radius: ${BORDER_RADIUS};
`;
