import styled from 'styled-components';

const Container = styled.div`
  margin: 0 calc((100% - 800px) / 2);
  margin-top: 4em; 
  padding-top: 1.5em;
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
