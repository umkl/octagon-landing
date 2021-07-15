import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.scss";
import Layout, { siteTitle } from "../components/layouts/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout home>
      <Component {...pageProps} />
    </Layout>
  );
}
