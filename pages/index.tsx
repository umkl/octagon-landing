import React from "react";
import Head from "next/head";
import Home from "./home";

export default function Index(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Home - Octagon</title>
      </Head>
      <Home />
    </main>
  );
}
