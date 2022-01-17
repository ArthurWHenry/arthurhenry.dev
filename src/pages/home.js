import { memo } from 'react';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <main className="p-3">
          <h1 className="font-black text-3xl">Howdy 🤠,</h1>
          <p>
            my name is Arthur Henry, and I'm a software engineer at Nielsen.
            Thanks for stopping by!
          </p>
        </main>
      </div>
    </Layout>
  );
};

export default memo(Home);
