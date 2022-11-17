import Link from "next/link";
import React from "react";

function ApplyNow() {
	return (
		<div className='bg-[#F9E3E3] md:py-6 md:px-44 lg:py-14 flex flex-col rounded-lg justify-center items-center md:mb-10 lg:mb-6'>
			<p className='text-[#222222] font-semibold lg:text-xl md:text-xs md:pb-5 md:w-max'>
				Begin Your Tech Journey With ATS
			</p>
			<Link href='/courses'>
				<button className='md:w-52 group md:h-12 border border-[#C81107] rounded items-center justify-center hover:bg-[#C81107]'>
					<span className='text-[#C81107] group-hover:text-[white]'>
						Apply Now
					</span>
				</button>
			</Link>
		</div>
	);
}

export default ApplyNow;
