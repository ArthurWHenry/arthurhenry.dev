import "@/src/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SEO from "../../next-seo.config.js";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <DefaultSeo {...SEO} />
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
