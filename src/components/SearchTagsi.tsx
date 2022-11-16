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
	const [active, setActive] = useState(null);
	return (
		<div className='py-8'>
			<h1 className='lg:text-2xl md:text-lg font-bold flex gap-1 md:py-8 py-8'>
				<span className='bg-[#C81107] text-white'>Search</span>With Tags
			</h1>
			<ul className='lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4 md:grid md:grid-cols-2 md:grid-rows-3'>
				{SearchTagLinks1.map((item, idx) => (
					<li
						onClick={() => setActive(idx)}
						className={clsx(
							"rounded text-center leading-6 lg:text-base md:text-sm md:p-3 flex-1 cursor-pointer",
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
