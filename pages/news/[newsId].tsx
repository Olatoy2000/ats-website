import React, { useEffect, useState } from "react";
import READ_NEWS_ARTICLE from "../../src/morenewsreading";
import NewsBackground from "../../src/newslayout/newsbackground";
import NewsPost from "../../src/newslayout/newsfeed";
import { useRouter } from "next/router";
import axios from "axios";

function index() {
	const router = useRouter();
	const [newsDetail, setNewsDetail] = useState(null);

	const fetchNewsDetails = () => {
		let config = {
			method: "get",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news/${router.query.newsId}`,
			headers: {
				"HASH-KEY":
					"091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
				"REQUEST-TS": "1669397556",
				"API-KEY":
					"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
			},
		};
		axios(config)
			.then((response) => {
				setNewsDetail(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (router.query.newsId) fetchNewsDetails();
	}, [router.query.newsId]);
	return newsDetail ? (
		<div>
			<NewsBackground newsDetail={newsDetail} />
			<NewsPost newsDetail={newsDetail} />
			<READ_NEWS_ARTICLE routeId={router.query.newsId} />
		</div>
	) : null;
}

export default index;
