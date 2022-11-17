import { clsx } from "@mantine/core";
import React, { useState } from "react";

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
		<div>
			<p className='text-2xl font-bold flex gap-1 py-8'>
				<span className='bg-[#C81107] text-white'>Search</span>With Tags
			</p>
			<ul className='flex gap-4 flex-wrap'>
				{SearchTagLinks1.map((item, idx) => (
					<li
						key={idx}
						onClick={() => setActive(idx)}
						className={clsx(
							"rounded text-center leading-6 text-base flex-1",
							active === idx
								? "bg-[#C81107] text-white p-3"
								: "text-[#666] p-3 border"
						)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchTagsi;
