import React from "react";

function Main() {
	return (
		<main className='flex-col m-auto'>
			<div className='flex items-center justify-between w-[80%] m-auto pt-12'>
				<span className='text-[#C81107] w-32 text-xl font-bold pl-'>
					ATS Updates
				</span>
				<span className='flex'>
					{" "}
					<input
						type='text'
						placeholder='Input search text'
						className='px-2 py-1.5 border w-64 rounded-sm text-sm outline-none'
					/>
					{/* <span></span> */}
				</span>
				<span className='text-[#C81107]'>Blogs</span>
				<span className='text-[#C81107]'>News</span>
				<span className='text-[#C81107]'>Gallery</span>
			</div>

			<div className='bgHero'>
				<h1> Happenings Around You </h1>
			</div>
		</main>
	);
}

export default Main;
