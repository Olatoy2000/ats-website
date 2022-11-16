import React from "react";
import MyImage from "./assets/image 5.png";
import Gloria from "./assets/image 10.png";
import Calendar from "./assets/image 11.png";
import Clock from "./assets/image 12.png";
// import { Link } from "iconsax-react";
import Link from "next/link";
import ApplyNow from "../ApplyNow";

function RecentlyPosted() {
	const agricArticle = [
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
	const articlesData = agricArticle;
	return (
		<div
			className='grid grid-flow-row'
			id='RecentlyPosted'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Recently</span>Posted
			</h1>
			<div className=''>
				{articlesData.map((item, idx) =>
					idx === 3 ? (
						<>
							<ApplyNow />
							<Link href='/readnewsonly'>
								<div
									id={`#${idx}`}
									className='flex items-center gap-4'>
									<img
										className='md:py-7'
										src={item.articleImage}
									/>

									<div className='md:h-max pt-5'>
										<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
											{item.tag}
										</span>
										<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
											{item.title}
										</p>
										<div className='flex gap-1 items-center py-2'>
											<img
												className='h-5'
												src={item.authorImage}
											/>
											<div className='grid grid-flow-col items-center gap-1'>
												<p className='text-[#777777] text-xs'>
													{item.authorName}
												</p>
												<span className='text-[#999999] font-thin'>|</span>
												<img
													className='h-5'
													src={item.calendarImage}
												/>
												<p className='text-[#777777] text-xs'>
													{item.datePublished}
												</p>
												<span className='text-[#999999] font-thin'>|</span>
												<img
													className='h-5'
													src={item.clockImage}
												/>
												<p className='text-[#777777] text-xs'>
													{item.readTime}. read
												</p>
											</div>
										</div>
										<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
											{item.articleSnippets}
											<span className='text-[#C81107]'>Read more</span>
										</p>
									</div>
								</div>
							</Link>
						</>
					) : (
						<Link href='/readnewsonly'>
							<div
								id={`#${idx}`}
								className='flex items-center gap-4'>
								<img
									className='md:py-7'
									src={item.articleImage}
								/>

								<div className='md:h-max pt-5'>
									<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
										{item.tag}
									</span>
									<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
										{item.title}
									</p>
									<div className='flex gap-1 items-center py-2'>
										<img
											className='h-5'
											src={item.authorImage}
										/>
										<div className='grid grid-flow-col items-center gap-1'>
											<p className='text-[#777777] text-xs'>
												{item.authorName}
											</p>
											<span className='text-[#999999] font-thin'>|</span>
											<img
												className='h-5'
												src={item.calendarImage}
											/>
											<p className='text-[#777777] text-xs'>
												{item.datePublished}
											</p>
											<span className='text-[#999999] font-thin'>|</span>
											<img
												className='h-5'
												src={item.clockImage}
											/>
											<p className='text-[#777777] text-xs'>
												{item.readTime}. read
											</p>
										</div>
									</div>
									<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
										{item.articleSnippets}
										<span className='text-[#C81107]'>Read more</span>
									</p>
								</div>
							</div>
						</Link>
					)
				)}
			</div>
		</div>
	);
}
export default RecentlyPosted;
