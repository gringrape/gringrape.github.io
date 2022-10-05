import { useEffect } from 'react';

import { navigate } from 'gatsby';

import usePosts from '../hooks/usePosts';

export default function RandomPage() {
  const posts = usePosts();

  const randomIndex = Math.floor(
    Math.random() * posts.length,
  );

  const { path } = posts[randomIndex];

  useEffect(() => {
    navigate(path);
  }, [path]);

  return (
    <>
    </>
  );
}
