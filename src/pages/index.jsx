import { graphql } from 'gatsby';

const mapToPosts = (data) => data
  .allMarkdownRemark
  .nodes
  .map(({ id, frontmatter: { title, slug } }) => ({
    id,
    title,
    path: slug,
  }));

function IndexPage({ data }) {
  const posts = mapToPosts(data);

  return (
    <main>
      <div>
        <h2>글 목록</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={post.path}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export const query = graphql`
  query GetPosts {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

export default IndexPage;
