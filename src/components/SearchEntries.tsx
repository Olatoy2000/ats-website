import React from "react";
import { Pagination } from "@mantine/core";

//Pagination
function SearchEntries() {
	return (
		<section className='flex justify-between pb-44'>
			<div
				style={{ borderRadius: "5px", border: "1px solid #C4C4C4" }}
				className='p-3'>
				1-8 of 200 Entries
			</div>
			<article className='flex gap-5'>
				<button className='bg-[#C81107] border flex justify-between px-2 gap-1 items-center rounded-md text[0.9374rem] text-white font-normal'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'>
						<path
							stroke='#FFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit='10'
							strokeWidth='1.5'
							d='M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67'></path>
					</svg>
					Prev
				</button>
				<Pagination
					total={10}
					styles={{
						item: {
							"&[data-active]": {
								backgroundColor: "#C81107",
								padding: "1rem",
							},
						},
					}}
					withControls={false}
				/>
				<button className='bg-[#C81107] border flex justify-between px-2 gap-1 items-center rounded-md text[0.9374rem] text-white font-normal'>
					Next
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'>
						<path
							stroke='#FFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit='10'
							strokeWidth='1.5'
							d='M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83'></path>
					</svg>
				</button>
			</article>
		</section>
	);
}
export default SearchEntries;
