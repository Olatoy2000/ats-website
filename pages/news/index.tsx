import React, { useEffect, useState } from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";
import axios from "axios";

//The newssearch in the Updates of the landing page
function index() {
	// const [newsResult, setNewsResult] = useState({
	// 	news: [],
	// 	loading: false,
	// });

	// const fetchNews = async () => {
	// 	axios.defaults.headers.common["API-KEY"] =
	// 		process.env.NEXT_PUBLIC_APP_API_KEY;
	// 	axios.defaults.headers.common["HASH-KEY"] =
	// 		process.env.NEXT_PUBLIC_HASH_KEY;
	// 	axios.defaults.headers.common["REQUEST-TS"] =
	// 		process.env.NEXT_PUBLIC_REQUEST_TS;
	// 	try {
	// 		const response = await axios.get(
	// 			`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
	// 		);
	// 		console.log(response);
	// 		console.log("Hello from Nav");
	// 		const news = await response.data.results;
	// 		setNewsResult({ ...newsResult, loading: false, news });
	// 	} catch (error) {
	// 		console.log(error, "Error while fetching");
	// 	}
	// };

	// async function fetchNews() {
	// 	let headersList = {
	// 		"API-KEY":
	// 			"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
	// 		"HASH-KEY":
	// 			"5ac6fcbc48e050f5d0567bcb96a90e3db64e5b74c52d0d9d1e0b5919daee54e0",
	// 		"REQUEST-TS": "1475874457",
	// 	};

	// 	let reqOptions = {
	// 		url: "http://atsbk.afexats.com/api/v1/blogs",
	// 		method: "GET",
	// 		headers: headersList,
	// 	};

	// 	let response = await axios.request(reqOptions);
	// 	console.log(response.data);
	// }

	// useEffect(() => {
	// 	fetchNews();
	// }, []);

	return (
		<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			{/* <News newsarticles={newsResult.news} /> */}
			<News />
			<SearchEntries />
		</div>
	);
}

// export async function getServerSideProps() {
//   axios.defaults.headers.common["API-KEY"] = process.env.NEXT_PULIC_APP_API_KEY;
//   axios.defaults.headers.common["HASH-KEY"] = process.env.NEXT_PUBLIC_HASH_KEY;
//   axios.defaults.headers.common["REQUEST-TS"] =
//     process.env.NEXT_PUBLIC_REQUEST_TS;
//   const response = await axios.get(`${process.env.BASE_URL}/api/v1/news`);
//   console.log(response);
//   console.log("Hello from Nav");
//   const news = await response.data;
//   return {
//     props: news,
//   };
// }
export default index;
