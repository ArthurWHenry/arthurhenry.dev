import Head from "next/head";
import Image from "next/image";

// Assets
import Document from "@/public/Resume.jpg";

// Components
import Layout from "@/src/components/layout/component";

export default function Resume() {
  return (
    <Layout>
      <>
        <Head>
          <title>Blog</title>
        </Head>
      </>
    </Layout>
  );
}
