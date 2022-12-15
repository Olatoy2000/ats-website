import React, { useEffect, useState } from "react";
import CommentBlog from "../../src/bloglayout/commentblog";
import Xpertbackestablished from "../../src/bloglayout/xpertbackestablished";
import MORE_BLOG_POST from "../../src/moreblogpostview";
import { useRouter } from "next/router";
import axios from "axios";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	);
};

function index() {
	const router = useRouter();
	const [blogDetail, setBlogDetail] = useState(null);

	const fetchBlogDetails = () => {
		let config = {
			method: "get",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${router.query.blogId}`,
			headers: {
				"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
				"request-ts": "1669397556",
				"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
			},
		};

		axios(config)
			.then((response) => {
				setBlogDetail(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (router.query.blogId) fetchBlogDetails();
	}, [router.query.blogId]);
	return blogDetail ? (
		<div>
			<Xpertbackestablished blogDetail={decrypt(blogDetail)} />
			<CommentBlog blogDetail={decrypt(blogDetail)} />
			<MORE_BLOG_POST routeId={decrypt(router.query.blogId)} />
		</div>
	) : null;
}

export default index;
