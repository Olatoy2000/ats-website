import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "iconsax-react";

const categoriesSample = {
	status: "success",
	status_code: 200,
	data: [
		{
			name: "Business",
			category_news_count: 1,
		},
		{
			name: "Technology",
			category_news_count: 1,
		},
		{
			name: "Agriculture",
			category_news_count: 1,
		},
	],
	message: "Successfully Retrieved",
};

type categories = typeof categoriesSample;
function Categories() {
	const { data: categories, isLoading } = useQuery<categories>(
		["categories-count"],
		async () =>
			axios("/api/v1/category-news-count", {
				headers: {
					"HASH-KEY":
						"091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
					"REQUEST-TS": "1669397556",
					"API-KEY":
						"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
				},
				method: "get",
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);
	return (
		<div className='py-9'>
			<h1 className='flex bg-[#C81107] w-32 text-white text-2xl font-bold'>
				Categories
			</h1>
			<div className='md:text-sm lg:text-base grid grid-flow-row pt-6'>
				{categories?.data?.map(
					({ name, category_news_count }: any, idx: number) => (
						<ul
							className='flex justify-between border-b-[#D1E7E5] border-b py-2'
							key={idx}>
							<li>{name}</li>
							<li>{category_news_count}</li>
						</ul>
					)
				)}
			</div>
		</div>
	);
}

export default Categories;
