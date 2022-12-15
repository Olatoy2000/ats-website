import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "iconsax-react";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

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
var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	);
};

type categories = typeof categoriesSample;
function Categories() {
	const { data: categories, isLoading } = useQuery<categories>(
		["categories-count"],
		async () =>
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/category-news-count`, {
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
							<li>{decrypt(name)}</li>
							<li>{decrypt(category_news_count)}</li>
						</ul>
					)
				)}
			</div>
		</div>
	);
}

export default Categories;
