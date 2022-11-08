import React from "react";

function AFEXLearnMore() {
	return (
		<div className='bggrad flex flex-col md:p-10 gap-5'>
			<h2 className='text-white text-2xl font-bold'>Learn more about AFEX</h2>
			<p className='text-white text-base'>
				Get to know more about the company, what we do, and how we plan to make
				Africa feed itself{" "}
			</p>
			<button className='flex bg-[#F9FAFB] md:w-24 md:p-2 rounded items-center justify-center hover:bg-[#312541]'>
				<span className='text-[#312541] hover:text-white'>Visit Us</span>
			</button>
		</div>
	);
}

export default AFEXLearnMore;
