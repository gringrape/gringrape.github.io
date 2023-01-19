import { navigate } from 'gatsby';

import styled from 'styled-components';

import Navigation from './Navigation';

const Container = styled.header`
  margin-inline: calc((100vw - 100%) / 2);
  background: #F5F6F7;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: calc(800px - 2em);
  padding: 1.5em 1em;
`;

const Logo = styled.div`
  font-size: 1.5em;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 0.7em;
    color: #939494;
  }
`;

export default function Header() {
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Contents>
        <Logo onClick={handleClick}>
          Jin
          <p>developer & writer</p>
        </Logo>
        <Navigation />
      </Contents>
    </Container>
  );
}
