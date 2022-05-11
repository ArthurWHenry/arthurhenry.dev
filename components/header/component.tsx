import Head from "next/head";
import { HeaderTypes } from "./types";

const Header = ({ pageTitle }: HeaderTypes) => {
  return (
    <>
      <Head>
        <title>Arthur - {pageTitle}</title>
      </Head>
      <div className="border-t border-black px-2 py-2">
        <h1 className="text-normal text-center font-semibold uppercase text-black sm:text-left">
          {pageTitle}
        </h1>
      </div>
    </>
  );
};

export default Header;
