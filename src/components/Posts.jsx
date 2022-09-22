import styled from 'styled-components';

import dateComparators from '../dateComparators';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  font-size: 1.5em;
  padding-block: 1em;
  padding-inline: 2em;
  width: 100%;

  h3 {
    margin-block: 0.5em;
  }

  a {
    color: #1756a9;
    text-decoration: none;
  }
`;

const Description = styled.div`
  font-size: .7em;
`;

export default function Posts({ posts }) {
  return (
    <Container>
      {[...posts].sort((a, b) => (
        dateComparators.compareInAscendingOrder(a.date, b.date)
      )).map((post) => (
        <Item key={post.id}>
          <h3>
            <a href={post.path}>
              {post.title}
            </a>
          </h3>
          <Description>
            {post.description}
          </Description>
        </Item>
      ))}
    </Container>
  );
}
