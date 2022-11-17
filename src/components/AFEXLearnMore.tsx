import React from "react";

function AFEXLearnMore() {
	return (
		<div className='bggrad flex flex-col md:p-10 gap-5 rounded-md'>
			<h2 className='text-white lg:text-2xl md:text-xl font-bold'>
				Learn more about AFEX
			</h2>
			<p className='text-white lg:text-base md:text-sm'>
				Get to know more about the company, what we do, and how we plan to make
				Africa feed itself{" "}
			</p>
			<a
				href='https://africaexchange.com/'
				target='_blank'>
				<button className='flex bg-[#F9FAFB] group md:w-24 md:p-2 rounded items-center justify-center hover:bg-[#312541]'>
					<span className='text-[#312541] group-hover:text-[white]'>
						Visit Us
					</span>
				</button>
			</a>
		</div>
	);
}

export default AFEXLearnMore;
