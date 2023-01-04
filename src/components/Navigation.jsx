import styled from 'styled-components';

import useRandomPath from '../hooks/useRandomPath';

const Container = styled.nav`
  font-size: 1.3em;

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default function Navigation() {
  const randomPath = useRandomPath();

  return (
    <Container>
      <ul>
        <li>
          <a href={randomPath}>
            random
          </a>
        </li>
      </ul>
    </Container>
  );
}
