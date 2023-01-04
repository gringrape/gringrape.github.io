import styled from 'styled-components';

import './layout.css';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  font-size: 16px;
`;

const Main = styled.div`
  margin: 0 auto;
  max-width: calc(800px - 4em);
  padding: 2em;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
}
