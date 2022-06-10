import "scss/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

// Components
import CustomToaster from "components/CustomToaster";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <CustomToaster />
    </>
  );
}

export default MyApp;
