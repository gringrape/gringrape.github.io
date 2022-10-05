import styled from 'styled-components';

import usePosts from '../hooks/usePosts';

import Layout from '../components/Layout';
import Posts from '../components/Posts';

const Container = styled.div``;

function IndexPage() {
  const posts = usePosts();

  return (
    <Container>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </Container>
  );
}

export default IndexPage;
