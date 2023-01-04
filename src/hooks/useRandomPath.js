import usePosts from './usePosts';

export default function useRandomPath() {
  const posts = usePosts();
  const paths = posts.map(({ path }) => path);
  const randomIndex = Math.floor(
    Math.random() * posts.length,
  );

  return paths[randomIndex];
}
