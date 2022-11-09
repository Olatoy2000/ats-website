import { clsx } from "@mantine/core";
import React, { useState } from "react";

//Search with Tags
const SearchTagLinks1 = [
	"Agriculture",
	"Lifestyle",
	"Fashion",
	"Technology",
	"Business",
	"Design",
];
function SearchTagsi() {
	const [active, setActive] = useState(0);
	return (
		<div className='py-8'>
			<h1 className='text-2xl font-bold flex gap-1 md:py-8'>
				<span className='bg-[#C81107] text-white'>Search</span>With Tags
			</h1>
			<ul className='flex gap-4 flex-wrap'>
				{SearchTagLinks1.map((item, idx) => (
					<li
						onClick={() => setActive(idx)}
						className={clsx(
							"rounded text-center leading-6 text-base p-3 flex-1",
							active === idx ? "bg-[#C81107] text-white" : "text-[#666] border"
						)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchTagsi;
