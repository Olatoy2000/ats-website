import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const newsArticleSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "Bar Raisers Programs",
				intro: "Bar Raisers Program",
				description:
					"Earlier this year, We kickstarted our maiden edition of AFEX Bar Raisers. A group of Young Talents who had little to no experience in their careers and we’re thrilled to announce the success of the entire project. \n\nTo this, we are opening slots for the second edition!\n\nLooking to kickstart your career in a positive culture enabling environment? \n\nTake your shot with this exciting internship for young professionals. \n\nYou can apply by clicking on this link https://lnkd.in/dFWNxfid\n\n\n#AFEX #Xperts #AFEXBarraisers",
				created_at: "2022-11-19T07:38:51.872216+01:00",
				category: {
					id: 2,
					name: "Technology",
				},
				author: {
					id: 2,
					first_name: "Raheem",
					last_name: "Yusuf",
					email: "ryusuf@afexnigeria.com",
					bio: "Head Tech and Innovation",
					profile_pics:
						"http://atsbk.afexats.com/media/media/profile_pic/raheem.jpg",
				},
				image:
					"http://atsbk.afexats.com/media/media/news_article/images/Bar_AVi5v91.jpg",
				url: "http://atsbk.afexats.com/api/v1/news/1",
			},
		],
	},
	message: "Successfully Retrieved",
};
type News = typeof newsArticleSample;

//News Search page
// function index({ newsarticles }) {

function index() {
	const { data: newsSearch, isLoading } = useQuery<News>(
		["News-Articles-Search"],
		async () =>
			axios("/api/v1/news")
				.then(({ data }) => data)
				.catch((e) => e)
	);

	return (
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-24 lg:p-3 p-2 text-white text-2xl font-bold'>
				News
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{newsSearch?.data?.results.map(
					(
						{
							title,
							intro,
							id,
							min_read,
							created_at,
							author,
							author_name,
							image,
						}: any,
						idx: number
					) => (
						<div
							key={idx}
							className='flex flex-col pb-4 shadow rounded-md'>
							<img
								src={image ? image : Placeholder.src}
								className='h-96 object-cover md:w-full'
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

							<Link href={`/news/${id}`}>
								<p className='text-[#2D3748] text-xl font-bold p-4'>{title}</p>
							</Link>
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
										{author_name}
									</p>
									<span className='flex gap-3 justify-between items-center'>
										<p className='text-[#6F6F70] font-semibold text-[10px]'>
											<span>
												{moment(created_at).format("ll").split(",")[0]}
											</span>{" "}
											&nbsp;&nbsp; {min_read}
										</p>
										<Link href={`/news/${id}`}>
											<span className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
												Read more
											</span>
										</Link>
									</span>
								</div>
							</div>
							{/* </span> */}
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default index;
