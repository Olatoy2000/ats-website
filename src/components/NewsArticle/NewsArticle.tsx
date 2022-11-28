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
		axios(query ? `/api/v1/search-news/?q=${query}` : "/api/v1/news")
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
								className='h-96 object-cover'
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
									src={author_image}
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

export default News;
