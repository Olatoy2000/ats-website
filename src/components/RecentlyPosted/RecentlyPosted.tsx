import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
import Link from "next/link";
import ApplyNow from "../ApplyNow";
import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";

const newsArticleSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 12,
				title:
					"Internship Stories: The Possibilities and Opportunities at AFEX are Limitless - Somto",
				intro:
					"Nwobodo Somto has only one feeling when you mention the name AFEX – an intense yellow glowy feeling – that stems from being granted an opportunity to help Africa’s commodities ecosystem in her own unique way.",
				description:
					"Nwobodo Somto has only one feeling when you mention the name AFEX – an intense yellow glowy feeling – that stems from being granted an opportunity to help Africa’s commodities ecosystem in her own unique way. We sit down to talk about her interests, her career journey in the AFEX Bar Raiser Program, and her expectations. In other words, a typical day at work for a new product management intern navigating the space.\n\n“It all started when my friend, Simi, told me about the Bar Raiser Program. Prior to that, rewinding back to the start of the year, I became very interested in product management and started applying for courses and even proceeding to join product management communities. I had gathered from a lot of people that it was difficult to get an entry-level experience in product management in Nigeria. I ranted about it to a few friends but decided to keep getting better and praying about it. Months after, my friend sent the AFEX Ad to me,” she explains.\n\nThough Somto is a newbie to the world of product management, she brings with her a handful of experiences working in other fields. “Before I joined AFEX for the Bar Raiser Program, I had just concluded my youth service where I served as a software developer intern at Niger Delta Power Holding Company. In that same period, I did a lot of freelance copywriting and website development. I graduated over a year ago from Covenant University with first-class honors in Computer Science and dabbled lightly in different fields of tech before coming across product management”\n\nNow she’s ready to make her mark in the field, “At AFEX, I work as a Graduate Intern Product Manager. In my role, I work on the Exchange Communications Network and WorkBench Mobile Systems, and I am primarily responsible for ensuring the success of these technology stacks. This involves working with users, designers, developers, management, and other stakeholders to ensure everyone is on the same page. I must ensure that whatever tech we’re building effectively solves the users’ problems, enhances their experience, and pushes our business goals.” However, when Somto is not working, she is learning painting techniques and food recipes among other hobbies that bring her alive. “I have a new and profound love for food that suspiciously started around the time I started at AFEX. I also enjoyed writing at some point, but procrastination. I love pink things, books, cats, and fun bonding activities. I love Lin Manuel Miranda and everything he has ever written. Also, Benedict Cumberbatch, and every proof of his existence.”\n\nBy the looks of it, the Marvel fan is already off to a strong start at AFEX. One particularly memorable moment for Somto was her interview for the AFEX Bar Raiser Program and her experience so far in the organization.\n\n“I remember I did a little dance as soon as I got out of sight of the panel. When we started the interview, I was told that it would be more of a conversation, but I automatically assumed that those were just words. Much to my surprise, I was laughing with the panel at some point. I thought I was coming into the interview to sell myself as a person who could potentially bring value to the company, but it was a lot more than that.\n\nDuring the interview, I got to understand what the company did and what the overarching goal was, and I was completely sold on it. I got to witness a bit of the AFEX culture through the way the panel interacted with each other and myself. I could tell that AFEX would be a healthy environment to learn, grow, and work.\n\nI even bonded with a few of the panel members over shared interests like anime and board games. I could tell that the main objective was establishing that I was a cultural fit and willing to learn. I was literally in a panel with my favorite kind of people – passionate, driven, empathetic, and at least a little geeky. When the interview was over, I had to do a little dance of victory.\n\nComing into the program, I expected that I would work on smaller tasks or learn from scratch, but within a bubble that would stop me from making any real impact on the general operations because nobody would want an intern derailing their operations. Boy was I wrong. To my absolute surprise, I was put on products and major projects barely one month into the internship. The other graduate interns and I were put in charge of driving the redesign of two major products. We get to work with minimal supervision but with all the support we require, and it has been such a learning experience. We are making decisions and mitigating risks and strategizing as we move the product through its development life cycle, and I literally wake up every day excited to get to work.\n\nI thought the orientation program at the resort would be the extent of our welcome into the company, but I got to the office and the people in my squad got me and the other Graduate Interns lunch throughout the first week. The way we were treated at the resort was the same way we got treated at the office. With much acknowledgment, respect, and consideration. Everyone has been friendly and supportive, and I have been able to learn and grow a whole lot.\n\nThere are also a lot of nicknames, for example, the Product Management graduate interns are called GI Joe and Janes (there’s just one guy in my squad) and I’m called Slim Shady! Well, it’s just the one person calling me for now but I’m hoping it would stick as it beats my last nickname, and I feel people hearing it would think I probably have deep mysterious layers and would never guess why I’m being called that. Hehe. But work-wise, I’m currently working on multiple projects and co-driving one of them. As I’ve said before, the team members are amazing, the projects themselves are self-fulfilling and I’m having a great time.\n\nAlso, I love that everyone I’ve encountered in the company is very interested and people’s opinions or ideas are heard, valued, and considered. It did something to me when my opinion about things was sought during meetings and people responded to things, I said in ways that showed that they listened. It made me feel valued. It’s also amazing that we have snack days and hangouts. There’s always some food or snack available, and that has me like food.\n\nFor interns looking forward to working with AFEX in the future, I would say be passionate about growing. The possibilities and opportunities at AFEX are limitless.”",
				created_at: "2022-11-29T11:22:02.207166+01:00",
				category: 4,
				author: 4,
				image:
					"https://atsbk.afexats.com/media/media/news_article/images/image_10.webp",
				url: "https://atsbk.afexats.com/api/v1/news/12",
				author_name: "Habeeb Oluwo",
				category_name: "Lifestyle",
				author_image: "/media/media/profile_pic/1516236128606.jfif",
			},
		],
	},
	message: "Successfully Retrieved",
};
type Prop = {
	keyword: string;
};
type News = typeof newsArticleSample;
function RecentlyPosted({ keyword }: Prop) {
	var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
	var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
	const { data: newsArticle, isLoading } = useQuery<News>(
		["News-Articles"],
		async () =>
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/news`, {
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
							author_image,
							author_name,
							author,
							image,
						}: any,
						idx: number,
						arr: any[]
					) =>
						category_name
							.toLocaleLowerCase()
							.includes(keyword.toLocaleLowerCase()) ? (
							idx === 3 ? (
								<Fragment key={idx}>
									<ApplyNow />
									<div
										key={idx}
										className='flex flex-col lg:flex lg:flex-row md:flex-row md:flex sm:flex sm:flex-col gap-4'>
										<img
											className='object-cover self-center lg:w-96 md:w-96 w-96 h-72 sm:w-full sm:h-72 rounded'
											src={
												process.env.NEXT_PUBLIC_BASE_URL +
												CryptoJS.AES.decrypt(
													image ? image : Placeholder.src,
													key,
													{
														iv: iv,
													}
												).toString(CryptoJS.enc.Utf8)
											}
										/>

										<div className='md:h-max h-max'>
											<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
												{CryptoJS.AES.decrypt(category_name, key, {
													iv: iv,
												}).toString(CryptoJS.enc.Utf8)}
											</span>
											<Link href={`/news/${id}`}>
												<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
													{CryptoJS.AES.decrypt(title, key, {
														iv: iv,
													})
														.toString(CryptoJS.enc.Utf8)
														.split("")
														.splice(0, 50)
														.join("") + " ..."}
												</p>
											</Link>
											<div className='flex gap-1 items-center py-1'>
												<img
													className='h-6'
													src={
														process.env.NEXT_PUBLIC_BASE_URL +
														CryptoJS.AES.decrypt(author_image, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)
													}
												/>
												<div className='grid grid-flow-col items-center'>
													<p className='text-[#777777] text-xs'>
														{CryptoJS.AES.decrypt(author_name, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)}
													</p>
													<span className='text-[#999999] font-thin'>|</span>
													&nbsp;&nbsp;
													<p className='text-[#777777] text-xs'>
														{
															moment(
																CryptoJS.AES.decrypt(created_at, key, {
																	iv: iv,
																}).toString(CryptoJS.enc.Utf8)
															)
																.format("ll")
																.split(",")[0]
														}
													</p>
													&nbsp;&nbsp;
													<span className='text-[#999999] font-thin'>|</span>
													<p className='text-[#777777] text-xs'>
														{min_read &&
															CryptoJS.AES.decrypt(min_read, key, {
																iv: iv,
															}).toString(CryptoJS.enc.Utf8)}
													</p>
												</div>
											</div>
											<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
												{CryptoJS.AES.decrypt(intro + "...", key, {
													iv: iv,
												}).toString(CryptoJS.enc.Utf8)}
												&nbsp;&nbsp;
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
										className='flex flex-col lg:flex lg:flex-row md:flex-row md:flex sm:flex sm:flex-col gap-4'>
										<img
											className='object-cover self-center lg:w-96 md:w-96 w-96 h-72 sm:w-full sm:h-72 rounded'
											src={
												process.env.NEXT_PUBLIC_BASE_URL +
												CryptoJS.AES.decrypt(
													image ? image : Placeholder.src,
													key,
													{
														iv: iv,
													}
												).toString(CryptoJS.enc.Utf8)
											}
										/>

										<div className='md:h-max h-max'>
											<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
												{CryptoJS.AES.decrypt(category_name, key, {
													iv: iv,
												}).toString(CryptoJS.enc.Utf8)}
											</span>
											<Link href={`/news/${id}`}>
												<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
													{CryptoJS.AES.decrypt(title, key, {
														iv: iv,
													})
														.toString(CryptoJS.enc.Utf8)
														.split("")
														.splice(0, 50)
														.join("") + " ..."}
												</p>
											</Link>
											<div className='flex gap-1 items-center py-1'>
												<img
													className='h-6'
													src={
														process.env.NEXT_PUBLIC_BASE_URL +
														CryptoJS.AES.decrypt(author_image, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)
													}
												/>
												<div className='grid grid-flow-col items-center'>
													<p className='text-[#777777] text-xs'>
														{CryptoJS.AES.decrypt(author_name, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)}
													</p>
													<span className='text-[#999999] font-thin'>|</span>
													&nbsp;&nbsp;
													<p className='text-[#777777] text-xs'>
														{
															moment(
																CryptoJS.AES.decrypt(created_at, key, {
																	iv: iv,
																}).toString(CryptoJS.enc.Utf8)
															)
																.format("ll")
																.split(",")[0]
														}
													</p>
													&nbsp;&nbsp;
													<span className='text-[#999999] font-thin'>|</span>
													<p className='text-[#777777] text-xs'>
														{CryptoJS.AES.decrypt(min_read, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)}
													</p>
												</div>
											</div>
											<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
												{CryptoJS.AES.decrypt(intro + "...", key, {
													iv: iv,
												}).toString(CryptoJS.enc.Utf8)}
												&nbsp;&nbsp;
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
									className='flex flex-col lg:flex lg:flex-row md:flex-row md:flex sm:flex sm:flex-col gap-4'>
									<img
										className='object-cover self-center lg:w-96 md:w-96 w-96 h-72 sm:w-full sm:h-72 rounded'
										src={
											process.env.NEXT_PUBLIC_BASE_URL +
											CryptoJS.AES.decrypt(
												image ? image : Placeholder.src,
												key,
												{
													iv: iv,
												}
											).toString(CryptoJS.enc.Utf8)
										}
									/>

									<div className='md:h-max h-max'>
										<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
											{CryptoJS.AES.decrypt(category_name, key, {
												iv: iv,
											}).toString(CryptoJS.enc.Utf8)}
										</span>
										<Link href={`/news/${id}`}>
											<p className='font-bold md:[clamp(1rem,2.5vw,2.25rem)] lg:text-2xl pt-2'>
												{CryptoJS.AES.decrypt(title, key, {
													iv: iv,
												})
													.toString(CryptoJS.enc.Utf8)
													.split("")
													.splice(0, 50)
													.join("") + " ..."}
											</p>
										</Link>
										<div className='flex gap-1 items-center py-1'>
											<img
												className='h-6'
												src={
													process.env.NEXT_PUBLIC_BASE_URL +
													CryptoJS.AES.decrypt(author_image, key, {
														iv: iv,
													}).toString(CryptoJS.enc.Utf8)
												}
											/>
											<div className='grid grid-flow-col items-center'>
												<p className='text-[#777777] text-xs'>
													{CryptoJS.AES.decrypt(author_name, key, {
														iv: iv,
													}).toString(CryptoJS.enc.Utf8)}
												</p>
												<span className='text-[#999999] font-thin'>|</span>
												&nbsp;&nbsp;
												<p className='text-[#777777] text-xs'>
													{
														moment(
															CryptoJS.AES.decrypt(created_at, key, {
																iv: iv,
															}).toString(CryptoJS.enc.Utf8)
														)
															.format("ll")
															.split(",")[0]
													}
												</p>
												&nbsp;&nbsp;
												<span className='text-[#999999] font-thin'>|</span>
												<span className='text-[#777777] text-xs'>
													{min_read &&
														CryptoJS.AES.decrypt(min_read, key, {
															iv: iv,
														}).toString(CryptoJS.enc.Utf8)}
												</span>
											</div>
										</div>
										<p className='text-[#555555] lg:text-base md:text-xs md:pb-8'>
											{CryptoJS.AES.decrypt(intro + "...", key, {
												iv: iv,
											}).toString(CryptoJS.enc.Utf8)}
											&nbsp;&nbsp;
											<Link href={`/news/${id}`}>
												<span className='text-[#C81107]'>Read more</span>
											</Link>
										</p>
									</div>
								</div>
							)
						) : null
				)}
			</div>
		</div>
	);
}
export default RecentlyPosted;
