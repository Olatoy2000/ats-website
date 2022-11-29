import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import axios from "axios";
import Link from "next/link";
import Placeholder from "./assets/placeholder.png";
import { useQuery } from "@tanstack/react-query";
import { BlogArticle } from "../../../pages/blogs";

const blogSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 10,
		next: null,
		previous: null,
		results: [
			{
				id: 10,
				title: "5 Investors Share The Best Investment Advice they’ve received",
				intro:
					"Perhaps you’ve heard it before “buy low and sell high” “save for the rainy days” and “apply the 50–30–20 rule”, everyone at some point has received a slice of wisdom that helped them make better financial decisions.\n\nWhen it comes to accumulating wealth, it’s important you stay in a constant learning mode grasping all the financial insights you can get. Also, if you take a closer look, most succes",
				description:
					"Perhaps you’ve heard it before “buy low and sell high” “save for the rainy days” and “apply the 50–30–20 rule”, everyone at some point has received a slice of wisdom that helped them make better financial decisions.\n\nWhen it comes to accumulating wealth, it’s important you stay in a constant learning mode grasping all the financial insights you can get. Also, if you take a closer look, most successful investors have one thing in common — they have rules which are simply a diverse set of information to help them make a fortune. However, until you implement that advice, it’s hard to know what will work for you.\n\nHence, we asked 5investors across various fields what is the absolute best investment advice they have ever received and learned from their own experiences.\n\nOlayemi, Businesswoman/ Fashion stylist\n\nFirstly, before you invest make sure you have an emergency fund so you won’t be forced to liquidate your investment when an emergency occurs. Outside the emergency fund, have a savings account and from the savings take out money for investment.\n\nInvestments are for the long term so be sure you are comfortable enough to allow the money set aside for it to grow and multiply over the years while you also add to it. Secondly, invest in foreign currency to hedge against naira devaluation.\n\nYusuf, Head, structuring, and Origination at AFEX\n\nThat would be, you put your money only in investments that you understand and can distinguish how the investments work.\n\nTaiwo, Financial Analyst\n\nOnly invest in something you understand. If the returns are ridiculously or not logically explained, run.\n\nMohammed, Senior Product Manager\n\nThe best advice I have learned is to never forget the market knows better than me. A lot of smart people fall for the trap of overestimating how smart they are and because of that, they think they know better than everyone else. At the bottom of it, a market is a place where buyers and sellers come together, and the market (the collection of all these buyers and sellers communicate through price and other data like trade volume, etc). Therefore, if the market is saying something through all those numbers, it’s important to not think you know better than the market.",
				created_at: "2022-11-27T22:15:45.432734+01:00",
				url: "http://atsbk.afexats.com/api/v1/blogs/10",
				image:
					"http://atsbk.afexats.com/media/media/blog_article/images/5.jpeg",
				min_read: "1 Minute Read",
				author_fullname: "Gloria Eronmonsele",
				author_image: "/media/media/profile_pic/glo.jpg",
			},
		],
	},
};

type BlogSample = typeof blogSample;

//Blog Search page

// interface IBlog {
// 	blogData?: BlogArticle;
// }

// function Blog({ blogData }: IBlog) {
function Blog() {
	const { data: blogSearch, isLoading } = useQuery<BlogSample>(
		["News-Articles-Search"],
		async () =>
			axios("/api/v1/blogs")
				.then(({ data }) => data)
				.catch((e) => e)
	);

	// {
	// 	enabled: !blogData,
	// }

	return (
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{/* {blogData?.data?.results?.map( */}
				{blogSearch?.data?.results.map(
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
									src={author_image}
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
