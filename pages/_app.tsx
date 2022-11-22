import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "../src/layouts/header";
import Footer from "../src/layouts/footer";
import { useRouter } from "next/router";
import { ModalsProvider } from "@mantine/modals";

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	return pathname === "/404" ? (
		<Component {...pageProps} />
	) : pathname === "/newsletter" ? (
		<Component {...pageProps} />
	) : (
		<ModalsProvider>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ModalsProvider>
	);
}

export default MyApp;
