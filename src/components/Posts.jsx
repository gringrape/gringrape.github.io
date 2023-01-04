import styled from 'styled-components';

import dateComparators from '../dateComparators';

import formatDate from '../formatDate';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  padding-top: 1em;
  padding-bottom: 1.3em;
  width: 100%;
  border-top: 1px solid rgba( 0, 0, 4, .125 );

  h3 {
    margin-block: 0.5em;
  }

  a {
    color: #3d4449;
    text-decoration: none;
  }
`;

const Description = styled.div`
  font-size: .7em;
`;

const Date = styled.div`
  color: rgba( 0, 0, 4, 0.4 );
`;

export default function Posts({ posts }) {
  return (
    <Container>
      {[...posts].sort((a, b) => (
        dateComparators.compareInAscendingOrder(a.date, b.date)
      )).map((post) => (
        <Item key={post.id}>
          <div>
            <h3>
              <a href={post.path}>
                {post.title}
              </a>
            </h3>
            <Description>
              {post.description}
            </Description>
          </div>
          <Date>
            {formatDate(post.date)}
          </Date>
        </Item>
      ))}
    </Container>
  );
}
