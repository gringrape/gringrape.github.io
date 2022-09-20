import dateComparators from '../dateComparators';

export default function Posts({ posts }) {
  return (
    <div>
      <h2>글 목록</h2>
      <ul>
        {[...posts].sort(
          dateComparators.compareInAscendingOrder,
        ).map((post) => (
          <li key={post.id}>
            <a href={post.path}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
