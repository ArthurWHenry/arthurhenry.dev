import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={archivo.className}>
      <Component {...pageProps} />
    </div>
  );
}
