import React from "react";

function TodayUpdates() {
	return (
		<div>
			<h1 className='text-2xl font-bold flex gap-1 md:pb-8'>
				<span className='bg-[#C81107] text-white'>Today's</span>Update
			</h1>
			<div className='grid gap-6 grid-cols-2 grid-rows-2'>
				<div className='bg-[#F9E3E3] rounded-md md:p-10'>
					<p className='text-[#C81107] text-2xl font-bold text-center'>14</p>
					<p className='text-[#222222] text-base'>New Posts</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md md:p-8'>
					<p className='text-[#C81107] text-2xl font-bold text-center'>480</p>
					<p className='text-[#222222] text-base'>Total Visitors</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md md:p-10'>
					<p className='text-[#C81107] text-2xl font-bold text-center'>29</p>
					<p className='text-[#222222] text-base'>News Read</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md md:p-10'>
					<p className='text-[#C81107] text-2xl font-bold text-center'>138</p>
					<p className='text-[#222222] text-base'>Blog Read</p>
				</div>
			</div>
		</div>
	);
}

export default TodayUpdates;
