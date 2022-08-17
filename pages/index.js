import React from "react";
import Head from "next/head";
import Home from "../pages/home";

function Index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </>
  );
}
export default Index;
