import React, { useEffect, useState } from "react";
import CommentBlog from "../../src/bloglayout/commentblog";
import Xpertbackestablished from "../../src/bloglayout/xpertbackestablished";
import MORE_BLOG_POST from "../../src/moreblogpostview";
import { useRouter } from "next/router";
import axios from "axios";

function index() {
	const router = useRouter();
	const [blogDetail, setBlogDetail] = useState(null);

	const fetchBlogDetails = () => {
		let config = {
			method: "get",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${router.query.blogId}`,
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
			<Xpertbackestablished blogDetail={blogDetail} />
			<CommentBlog blogDetail={blogDetail} />
			<MORE_BLOG_POST routeId={router.query.blogId} />
		</div>
	) : null;
}

export default index;
