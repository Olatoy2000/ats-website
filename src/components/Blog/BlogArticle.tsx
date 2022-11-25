import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import axios from "axios";
import Link from "next/link";
import Placeholder from "./assets/placeholder.png";
import { useQuery } from "@tanstack/react-query";
import { BlogArticle } from "../../../pages/blog";

const blogSample = {
	status: "success",
	status_code: 201,
	data: {
		id: 7,
		title: "AFEX Grain Quality Enhancement Center",
		intro:
			"AFEX 100,000MT/ year Grain Quality Enhancement Center and 30,000MT storage capacity warehouse was commissioned by His Excellency, the Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects i",
		description:
			"AFEX 100,000MT/ year Grain Quality Enhancement Center and 30,000MT storage capacity warehouse was commissioned by His Excellency, the Governor of Kaduna State, Nasir El-RufaiThanks to our partner Kaduna Investment Promotion Agency (KADIPA) and other stakeholders. The grain quality enhancement center will foster improvement on quality and quantity of supply, and cause more positive ripple effects in the agricultural value chain and Nigeria at lar",
		created_at: "2022-11-11T09:56:37.564134+01:00",
		url: "http://localhost:8000/api/v1/blogs/7",
		image:
			"https://res.cloudinary.com/dhrksuz8n/image/upload/v1/media/AG_sif4av",
		min_read: "less than a minute read",
		author_fullname: "Sir Raheem Yusuf",
	},
	message: "Successfully Retrieved",
};

type BlogSample = typeof blogSample;

//Blog Search page

interface IBlog {
	blogData?: BlogArticle;
}

function Blog({ blogData }: IBlog) {
	const { data: blogSearch, isLoading } = useQuery<BlogSample>(
		["blogs"],
		async () => {
			return axios("/api/v1/blogs")
				.then(({ data }) => data)
				.catch((e) => e);
		},

		{
			enabled: !blogData,
		}
	);

	return (
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{blogData?.data?.results?.map(
					(
						{
							id,
							title,
							intro,
							created_at,
							author,
							image,
							min_read,
							author_fullname,
						},
						idx: number
					) => (
						<div
							key={idx}
							className='flex flex-col pb-4 shadow rounded-md'>
							<img
								src={image ? image : Placeholder.src}
								className='h-96 object-cover w-full'
							/>
							{/* <span>
							{search === ""
								? text
								: text
										.split(re)
										.filter((part) => part !== "")
										.map((part, i) =>
											re.test(part) ? (
												<div
													className='bg-[yellow]'
													key={part + i}>
													{part}
												</div>
											) : (
												part
											)
										)} */}

							<p className='text-[#2D3748] text-xl font-bold p-4'>{title}</p>
							<p className='text-[#718096] flex-1 text-sm px-4'>
								{intro + "..."}
							</p>
							<div className='flex gap-3 pt-10 items-center px-4'>
								<img
									src={author.profile_pics}
									className='h-10'
								/>
								<div className='font-sans flex-1'>
									<p className='text-[#C81107] text-xs font-semibold'>
										{author_fullname}
									</p>
									<span className='flex gap-3 justify-between items-center'>
										<p className='text-[#6F6F70] font-semibold text-[10px]'>
											<span>
												{moment(created_at).format("ll").split(",")[0]}
											</span>{" "}
											&nbsp;&nbsp; {min_read}
										</p>
										<Link href={`/blog/${id}`}>
											<span className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
												Read more
											</span>
										</Link>
									</span>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default Blog;
