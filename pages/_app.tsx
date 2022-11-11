import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "../src/layouts/header";
import Footer from "../src/layouts/footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return pathname === "/404" ? (
    <Component {...pageProps} />
  ) : (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
