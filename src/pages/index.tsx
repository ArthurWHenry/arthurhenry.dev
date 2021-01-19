// import Head from 'next/head';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      {/* <Head>
        <title>Arthur Henry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <span className="font-bold text-2xl text-gray-900">
            Hello, I'm Arthur
          </span>
        </div>
      </div>
    </Layout>
  );
}
