import usePosts from './usePosts';

export default function useRandomPathGenerator() {
  const posts = usePosts();
  const paths = posts.map(({ path }) => path);

  return () => {
    const randomIndex = Math.floor(
      Math.random() * posts.length,
    );

    return paths[randomIndex];
  };
}
