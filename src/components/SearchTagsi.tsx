import { clsx } from "@mantine/core";
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

//Search News with Tags Category

const searchCategorySample = {
	success: true,
	status_code: 200,
	data: {
		count: 6,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				name: "Technology",
				url: "https://atsbk.afexats.com/api/v1/category/1",
			},
		],
	},
	message: "Successfully",
};
type Prop = {
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
};
type searchCategory = typeof searchCategorySample;
function SearchTagsi({ setKeyword }: Prop) {
	const [active, setActive] = useState<null | number>(null);

	const { data: SearchCategory, isLoading } = useQuery<searchCategory>(
		["Search-with-tags-category"],
		async () =>
			axios("/api/v1/category")
				.then(({ data }) => data)
				.catch((e) => e)
	);
	return (
		<div className='pt-8 lg:pb-0 pb-20'>
			<h1 className='lg:text-2xl md:text-lg font-bold flex gap-1 py-8'>
				<span className='bg-[#C81107] text-white'>Search</span>With Tags
			</h1>
			<ul className='grid lg:grid-flow-row lg:grid-cols-3 grid-cols-3 grid-flow-row gap-4 md:grid md:grid-cols-2 md:grid-rows-3'>
				{SearchCategory?.data?.results.map(({ id, name }: any, idx: number) => (
					<li
						key={idx}
						onClick={() => {
							setActive(idx);
							setKeyword(name);
						}}
						className={clsx(
							"rounded text-center lg:text-base md:text-sm py-3 flex-1 cursor-pointer",
							active === idx ? "bg-[#C81107] text-white" : "text-[#666] border"
						)}>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchTagsi;
