import styled from 'styled-components';

const Container = styled.header`
  border-bottom: 3px solid #eee;
`;

const Contents = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  margin: 0 auto;
  max-width: calc(800px - 2em);
  padding: 1em;
`;

export default function Header() {
  return (
    <Container>
      <Contents>
        &#128142; Jin
      </Contents>
    </Container>
  );
}
