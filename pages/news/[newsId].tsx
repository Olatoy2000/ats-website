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
			<READ_NEWS_ARTICLE />
		</div>
	) : null;
}

export default index;
