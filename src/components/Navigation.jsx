import { navigate } from 'gatsby';

import styled from 'styled-components';

import useRandomPathGenerator from '../hooks/useRandomPathGenerator';

const Container = styled.nav`
  font-size: 1.3em;

  li {
    list-style: none;
  }

  [role=link] {
    font-size: .9em;
    color: #000;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default function Navigation() {
  const generateRandomPath = useRandomPathGenerator();

  const handleClick = () => {
    navigate(generateRandomPath());
  };

  return (
    <Container>
      <ul>
        <li>
          <button
            type="button"
            role="link"
            onClick={handleClick}
          >
            random
          </button>
        </li>
      </ul>
    </Container>
  );
}
