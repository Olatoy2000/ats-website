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
import { Divider, Group, Text } from "@mantine/core";

function RecentlyPosted() {
	const [newsArticle, setNewsArticles] = useState<any>([]);

	const fetchBlogs = () => {
		axios(`/news`)
			.then((response) => {
				setNewsArticles(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	// const articlesData = agricArticle;
	return (
		<div
			className='grid grid-flow-row pb-9'
			id='RecentlyPosted'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Recently</span>Posted
			</h1>
			<div className='flex flex-col gap-9 pt-6'>
				{newsArticle.map((item: any, idx: number) =>
					idx === 3 ? (
						<Fragment key={idx}>
							<ApplyNow />
							<div
								key={idx}
								className='flex gap-4'>
								<img
									className='w-[52%]'
									src={item.image ? item.image : Placeholder.src}
								/>

								<div className='md:h-max h-max flex-1'>
									<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
										{item.category.name}
									</span>
									<Link href={`/news/${item.id}`}>
										<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
											{item.title}
										</p>
									</Link>
									<div className='flex gap-1 items-center py-1'>
										<img
											className='h-5'
											src={item.author.profile_pics}
										/>
										<div className='grid grid-flow-col items-center'>
											<p className='text-[#777777] text-xs'>{`${item.author.first_name} ${item.author.last_name}`}</p>
											<span className='text-[#999999] font-thin'>|</span>
											&nbsp;&nbsp;
											<img
												className='h-5'
												src={item.calendarImage}
											/>
											<p className='text-[#777777] text-xs'>
												{moment(item.created_at).format("ll").split(",")[0]}
											</p>
											&nbsp;&nbsp;
											<span className='text-[#999999] font-thin'>|</span>
											<img
												className='h-5'
												src={item.clockImage}
											/>
											<p className='text-[#777777] text-xs'>{item.min_read}</p>
										</div>
									</div>
									<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
										{item.intro + "..."}&nbsp;&nbsp;
										<Link href={`/news/${item.id}`}>
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
								className='w-[52%]'
								src={item.image ? item.image : Placeholder.src}
							/>

							<div className='md:h-max h-max flex-1'>
								<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
									{item.category.name}
								</span>
								<Link href={`/news/${item.id}`}>
									<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
										{item.title}
									</p>
								</Link>
								<div className='flex gap-1 items-center py-1'>
									<img
										className='h-5'
										src={item.author.profile_pics}
									/>
									<div className='grid grid-flow-col items-center'>
										<p className='text-[#777777] text-xs'>{`${item.author.first_name} ${item.author.last_name}`}</p>
										<span className='text-[#999999] font-thin'>|</span>
										&nbsp;&nbsp;
										<img
											className='h-5'
											src={item.calendarImage}
										/>
										<p className='text-[#777777] text-xs'>
											{moment(item.created_at).format("ll").split(",")[0]}
										</p>
										&nbsp;&nbsp;
										<span className='text-[#999999] font-thin'>|</span>
										<img
											className='h-5'
											src={item.clockImage}
										/>
										<p className='text-[#777777] text-xs'>{item.min_read}</p>
									</div>
								</div>
								<p className='text-[#555555] lg:text-base md:text-sm md:py-1'>
									{item.intro + "..."}&nbsp;&nbsp;
									<Link href={`/news/${item.id}`}>
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
