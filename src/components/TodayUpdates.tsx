import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// const TotalVisitorsSample = {
// 	success: true,
// 	status_code: 200,
// 	data: {
// 		total_visitors: 2,
// 	},
// 	message: "Successfully",
// };
// type TotalVisitors = typeof TotalVisitorsSample;
const TodayUpdatesSample = {
	success: true,
	status_code: 200,
	data: {
		total_visitors: 2,
		total_blogs: 10,
		total_news: 10,
		latest_post: 20,
	},
	message: "Successfully",
};
type TodayUpdates = typeof TodayUpdatesSample;

function TodayUpdates() {
	// const { data: total_visitors } = useQuery<TotalVisitors>(
	// 	["Total-Visitors"],
	// 	async () =>
	// 		await axios
	// 			.post("/api/v1/visitors")
	// 			.then(({ data }) => total_visitors)
	// 			.catch((e) => e)
	// );

	const { data: TodayUpdates, isLoading } = useQuery<TodayUpdates>(
		["Todays-Updates"],
		async () =>
			axios("/api/v1/updates", {
				headers: {
					"HASH-KEY":
						"091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
					"REQUEST-TS": "1669397556",
					"API-KEY":
						"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
				},
				method: "get",
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);

	return (
		<div>
			<h1 className='text-2xl font-bold flex gap-1 pb-8'>
				<span className='bg-[#C81107] text-white'>Today's</span>Update
			</h1>
			<div className='grid gap-6 grid-flow-col grid-rows-2'>
				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center py-10'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates?.data?.latest_post}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>New Posts</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates?.data?.total_visitors}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>
						Total Visitors
					</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates?.data?.total_news}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>News Posted</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates?.data?.total_blogs}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>Blog Posted</p>
				</div>
			</div>
		</div>
	);
}

export default TodayUpdates;
