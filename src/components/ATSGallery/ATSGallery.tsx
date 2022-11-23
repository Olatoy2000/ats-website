import React, { useEffect, useState } from "react";
import Link from "next/link";
import ATS1 from "./assets/image-25.png";
import axios from "axios";

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
	const [atsGallery, setATSGallery] = useState<any>([]);

	const fetchGallery = () => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/gallery`)
			.then((response) => {
				console.log(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchGallery();
	}, []);

	return (
		<div
			className='flex flex-col gap-8 pt-9'
			id='ATSGallery'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>ATS</span>Gallery
			</h1>
			<div className='grid grid-cols-3 grid-rows-3 gap-2'>
				{gallery.map((item: any, idx: number) => (
					<div key={idx}>
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
