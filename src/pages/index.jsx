import styled from 'styled-components';

import usePosts from '../hooks/usePosts';

import Layout from '../components/Layout';
import Posts from '../components/Posts';

const Container = styled.div``;

function IndexPage() {
  const posts = usePosts();
  const paths = posts.map(({ path }) => path);

  return (
    <Container>
      <Layout paths={paths}>
        <Posts posts={posts} />
      </Layout>
    </Container>
  );
}

export default IndexPage;
