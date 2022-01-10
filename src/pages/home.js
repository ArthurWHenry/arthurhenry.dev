import { memo } from 'react';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <span>Hello, world! My name is Arthur.</span>
      </div>
    </Layout>
  );
};

export default memo(Home);
