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
			axios("/api/v1/blogs", {
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
											{title}
										</p>
									</Link>
									<p className='text-base text-[#718096]'>{intro}</p>
								</div>
								<div className='flex gap-3 pt-8 pb-4 items-center'>
									<img
										src={process.env.NEXT_PUBLIC_BASE_URL + author_image}
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
									src={image}
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
