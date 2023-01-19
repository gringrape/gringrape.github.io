import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4em; 
  padding: 1.5em;
  padding-bottom: 6em; 
  border-top: 1px solid rgba( 0, 0, 4, 0.125 );
`;

export default function Footer() {
  return (
    <Container>
      ©2023 Jin Kim
    </Container>
  );
}
