import styled from 'styled-components';

import Navigation from './Navigation';

const Container = styled.header`
  border-bottom: 3px solid #eee;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: calc(800px - 2em);
  padding: 1em;
`;

const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Container>
      <Contents>
        <Logo>
          &#128142; Jin
        </Logo>
        <Navigation />
      </Contents>
    </Container>
  );
}
