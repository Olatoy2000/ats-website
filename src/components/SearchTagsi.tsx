import { clsx } from "@mantine/core";
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Link from "next/link";

//Search with Tags
function SearchTagsi() {
	const [active, setActive] = useState<null | number>(null);
	const [tagCategory, setTagCategory] = useState<any>([]);

	const fetchSearchTagsi = () => {
		axios(`/api/v1/category`)
			.then((response) => {
				setTagCategory(response.data.data.results);
			})
			.catch((error) => {
				console.log(error)
			})
	};

	useEffect(() => {
		fetchSearchTagsi();
	}, []);
	return (
		<div className='pt-8 lg:pb-0 pb-20'>
			<h1 className='lg:text-2xl md:text-lg font-bold flex gap-1 py-8'>
				<span className='bg-[#C81107] text-white'>Search</span>With Tags
			</h1>
			<ul className='grid lg:grid-flow-row lg:grid-cols-3 grid-cols-3 grid-flow-row gap-4 md:grid md:grid-cols-2 md:grid-rows-3'>
				{tagCategory.map((item: any, idx: number) => (
					<Link
						href={`/category/${item.id}`}
						key={idx}>
						<li
							key={idx}
							onClick={() => setActive(idx)}
							className={clsx(
								"rounded text-center lg:text-base md:text-sm p-3 flex-1 cursor-pointer",
								active === idx
									? "bg-[#C81107] text-white"
									: "text-[#666] border"
							)}>
							{item.name}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

export default SearchTagsi;
