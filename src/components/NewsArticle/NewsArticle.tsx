import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

//News Search page

const newsSample = {
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
type NewsSample = typeof newsSample;

const newsSearchSample = {
	status: "success",
	status_code: 200,
	data: {
		hits: [
			{
				title: "Crop Production Report Unveiling 2022",
				intro:
					"Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing the report and relevant topics surrounding the Crop Production forecast for the 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on the 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward to seeing yo",
				description:
					"Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing the report and relevant topics surrounding the Crop Production forecast for the 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on the 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward to seeing you.\n\nTo register, click on the link below.\nhttps://lnkd.in/dFhjmY35\n\n\n#cropproductionreport #AFEXCP #AFEX",
				author: "Gloria Eronmonsele",
				objectID: "2",
				_highlightResult: {
					title: {
						value: "Crop Production Report Unveiling 2022",
						matchLevel: "none",
						matchedWords: [],
					},
					intro: {
						value:
							"Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing <em>t</em>he report and relevant <em>t</em>opics surrounding <em>t</em>he Crop Production forecast for <em>t</em>he 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on <em>t</em>he 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward <em>t</em>o seeing yo",
						matchLevel: "full",
						fullyHighlighted: false,
						matchedWords: ["t"],
					},
					description: {
						value:
							"Our Crop Production Report unveiling event will have a panel session, where we’ll be discussing <em>t</em>he report and relevant <em>t</em>opics surrounding <em>t</em>he Crop Production forecast for <em>t</em>he 2022/2023 wet session. \n\nJoin our Head, Food Security Funds, Nathaniel Etim, alongside other experts on <em>t</em>he 16th of November as we unveil our 2022 AFEX Crop Production Report.\n\nWe are excited and looking forward <em>t</em>o seeing you.\n\n<em>T</em>o register, click on <em>t</em>he link below.\nhttps://lnkd.in/dFhjmY35\n\n\n#cropproductionreport #AFEXCP #AFEX",
						matchLevel: "full",
						fullyHighlighted: false,
						matchedWords: ["t"],
					},
					author: {
						value: "Gloria Eronmonsele",
						matchLevel: "none",
						matchedWords: [],
					},
				},
			},
		],
		nbHits: 10,
		page: 0,
		nbPages: 1,
		hitsPerPage: 10,
		exhaustiveNbHits: true,
		exhaustiveTypo: true,
		exhaustive: {
			nbHits: true,
			typo: true,
		},
		query: "t",
		params: "query=t&hitsPerPage=10",
		renderingContent: {},
		processingTimeMS: 8,
		processingTimingsMS: {
			afterFetch: {
				format: {
					highlighting: 4,
					total: 5,
				},
				total: 5,
			},
			getIdx: {
				load: {
					dicts: 1,
					total: 2,
				},
				total: 3,
			},
			total: 9,
		},
	},
	message: "Successfully Retrieved",
};
type NewsSearchSample = typeof newsSearchSample;
type NewsQuery = NewsSample | NewsSearchSample;

interface INews {
	query?: string;
}

function News({ query }: INews) {
	const { data: news, isLoading } = useQuery(["news", query], async () =>
		axios(query ? `/api/v1/search-news/?q=${query}` : "/api/v1/news", {
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
		<div className='flex flex-col gap-9'>
			<h1 className='flex bg-[#C81107] w-24 lg:p-3 p-2 text-white text-2xl font-bold'>
				News
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{(query
					? (news as NewsSearchSample)?.data?.hits
					: (news as NewsSample)?.data?.results
				)?.map(
					(
						{
							title,
							intro,
							id,
							min_read,
							created_at,
							author_image,
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
								className='lg:w-96 lg:h-72 md:w-96 md:h-72 w-full h-72 object-cover'
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
									src={process.env.NEXT_PUBLIC_BASE_URL + author_image}
									className='h-8'
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

export default News;
