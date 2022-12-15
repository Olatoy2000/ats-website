import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

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
var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	);
};

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
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/updates`, {
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
		<div>
			<h1 className='text-2xl font-bold flex gap-1 pb-8'>
				<span className='bg-[#C81107] text-white'>Today's</span>Update
			</h1>
			<div className='grid gap-6 grid-flow-col grid-rows-2'>
				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center py-10'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates && decrypt(TodayUpdates.data.latest_post)}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>New Posts</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates && decrypt(TodayUpdates.data.total_visitors)}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>
						Total Visitors
					</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates && decrypt(TodayUpdates.data.total_news)}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>News Posted</p>
				</div>

				<div className='bg-[#F9E3E3] rounded-md text-center flex flex-col justify-center'>
					<p className='text-[#C81107] lg:text-2xl md:text-xl font-bold text-center'>
						{TodayUpdates && decrypt(TodayUpdates.data.total_blogs)}
					</p>
					<p className='text-[#222222] lg:text-base md:text-sm'>Blog Posted</p>
				</div>
			</div>
		</div>
	);
}

export default TodayUpdates;
