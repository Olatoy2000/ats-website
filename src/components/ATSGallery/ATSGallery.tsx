import React from "react";
import Link from "next/link";
import ATS1 from "./assets/image-25.png";

//Gallery in the Updates page
function ATSGallery() {
	const gallery = [
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
		{
			atsImage: ATS1.src,
		},
	];
	return (
		<div
			className='flex flex-col gap-8 pt-9'
			id='ATSGallery'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>ATS</span>Gallery
			</h1>
			<div className='grid grid-cols-3 grid-rows-3 gap-2'>
				{gallery.map((item, idx) => (
					<div id={`#${idx}`}>
						<img
							className='md:w-full ATSgal ATSgal:hover object-cover'
							src={item.atsImage}
						/>
					</div>
				))}
			</div>
			<Link href='/gallery'>
				<div className='flex justify-end'>
					<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
						<span className='text-white'>See More</span>
					</button>
				</div>
			</Link>
		</div>
	);
}

export default ATSGallery;
