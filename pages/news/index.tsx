import React, { useState } from "react";
import Navbar from "../../src/components/Navbar/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
// import { NewsSample } from "../../src/components/NewsArticle/library";
import { NewsSample } from "../../src/components/NewsArticle/NewsArticle";

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
	const [query, setQuery] = useState("");
	const { pathname } = useRouter();
	const path = pathname.slice(1);

	const { data, isLoading } = useQuery([path, "filter"], async () =>
		axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/` + path, {
			headers: {
				"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
				"request-ts": "1669397556",
				"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
			},
			method: "get",
		})

			.then(({ data }) => data)
			.catch((e) => e)
	);
		
console.log(data)

	return (
		<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar
				query={query}
				setQuery={setQuery}
				path={path}
			/>
			<NewsSample query={data} />
		</div>
	);
}

export default index;
