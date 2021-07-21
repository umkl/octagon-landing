import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/layouts/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedEventsData } from "../lib/events";
import Link from "next/link";
import Date from "../components/elements/date";
import { GetStaticProps } from "next";
import Home from "./Home";

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
