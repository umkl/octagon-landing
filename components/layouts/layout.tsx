import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Footer from "../modules/footer";
import Navbar from "../modules/navbar";
import React from "react";
import useWindowSize, { Size } from "../../hooks/useWindowSize";

const name = "Michael Ungar";
export const siteTitle = "Next.js Sample Website";

interface ILayout {
  children: ReactNode;
  home?: boolean;
}

export const NavbarHeightContext = React.createContext({
  NavbarHeight: 0,
  setNavbarHeight: (x) => {},
});

export default function Layout({ children, home }: ILayout) {
  const [NavbarHeight, setNavbarHeight] = useState(0);
  const size: Size = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}

        <NavbarHeightContext.Provider value={{ NavbarHeight, setNavbarHeight }}>
          <Navbar />
          <main
            className={styles.main}
            style={{
              height: size.height - NavbarHeight,
            }}
          >
            {children}
          </main>
        </NavbarHeightContext.Provider>
      </div>
      <Footer />
    </>
  );
}
