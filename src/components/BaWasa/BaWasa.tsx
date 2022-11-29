import React from "react";
import MyImage from "./assets/image 5.png";
import MyImage2 from "./assets/image 2.png";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
	const { data: singleBlog, isLoading } = useQuery<Blogs>(
		["Single-Blog-Article"],
		async () =>
			axios("/api/v1/blogs")
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
					idx === 1 ? (
						<div className='lg:grid md:grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] flex flex-col-reverse border border-[#E2E2E2] shadow rounded-md gap-12'>
							<article className='md:pt-12 pl-8 flex flex-col gap-16'>
								<div className='mb-10'>
									<p className='text-[#2D3748] text-[clamp(1rem,2.5vw,2.25rem)] text-4xl font-bold py-4'>
										{title}
									</p>
									<p className='text-base text-[#718096]'>{intro}</p>
								</div>
								<div className='flex gap-3 md:pt-28 pb-6 items-center'>
									<img
										src={author_image}
										className='h-10 object-cover'
									/>
									<div className='font-sans flex-1'>
										<p className='text-[#C81107] text-xs font-semibold'>
											{author_fullname}
										</p>
										<span className='flex justify-between items-center'>
											<p className='text-[#6F6F70] font-semibold text-[10px]'>
												<span>
													{moment(created_at).format("ll").split(",")[0]}
												</span>{" "}
												&nbsp;&nbsp; {min_read}
											</p>
											<Link href={`/blogs/${id}`}>
												<p className='text-[15px] text-[#2D3748] font-bold -mt-1'>
													Read more
												</p>
											</Link>
										</span>
									</div>
								</div>
							</article>
							<div>
								<img
									className='w-full h-full object-cover'
									src={image}
								/>
							</div>
						</div>
					) : (
						id === 1
					)
			)}
		</>
	);
}

export default BaWasa;
