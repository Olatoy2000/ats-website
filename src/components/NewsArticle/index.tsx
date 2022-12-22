import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { NewsQuery, isNewsSample } from "./library";
import SearchEntries from "../SearchEntries";
import { NewsSample } from "./NewsArticle";
import { NewsSearchDisplay } from "./NewsSearchDisplay";
import { LoadingOverlay } from "@mantine/core";

interface INews {
	query?: string;
}

function Blog({ query }: INews) {
	const url = query
		? process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/search-news/?q=${query}`
		: process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/news`;

	async function getNews() {
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

	const { data: news, isFetched: newsFetched } = useQuery<NewsQuery>(
		["news", query],
		getNews
	);

	return (
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{newsFetched ? (
					isNewsSample(news) ? (
						news?.data?.results?.map((data, idx) => {
							return (
								<NewsSample
									key={idx}
									{...data}
								/>
							);
						})
					) : (
						news?.data?.hits?.map((data, idx) => {
							return (
								<NewsSearchDisplay
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
