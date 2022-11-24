import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "../src/layouts/header";
import Footer from "../src/layouts/footer";
import { useRouter } from "next/router";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	return (
		<QueryClientProvider client={queryClient}>
			{["/404", "/newsletter", "/unsubscribe"].includes(pathname) ? (
				<Component {...pageProps} />
			) : (
				<ModalsProvider>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</ModalsProvider>
			)}
		</QueryClientProvider>
	);
}

export default MyApp;
