import Head from "next/head";
import { HeaderTypes } from "./types";

const Header = ({ pageTitle }: HeaderTypes) => {
  return (
    <>
      <Head>
        <title>Arthur</title>
      </Head>
    </>
  );
};

export default Header;
