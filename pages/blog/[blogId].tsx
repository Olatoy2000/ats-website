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
			<MORE_BLOG_POST />
		</div>
	) : null;
}

export default index;
