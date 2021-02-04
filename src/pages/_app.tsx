import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Arthur Henry"
        description="Front end developer and computer science student."
        openGraph={{
          url: 'https://arthurhenry.dev',
          title: 'Front end developer and computer science student.',
          description: 'Front end developer and computer science student.',
          type: 'website',
          images: [
            {
              url: '/android-chrome-512x512.png',
              width: 512,
              height: 512,
              alt: 'Android chrome icon'
            },
            {
              url: '/apple-touch-icon.png',
              width: 180,
              height: 180,
              alt: 'Apple touch icon'
            }
          ]
        }}
        twitter={{
          handle: '@arthurwhenry',
          site: '@arthurwhenry',
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
