import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "../src/layouts/header";
import Footer from "../src/layouts/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
