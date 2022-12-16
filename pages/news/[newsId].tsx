import React, { useEffect, useState } from "react";
import READ_NEWS_ARTICLE from "../../src/morenewsreading";
import NewsBackground from "../../src/newslayout/newsbackground";
import NewsPost from "../../src/newslayout/newsfeed";
import { useRouter } from "next/router";
import axios from "axios";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

function index() {
	const router = useRouter();
	const [newsDetail, setNewsDetail] = useState(null);

	const fetchNewsDetails = () => {
		let config = {
			method: "get",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news/${router.query.newsId}`,
			headers: {
				"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
				"request-ts": "1669397556",
				"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
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
			<NewsBackground newsDetail={(newsDetail)} />
			<NewsPost newsDetail={(newsDetail)} />
			<READ_NEWS_ARTICLE routeId={(router.query.newsId)} />
		</div>
	) : null;
}

export default index;
