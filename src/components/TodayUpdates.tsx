import React from "react";

function TodayUpdates() {
	return (
		<div>
			<h1 className='text-2xl font-bold flex gap-1 pb-8'>
				<span className='bg-[#C81107] text-white'>Today's</span>Update
			</h1>
			<div className='grid gap-6 grid-flow-col grid-rows-2'>
				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center py-10'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						14
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>New Posts</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						480
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>
						Total Visitors
					</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						29
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>News Read</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						138
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>Blog Read</p>
				</div>
			</div>
		</div>
	);
}

export default TodayUpdates;
