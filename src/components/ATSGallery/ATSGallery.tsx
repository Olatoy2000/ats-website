import React from "react";
import ATS1 from "./assets/image-25.png";

function ATSGallery() {
	return (
		<div className='flex flex-col gap-4'>
			<div>
				<h1 className='text-2xl font-bold flex gap-1 md:py-7'>
					<span className='bg-[#C81107] text-white'>ATS</span>Gallery
				</h1>
				<div className='grid grid-cols-3 grid-rows-3 gap-2'>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>

					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
					<img
						className='md:w-full ATSgal ATSgal:hover'
						src={ATS1.src}
					/>
				</div>
			</div>
			<div className='flex justify-end'>
				<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
					<span className='text-white'>See More</span>
				</button>
			</div>
		</div>
	);
}

export default ATSGallery;
