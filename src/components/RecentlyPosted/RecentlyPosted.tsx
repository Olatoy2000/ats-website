import React, { Fragment, useEffect, useState } from "react";
import MyImage from "./assets/image 5.png";
import Gloria from "./assets/image 10.png";
import Calendar from "./assets/image 11.png";
import Clock from "./assets/image 12.png";
import moment from "moment";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
// import { Link } from "iconsax-react";
import Link from "next/link";
import ApplyNow from "../ApplyNow";
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
						"https://atsbk.afexats.com/media/media/profile_pic/raheem.jpg",
				},
				image:
					"https://atsbk.afexats.com/media/media/news_article/images/Bar_AVi5v91.jpg",
				url: "https://atsbk.afexats.com/api/v1/news/1",
			},
		],
	},
	message: "Successfully Retrieved",
};
type News = typeof newsArticleSample;
function RecentlyPosted() {
	const { data: newsArticle, isLoading } = useQuery<News>(
		["News-Articles"],
		async () =>
			axios("/api/v1/news")
				.then(({ data }) => data)
				.catch((e) => e)
	);

	// const articlesData = agricArticle;
	return (
		<div
			className='grid grid-flow-row pb-9'
			id='RecentlyPosted'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Recently</span>Posted
			</h1>
			<div className='flex flex-col gap-9 pt-6'>
				{newsArticle?.data?.results.map(
					(
						{
							title,
							intro,
							id,
							min_read,
							created_at,
							category_name,
							author_name,
							author,
							image,
						}: any,
						idx: number,
						arr: any[]
					) =>
						idx === 3 ? (
							<Fragment key={idx}>
								<ApplyNow />
								<div
									key={idx}
									className='flex gap-4'>
									<img
										className='h-60 object-cover'
										src={image ? image : Placeholder.src}
									/>

									<div className='md:h-max h-max'>
										<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
											{category_name}
										</span>
										<Link href={`/news/${id}`}>
											<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
												{title}
											</p>
										</Link>
										<div className='flex gap-1 items-center py-1'>
											{/* <img
												className='h-5'
												src={author.profile_pics}
											/> */}
											<div className='grid grid-flow-col items-center'>
												<p className='text-[#777777] text-xs'>{author_name}</p>
												<span className='text-[#999999] font-thin'>|</span>
												&nbsp;&nbsp;
												<p className='text-[#777777] text-xs'>
													{moment(created_at).format("ll").split(",")[0]}
												</p>
												&nbsp;&nbsp;
												<span className='text-[#999999] font-thin'>|</span>
												<p className='text-[#777777] text-xs'>{min_read}</p>
											</div>
										</div>
										<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
											{intro + "..."}&nbsp;&nbsp;
											<Link href={`/news/${id}`}>
												<span className='text-[#C81107]'>Read more</span>
											</Link>
										</p>
									</div>
								</div>
							</Fragment>
						) : arr.length - 1 < 3 && id === 1 ? (
							<Fragment key={idx}>
								<ApplyNow />
								<div
									key={idx}
									className='flex gap-4'>
									<img
										className='object-cover h-60'
										src={image ? image : Placeholder.src}
									/>

									<div className='md:h-max h-max'>
										<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
											{category_name}
										</span>
										<Link href={`/news/${id}`}>
											<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
												{title}
											</p>
										</Link>
										<div className='flex gap-1 items-center py-1'>
											{/* <img
												className='h-5'
												src={author.profile_pics}
											/> */}
											<div className='grid grid-flow-col items-center'>
												<p className='text-[#777777] text-xs'>{author_name}</p>
												<span className='text-[#999999] font-thin'>|</span>
												&nbsp;&nbsp;
												<p className='text-[#777777] text-xs'>
													{moment(created_at).format("ll").split(",")[0]}
												</p>
												&nbsp;&nbsp;
												<span className='text-[#999999] font-thin'>|</span>
												<p className='text-[#777777] text-xs'>{min_read}</p>
											</div>
										</div>
										<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
											{intro + "..."}&nbsp;&nbsp;
											<Link href={`/news/${id}`}>
												<span className='text-[#C81107]'>Read more</span>
											</Link>
										</p>
									</div>
								</div>
							</Fragment>
						) : (
							<div
								key={idx}
								className='flex gap-4'>
								<img
									className='w-96'
									src={image ? image : Placeholder.src}
								/>

								<div className='md:h-max h-max'>
									<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
										{category_name}
									</span>
									<Link href={`/news/${id}`}>
										<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
											{title}
										</p>
									</Link>
									<div className='flex gap-1 items-center py-1'>
										{/* <img
											className='h-5'
											src={author.profile_pics}
										/> */}
										<div className='grid grid-flow-col items-center'>
											<p className='text-[#777777] text-xs'>{author_name}</p>
											<span className='text-[#999999] font-thin'>|</span>
											&nbsp;&nbsp;
											<p className='text-[#777777] text-xs'>
												{moment(created_at).format("ll").split(",")[0]}
											</p>
											&nbsp;&nbsp;
											<span className='text-[#999999] font-thin'>|</span>
											<p className='text-[#777777] text-xs'>{min_read}</p>
										</div>
									</div>
									<p className='text-[#555555] lg:text-base md:text-sm md:py-1'>
										{intro + "..."}&nbsp;&nbsp;
										<Link href={`/news/${id}`}>
											<span className='text-[#C81107]'>Read more</span>
										</Link>
									</p>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
}
export default RecentlyPosted;
