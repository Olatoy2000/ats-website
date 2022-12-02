import React, { useMemo, useState } from "react";
import BackToUpdate from "../../src/components/backToUpdates";
import { Pagination } from "@mantine/core";
import Container from "../../src/components/Container";
import { usePagination } from "@mantine/hooks";
import { Query, useQuery } from "@tanstack/react-query";
import axios from "axios";

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
	const { data: galleryImages, isLoading } = useQuery<GalleryImages>(
		["gallery-images"],
		async () =>
			axios("/api/v1/images", {
				headers: {
					"api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
					"request-ts": "1669397556",
					"hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
				},
				method: "get"
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);

	const atsGallery = useMemo(
		() =>
			galleryImages?.data?.reduce(
				(
					acc: Record<
						string,
						Array<{
							image: string;
							alt: null;
							date_created: string;
						}>
					>,
					item
				) => {
					const prev = acc[item.date_created] ?? [];
					acc[item.date_created] = prev.concat([item]);
					return acc;
				},
				{}
			),
		[isLoading]
	);

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
					{Object.entries(atsGallery ?? {}).map(([date, pictures]) => (
						<section key={date}>
							<p className='text-[#C81107] w-full pb-[1.125rem] text-[1.25rem] leading-7 font-bold'>
								{date}
							</p>
							<ul className='grid grid-cols-6 gap-[15px]'>
								{pictures.map((item, id) => (
									id + 1 <= highest && id + 1 >= lowest &&
									<li key={id}>
										<img
											className='w-full h-full object-cover'
											src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
											alt='galleries of Afex tech stars'
										/>
									</li>
								))}
							</ul>
						</section>
					))}
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
		</article>
	);
}

export default index;
