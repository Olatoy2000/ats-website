import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { BlogQuery, isBlogSample } from "./library";
import SearchEntries from "../SearchEntries";
import { BlogDisplay } from "./BlogDisplay";
import { BlogSearchDisplay } from "./BlogSearchDisplay";
import { LoadingOverlay } from "@mantine/core";

interface IBlog {
	query?: string;
}

function Blog({ query }: IBlog) {
	const url = query
		? process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/search-blog/?q=${query}`
		: process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/blogs`;

	async function getBlogs() {
		return axios(url, {
			headers: {
				"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
				"request-ts": "1669397556",
				"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
			},
		})
			.then(({ data }) => data)
			.catch((error: AxiosError) => {
				return error.message;
			});
	}

	const { data: blogs, isFetched: blogsFetched } = useQuery<BlogQuery>(
		["blogs", query],
		getBlogs
	);

	return (
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{blogsFetched ? (
					isBlogSample(blogs) ? (
						blogs?.data?.results?.map((data, idx) => {
							return (
								<BlogDisplay
									key={idx}
									{...data}
								/>
							);
						})
					) : (
						blogs?.data?.hits?.map((data, idx) => {
							return (
								<BlogSearchDisplay
									{...data}
									key={idx}
								/>
							);
						})
					)
				) : (
					<LoadingOverlay
						visible={true}
						color='red'
					/>
				)}
			</div>
			<SearchEntries />
		</div>
	);
}

export default Blog;
