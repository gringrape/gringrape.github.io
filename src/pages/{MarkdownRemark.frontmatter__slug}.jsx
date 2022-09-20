/* eslint-disable react/no-danger */

import { graphql } from 'gatsby';

function PostPage({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>
        {frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
