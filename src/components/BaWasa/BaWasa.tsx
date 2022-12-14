import React from "react";
import MyImage from "./assets/image 5.png";
import MyImage2 from "./assets/image 2.png";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";
import moment from "moment";

const singleBlogSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "Yay! AFEX Grain Quality Enhancement Center",
				intro:
					"The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
				description:
					"The Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain .",
				created_at: "2022-11-15T11:05:48.549589+01:00",
				author: {
					id: 1,
					first_name: "Gloria",
					last_name: "Eronmonsele",
					email: "egloria@afexnigeria.com",
					bio: "Talent Management Analyst",
					profile_pics:
						"https://atsbk.afexats.com/media/media/profile_pic/glo.jpg",
				},
				url: "https://atsbk.afexats.com/api/v1/blogs/1",
				image:
					"https://atsbk.afexats.com/media/media/blog_article/images/GrainQ.jpg",
				min_read: "less than a minute read",
				author_fullname: "Gloria Eronmonsele",
			},
		],
	},
	message: "Successfully Retrieved",
};
type Blogs = typeof singleBlogSample;

function BaWasa() {
	var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
	var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
	const { data: singleBlog, isLoading } = useQuery<Blogs>(
		["Single-Blog-Article"],
		async () =>
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/blogs`, {
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
		<>
			{singleBlog?.data?.results.map(
				(
					{
						id,
						title,
						intro,

						created_at,
						author_image,
						image,
						min_read,
						author_fullname,
					}: any,
					idx: number
				) =>
					idx === 0 ? (
						<div
							className='lg:grid lg:grid-flow-col md:grid md:grid-flow-col flex flex-col-reverse border border-[#E2E2E2] shadow rounded-md'
							key={idx}>
							<article className='lg:px-8 md:px 8 pl-8 pr-3 flex flex-col'>
								<div className='mb-10'>
									<Link href={`/blogs/${id}`}>
										<p className='text-[#2D3748] text-[clamp(1rem,2.5vw,2.25rem)] text-4xl font-bold pt-10'>
											{CryptoJS.AES.decrypt(title, key, {
												iv: iv,
											}).toString(CryptoJS.enc.Utf8)}
										</p>
									</Link>
									<p className='text-base text-[#718096]'>
										{CryptoJS.AES.decrypt(intro + "...", key, {
											iv: iv,
										}).toString(CryptoJS.enc.Utf8)}
									</p>
								</div>
								<div className='flex gap-3 pt-8 pb-4 items-center'>
									<img
										src={
											process.env.NEXT_PUBLIC_BASE_URL +
											CryptoJS.AES.decrypt(author_image, key, {
												iv: iv,
											}).toString(CryptoJS.enc.Utf8)
										}
										className='h-10 object-cover'
									/>
									<div className='font-sans flex-1'>
										<p className='text-[#C81107] text-xs font-semibold'>
											{CryptoJS.AES.decrypt(author_fullname, key, {
												iv: iv,
											}).toString(CryptoJS.enc.Utf8)}
										</p>
										<span className='flex justify-between items-center'>
											<p className='text-[#6F6F70] font-semibold text-[10px]'>
												<span>
													{
														moment(
															CryptoJS.AES.decrypt(created_at, key, {
																iv: iv,
															}).toString(CryptoJS.enc.Utf8)
														)
															.format("ll")
															.split(",")[0]
													}
												</span>{" "}
												&nbsp;&nbsp;
												{CryptoJS.AES.decrypt(min_read, key, {
													iv: iv,
												}).toString(CryptoJS.enc.Utf8)}
											</p>
											<Link href={`/blogs/${id}`}>
												<span className='text-[15px] text-[#2D3748] font-bold -mt-1'>
													Read more
												</span>
											</Link>
										</span>
									</div>
								</div>
							</article>
							<div>
								<img
									className='object-cover h-full'
									src={
										process.env.NEXT_PUBLIC_BASE_URL +
										CryptoJS.AES.decrypt(image, key, {
											iv: iv,
										}).toString(CryptoJS.enc.Utf8)

										// `${process.env.NEXT_PUBLIC_BASE_URL}+${CryptoJS.AES.decrypt(
										// 	image,
										// 	key,
										// 	{
										// 		iv: iv,
										// 	}
										// ).toString(CryptoJS.enc.Utf8)}`
									}
								/>
							</div>
						</div>
					) : (
						id === 2
					)
			)}
		</>
	);
}

export default BaWasa;
