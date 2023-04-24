import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

// Components
import Layout from "@/src/components/layout/component";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Home</title>
        </Head>
        <main>
          <div className="p-2">
            <h2 className="text-xl font-semibold tracking-wide">Currently</h2>
            <div className="flex flex-col">
              <span>Software Engineer at Nielsen</span>
              <span>
                Working on my app{" "}
                <Link className="underline" href="https://roastly.xyz">
                  Roastly
                </Link>
              </span>
              <span>Drinking a lot of coffee ☕️</span>
              <div></div>
            </div>
          </div>
        </main>
      </>
    </Layout>
  );
}
