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

interface ILayout {
  children: ReactNode;
}

export const NavbarHeightContext = React.createContext({
  NavbarHeight: 0,
  setNavbarHeight: (x) => {},
});

export default function Layout({ children }: ILayout) {
  const [NavbarHeight, setNavbarHeight] = useState(0);
  const size: Size = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <Head>
        <link rel="icon" href="/Octagon-logo-1000BA.ico" />
        <meta
          name="description"
          content="5-Star Restaurant in Vienna that supports all Crypto-currencies."
        />
        <meta name="og:title" content="Home-Octagon" />
      </Head>
        <NavbarHeightContext.Provider value={{ NavbarHeight, setNavbarHeight }}>
          <Navbar />
          <main
            className={styles.main}
            style={{
              minHeight: size.height - NavbarHeight,
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
