import React, { useEffect, useState } from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";
import axios from "axios";

//The newssearch in the Updates of the landing page

const newsArticleSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "Bar Raisers Programs",
				intro: "Bar Raisers Program",
				description:
					"Earlier this year, We kickstarted our maiden edition of AFEX Bar Raisers. A group of Young Talents who had little to no experience in their careers and we’re thrilled to announce the success of the entire project. \n\nTo this, we are opening slots for the second edition!\n\nLooking to kickstart your career in a positive culture enabling environment? \n\nTake your shot with this exciting internship for young professionals. \n\nYou can apply by clicking on this link https://lnkd.in/dFWNxfid\n\n\n#AFEX #Xperts #AFEXBarraisers",
				created_at: "2022-11-19T07:38:51.872216+01:00",
				category: {
					id: 2,
					name: "Technology",
				},
				author: {
					id: 2,
					first_name: "Raheem",
					last_name: "Yusuf",
					email: "ryusuf@afexnigeria.com",
					bio: "Head Tech and Innovation",
					profile_pics:
						"https://atsbk.afexats.com/media/media/profile_pic/raheem.jpg",
				},
				image:
					"https://atsbk.afexats.com/media/media/news_article/images/Bar_AVi5v91.jpg",
				url: "https://atsbk.afexats.com/api/v1/news/1",
			},
		],
	},
	message: "Successfully Retrieved",
};
export type NewsArticle = typeof newsArticleSample;
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
	// 		(response);
	// 		("Hello from Nav");
	// 		const news = await response.data.results;
	// 		setNewsResult({ ...newsResult, loading: false, news });
	// 	} catch (error) {
	// 		(error, "Error while fetching");
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
	// 	(response.data);
	// }

	// useEffect(() => {
	// 	fetchNews();
	// }, []);

	const [query, setQuery] = useState("");
	return (
		<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar
				query={query}
				setQuery={setQuery}
			/>
			{/* <News newsarticles={newsResult.news} /> */}
			<News query={query} />
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
//	(response);
//   ("Hello from Nav");
//   const news = await response.data;
//   return {
//     props: news,
//   };
// }
export default index;
