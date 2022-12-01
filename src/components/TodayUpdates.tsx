import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

const TotalVisitorsSample = {
	success: true,
	status_code: 200,
	data: {
		total_visitors: 2,
	},
	message: "Successfully",
};
type TodayUpdates = typeof TodayUpdatesSample;
type TotalVisitors = typeof TotalVisitorsSample;

function TodayUpdates() {
	const { data: total_visitors } = useQuery<TotalVisitors>(
		["Total-Visitors"],
		async () =>
			await axios
				.post("/api/v1/visitors")
				.then(({ data }) => total_visitors)
				.catch((e) => e)
	);

	const { data: TodayUpdates, isLoading } = useQuery<TodayUpdates>(
		["Todays-Updates"],
		async () =>
			axios("/api/v1/updates")
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
