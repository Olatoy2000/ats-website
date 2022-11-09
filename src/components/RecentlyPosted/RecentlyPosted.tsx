import React from "react";
import MyImage from "./assets/image 5.png";
import Gloria from "./assets/image 10.png";
import Calendar from "./assets/image 11.png";
import Clock from "./assets/image 12.png";

function RecentlyPosted() {
	const articles = [
		{
			articleImage: MyImage.src,
			tag: "Administration",
			title: "AFEX Celebrates World Investor Week 2022 with the Securities...",
			articleSnippets:
				"AFEX, Nigeria’s leading commodities market player, on Monday, rang the bell for financial...",
			authorImage: Gloria.src,
			authorName: "Abimbola Otepola",
			datePublished: "09 December 2022",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			tag: "Agriculture",
			title: "AFEX Celebrates World Investor Week 2022 with the Securities...",
			articleSnippets:
				"AFEX, Nigeria’s leading commodities market player, on Monday, rang the bell for financial...",
			authorImage: Gloria.src,
			authorName: "Abimbola Otepola",
			datePublished: "09 December 2022",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			tag: "Lifestyle",
			title: "AFEX Celebrates World Investor Week 2022 with the Securities...",
			articleSnippets:
				"AFEX, Nigeria’s leading commodities market player, on Monday, rang the bell for financial...",
			authorImage: Gloria.src,
			authorName: "Abimbola Otepola",
			datePublished: "09 December 2022",
			readTime: "3 min",
			calendarImage: Calendar.src,
			clockImage: Clock.src,
		},
	];
	return (
		<div
			className='grid grid-flow-row'
			id='RecentlyPosted'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Recently</span>Posted
			</h1>
			{articles.map((item, idx) => (
				<div
					id={`#${idx}`}
					className='flex items-center gap-6'>
					<img
						className='md:py-7'
						src={item.articleImage}
					/>
					<div className='flex-col'>
						<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
							{item.tag}
						</span>
						<p className='font-bold text-2xl pt-3'>{item.title}</p>
						<div className='flex gap-2 items-center'>
							<img
								className='h-5'
								src={item.authorImage}
							/>
							<span className='text-[#777777] text-xs'>{item.authorName}</span>
							<span className='text-[#999999] font-thin'>|</span>
							<img
								className='h-5'
								src={item.calendarImage}
							/>
							<span className='text-[#777777] text-xs'>
								{item.datePublished}
							</span>
							<span className='text-[#999999] font-thin'>|</span>
							<img
								className='h-5'
								src={item.clockImage}
							/>
							<span className='text-[#777777] text-xs'>
								{item.readTime}. read
							</span>
						</div>
						<p className='text-[#555555] text-base'>
							{item.articleSnippets}
							<span className='text-[#C81107] text-base'>Read more</span>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
export default RecentlyPosted;
