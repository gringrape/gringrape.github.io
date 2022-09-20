import { graphql } from 'gatsby';

import Posts from '../components/Posts';

function IndexPage({ data }) {
  const posts = mapToPosts(data);

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}

function mapToPosts(data) {
  return data
    .allMarkdownRemark
    .nodes
    .map(({ id, frontmatter: { title, slug, date } }) => ({
      id,
      title,
      path: slug,
      date,
    }));
}

export const query = graphql`
  query GetPosts {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`;

export default IndexPage;
