import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Markdown from '../components/Markdown';

function PostPage({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Layout>
        <h1>
          {frontmatter.title}
        </h1>
        <Markdown html={html} />
      </Layout>
    </div>
  );
}

export default PostPage;

export const PostQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export { Head } from './index';
