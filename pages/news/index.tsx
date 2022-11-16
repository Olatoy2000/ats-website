import React, { useState } from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";
import axios from "axios";

//The newssearch in the Updates of the landing page
function index() {
	const [newsResult, setNewsResult] = useState({
		news: [],
		loading: false,
	});

	const fetchNews = async () => {
		axios.defaults.headers.common["API-KEY"] =
			process.env.NEXT_PUBLIC_APP_API_KEY;
		axios.defaults.headers.common["HASH-KEY"] =
			process.env.NEXT_PUBLIC_HASH_KEY;
		axios.defaults.headers.common["REQUEST-TS"] =
			process.env.NEXT_PUBLIC_REQUEST_TS;
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`
			);
			console.log(response);
			console.log("Hello from Nav");
			const news = await response.data.results;
			setNewsResult({ ...newsResult, loading: false, news });
		} catch (error) {
			console.log(error, "Error while fetching");
		}
	};
	fetchNews();
	return (
		<div className='flex flex-col mx-auto md:w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			{/* <News newsarticles={newsResult.news} /> */}
			<News />
			<SearchEntries />
		</div>
	);
}

export default index;
