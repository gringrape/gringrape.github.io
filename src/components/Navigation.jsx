import styled from 'styled-components';

const Container = styled.nav`
  font-size: 1.5em;
  font-weight: bold;

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <a href="/random">
            random
          </a>
        </li>
      </ul>
    </Container>
  );
}
