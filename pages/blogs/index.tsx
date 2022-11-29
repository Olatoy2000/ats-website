import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Blog from "../../src/components/Blog/BlogArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";
import axios from "axios";

const blogArticleSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "Yay! AFEX Grain Quality Enhancement Center",
				intro:
					"The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
				description:
					"The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
				created_at: "2022-11-15T11:05:48.549589+01:00",
				author: {
					id: 1,
					first_name: "Gloria",
					last_name: "Eronmonsele",
					email: "egloria@afexnigeria.com",
					bio: "Talent Management Analyst",
					profile_pics:
						"https://atsbk.afexats.com/media/media/profile_pic/glo.jpg",
				},
				url: "https://atsbk.afexats.com/api/v1/blogs/1",
				image:
					"https://atsbk.afexats.com/media/media/blog_article/images/GrainQ.jpg",
				min_read: "less than a minute read",
				author_fullname: "Gloria Eronmonsele",
			},
		],
	},
	message: "Successfully Retrieved",
};

export type BlogArticle = typeof blogArticleSample;

function index() {
	// const [page, setPage] = useState(1);
	// const [enabled, setEnabled] = useState(false);
	// const [query, setQuery] = useState("");
	// const { replace, pathname } = useRouter();

	// const { data: blogData, isFetched } = useQuery<BlogArticle>(
	// 	["blog", "search", page, query],
	// 	async () => axios.get(`/search-blog/?q=${query}&page=${page}`),
	// 	{
	// 		enabled,
	// 	}
	// );

	// useEffect(() => {
	// 	replace(pathname + `#:~:text=${query}`);
	// }, [isFetched]);

	const [query, setQuery] = useState("");

	return (
		//The blogsearch in the Updates of the landing page
		<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar
				query={query}
				setQuery={setQuery}
			/>
			<Blog query={query} />
			<SearchEntries />
		</div>
	);
}

export default index;
