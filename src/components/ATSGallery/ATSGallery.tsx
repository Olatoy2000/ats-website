import React, { useEffect, useState } from "react";
import Link from "next/link";
import ATS1 from "./assets/image-25.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

const galleryImagesSample = {
	status: "success",
	status_code: 200,
	data: [
		{
			image: "/media/Tech_Stars/ATS-Gallery/im1.jpg",
			alt: null,
			date_created: "2022-11-24",
		},
	],
	message: "Successfully Retrieved",
};

type GalleryImages = typeof galleryImagesSample;

//Gallery in the Updates page
function ATSGallery() {
	var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
	var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

	const { data: atsgallery, isLoading } = useQuery<GalleryImages>(
		["ATS-gallery-images"],
		async () =>
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/images`, {
				headers: {
					"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
					"request-ts": "1669397556",
					"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
				},
				method: "get",
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);

	return (
		<div
			className='flex flex-col gap-8 pt-9'
			id='ATSGallery'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>ATS</span>Gallery
			</h1>
			<div className='grid grid-cols-3 grid-flow-row gap-2'>
				{atsgallery?.data?.splice(1, 9).map(({ image }: any, idx: number) => (
					<div key={idx}>
						<img
							className='ATSgal h-32 w-full ATSgal:hover object-cover'
							src={
								process.env.NEXT_PUBLIC_BASE_URL +
								CryptoJS.AES.decrypt(image, key, { iv: iv }).toString(
									CryptoJS.enc.Utf8
								)
							}
						/>
					</div>
				))}
			</div>
			<Link href='/gallery'>
				<div className='flex justify-end'>
					<button className='bggradi rounded-lg md:p-4 p-2 items-center group-hover:bg-black'>
						<span className='text-white'>See More</span>
					</button>
				</div>
			</Link>
		</div>
	);
}

export default ATSGallery;
