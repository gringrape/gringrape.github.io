import { graphql } from 'gatsby';

import styled from 'styled-components';

import Layout from '../components/Layout';
import Posts from '../components/Posts';

const Container = styled.div``;

function IndexPage({ data }) {
  const posts = mapToPosts(data);

  return (
    <Container>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </Container>
  );
}

function mapToPosts(data) {
  return data
    .allMarkdownRemark
    .nodes
    .map(({
      id, frontmatter: {
        title, slug, date, description,
      },
    }) => ({
      id,
      title,
      path: slug,
      date,
      description,
    }));
}

export const query = graphql`
  query GetPosts {
    allMarkdownRemark(
      filter: {frontmatter: {slug: {ne: "/blog/index"}}}
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          slug
          date
        }
      }
    }
  }
`;

export default IndexPage;
