import { useStaticQuery, graphql } from 'gatsby';

const GetPosts = graphql`
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

export default function usePosts() {
  const data = useStaticQuery(GetPosts);

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
