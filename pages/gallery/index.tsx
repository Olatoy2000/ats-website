import React, { Fragment, useEffect, useMemo, useState } from "react";
import BackToUpdate from "../../src/components/backToUpdates";
import { Pagination } from "@mantine/core";
import Container from "../../src/components/Container";
import { usePagination } from "@mantine/hooks";
import { Query, useQuery } from "@tanstack/react-query";
import axios from "axios";
import CryptoJS from "crypto-js";
import Loading from "../../src/components/loading";

const galleryData = {
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
type GalleryImages = typeof galleryData;

//Gallery in the Updates page

function index() {
	var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
	var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
	const [images, setImages] = useState<any[]>([])
	const [loading, setLoading] = useState(false)

	const { data: galleryImages, isLoading } = useQuery(
		["gallery-images"],
		async () =>
			axios({
				url: "/api/v1/album",
				baseURL: process.env.NEXT_PUBLIC_BASE_URL,
				headers: {
					"api-key": process.env.NEXT_PUBLIC_API_KEY,
					"request-ts": "1669397556",
					"hash-key": process.env.NEXT_PUBLIC_HASH_KEY,
				},
				method: "get"
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);
	console.log(galleryImages)
	// const getAllCategories = async (url: string, categories: any[]) => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	categories.push(...data.data.results);
	// 	if (data.data.next) getAllCategories(data.data.next, categories);
	// 	else
	// return Promise.resolve(categories).then(function (value) {
	// 	console.log(value);
	// 	setAllCategories(value);
	// });
	// }
	useEffect(() => {
		setLoading(true)
		const categories: any[] = [];
		galleryImages?.data?.results.map(async (item: any, idx: number) => {
			const response = axios({
				url: CryptoJS.AES.decrypt(item.url, key, { iv: iv }).toString(CryptoJS.enc.Utf8),
				method: "get",
				headers: {
					"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
					"request-ts": "1669397556",
					"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`
				}
			})
			const data = (await response).data
			let name = data.data.name
			categories.push({ name: name, images: [...data.data.active_images] })
			return Promise.resolve(categories).then(function (value) {
				console.log(value);
				setImages(value);
			});
		})

		setLoading(false)
	}, [galleryImages])
	// const atsGallery = useMemo(
	// 	() =>
	// 		galleryImages?.data?.reduce(
	// 			(
	// 				acc: Record<
	// 					string,
	// 					Array<{
	// 						image: string;
	// 						alt: null;
	// 						date_created: string;
	// 					}>
	// 				>,
	// 				item
	// 			) => {
	// 				const prev = acc[item.date_created] ?? [];
	// 				acc[item.date_created] = prev.concat([item]);
	// 				return acc;
	// 			},
	// 			{}
	// 		),
	// 	[isLoading]
	// );

	const [page, onChange] = useState(1);
	const [lowest, setLowest] = useState(1)
	const [highest, setHighest] = useState(5)

	const pagination = usePagination({ total: 10, page, onChange });
	const nextHandler = () => {
		pagination.setPage(page + 1);
		pagination.range;
		setLowest(lowest + 5)
		setHighest(highest + 5)
	};

	const prevHandler = () => {
		pagination.setPage(page - 1);
		pagination.range;
		if (lowest !== 1) {
			setLowest(lowest - 5)
			setHighest(highest - 5)
		}
	};



	//
	return (
		<article className='my-10 flex flex-col gap-8'>
			<BackToUpdate />
			<Container>
				<section className='flex flex-col mb-8 gap-[30px]'>
					<section>
						{galleryImages?.data?.results?.map((item: any, idx: number) => (
							<Fragment key={idx}>

								<p className='text-[#C81107] w-full pb-[1.125rem] text-[1.25rem] leading-7 font-bold'>
									{CryptoJS.AES.decrypt(item.name, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
								</p>
								<ul className='grid grid-cols-6 gap-[15px]'>
									{images?.map((el, id) => (
										el.name === item.name &&
										el.images.map((obj: any, idx: number) => (

											id + 1 <= highest && id + 1 >= lowest &&
											<li key={idx}>
												<img
													className='w-full h-full object-cover'
													src={CryptoJS.AES.decrypt(obj.image, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
													// {process.env.NEXT_PUBLIC_BASE_URL + item.image}
													alt={CryptoJS.AES.decrypt(obj.alt, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
												/>
											</li>
										))
									))}
								</ul>
							</Fragment>
						))}
					</section>

				</section>
				<section className='flex justify-between'>
					<article className='flex justify-evenly w-full items-center gap-4'>
						<button
							onClick={prevHandler}
							className='bg-[#C81107] justify-self-start border flex justify-between px-1 py-1 gap-1 items-center rounded-md text-[0.875rem] text-white font-normal'>
							<svg
								xmlns='https://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'>
								<path
									stroke='#FFF'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeMiterlimit='10'
									strokeWidth='1.5'
									d='M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67'></path>
							</svg>
							Prev
						</button>
						<Pagination
							page={pagination.active}
							total={10}
							styles={{
								item: {
									"&[data-active]": {
										backgroundColor: "#C81107",
									},
								},
							}}
							withControls={false}
						/>
						<button
							onClick={() => nextHandler()}
							className='bg-[#C81107] justify-self-end border flex justify-between px-1 py-1 gap-1 items-center rounded-md text[0.875rem] text-white font-normal'>
							Next
							<svg
								xmlns='https://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'>
								<path
									stroke='#FFF'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeMiterlimit='10'
									strokeWidth='1.5'
									d='M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83'></path>
							</svg>
						</button>
					</article>
				</section>
			</Container>
			<Loading loading={isLoading} />
			<Loading loading={loading} />
		</article>
	);
}
export default index;
