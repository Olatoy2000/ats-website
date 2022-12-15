import React, { useEffect, useState } from "react";
import Placeholder from "./assets/placeholder.png";
import SeeMore1 from "./assets/SeeMore3 icon.png";
import SeeMore2 from "./assets/SeeLess icon.png";
import { useRef } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

//Blogs part in the Updates page
const blogArticleSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 10,
				title: "4 Ways Commodity Exchanges Can Reduce Food Insecurity",
				intro:
					"The following blog post explores how Commodity Exchanges can transform the lives of farmers and reduce food insecurity.\n\nThe Russia-Ukraine conflict and soaring inflation rates have created a surge in global commodity prices that has left many African countries struggling to address shortages in essential commodities.\n\nNigeria, Egypt, Kenya, Sudan, Algeria, and South Africa are some of the many Af",
				description:
					"The following blog post explores how Commodity Exchanges can transform the lives of farmers and reduce food insecurity.\n\nThe Russia-Ukraine conflict and soaring inflation rates have created a surge in global commodity prices that has left many African countries struggling to address shortages in essential commodities.\n\nNigeria, Egypt, Kenya, Sudan, Algeria, and South Africa are some of the many African countries that rely on imports of wheat, maize, and fertilizer to feed their growing populations. But the surge in commodity prices threatens food insecurity in these countries and the continent. The price of wheat alone is expected to increase by more than 40 percent in 2022, according to the World Bank.\n\nThe supply chain disruptions have raised questions about what African countries are doing to help farmers maintain their livelihoods and reduce food insecurity.\n\nAccording to the FAO, in Nigeria alone, more than 70 percent of the population engages in Agriculture, mainly at the subsistence level. Some analysts have pointed to the potential of commodity exchanges to transform the lives of African farmers. Commodity exchanges allow buyers and sellers to trade commodities under a fair, transparent, and standardized process.\n\nOne of the most successful exchanges in Africa is the AFEX Exchange, which ranked third in the Financial Times’s list of Africa’s fastest-growing companies and recently expanded its operations to Kenya.\n\n“Over 45% of AFEX farmers are food secure or have enough food to sustain them for the entire year,” said AFEX CEO, Ayodeji Balogun, in an interview with CNBC Africa. “Compared with baseline data, only 15% of farmers in Nigeria are food secure.” In 2021, the total number of registered farmers in the government’s database was 5.7 million.\n\nHere are five ways that commodity exchanges can transform the lives of farmers:\n\nAccess to Finance\nAccess to finance is critical for African farmers as they need money to purchase seeds and fertilizer. Commodity exchanges can solve this problem through loan programs or through a warehouse receipt system. AFEX has launched a $1 million loan program that allows 5000 farmers in Kenya to take out loans to purchase commodities.\n\nThe exchange is also helping farmers get better access to finance through its Workbench Platform. The platform allows farmers to use the receipts of the inventory they hold at an AFEX warehouse as collateral to borrow money from banks.\n\nBetter prices\nCommodity exchanges allow farmers to access a larger group of buyers and sellers on a regular basis, which leads to better prices for crops. Many farmers struggle to find a market for the goods they produce, which means they are forced to rely on middlemen who charge inflated prices.\n\nOne of the functions of a functioning commodities exchange is to establish a standardized price for commodities.\n\nAccess to storage for smallholder farmers\nNigeria loses N3.5 trillion to post-harvest loss each year because it lacks proper storage facilities, according to agritech firm Farmcrowdy. Another report by SBM Intel says 47% of farmers have zero access to any kind of storage facilities during harvest.\n\nThe absence of storage facilities forces many farmers to store their produce in their homes, which causes the crops to spoil and drives up production costs. AFEX has built a network of more than 100 warehouses across 23 states - the largest in the country. Under AFEX’s warehouse system, farmers can store grains for up to seven months.\n\nAccess to a larger market\nCommodity exchanges use their platforms to give farmers access to several buyers of their crops. These platforms allow farmers to get precise market information about the market for their crops. Timely access to information also allows farmers to plan ahead, raise their prices when best suited, and make more money.\n\nHow you can help",
				created_at: "2022-11-29T12:20:17.097336+01:00",
				url: "https://atsbk.afexats.com/api/v1/blogs/10",
				image:
					"https://atsbk.afexats.com/media/media/blog_article/images/image_24.webp",
				min_read: "3 Minute Read",
				author_fullname: "Rildwan Olanrewaju",
				author_image: "/media/media/profile_pic/1618866906272.jfif",
			},
		],
	},
	message: "Successfully Retrieved",
};
type Blogs = typeof blogArticleSample;
var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	);
};
function BlogArticle() {
	const scrollRefs = useRef<HTMLDivElement>(null);

	const moveRight = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
	};

	const moveLeft = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
	};

	const { data: blogArticle, isLoading } = useQuery<Blogs>(
		["Blog-Article"],
		async () =>
			axios(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/blogs`, {
				headers: {
					"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
					"request-ts": "1669397556",
					"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
				},
				method: "get",
			})
				.then(({ data }) => data)
				.catch((e) => e)
	);

	return (
		<>
			<div
				ref={scrollRefs}
				className='grid overflow-x-scroll py-5 gap-8 grid-flow-col scrollbar-hide'
				id='BlogArticle'>
				{blogArticle?.data?.results.map(
					(
						{
							id,
							title,
							intro,
							created_at,
							author,
							author_image,
							image,
							min_read,
							author_fullname,
						}: any,
						idx: number
					) => (
						<div
							key={idx}
							className='flex flex-col pb-4 shadow lg:w-96 md:w-80 w-64 rounded-md'>
							<img
								src={decrypt(image) ? decrypt(image) : Placeholder.src}
								className='w-96 h-72 object-cover'
							/>
							<Link href={`/blogs/${id}`}>
								<p className='text-[#2D3748] text-[clamp(1rem,1.5vw,1.25rem)] font-bold p-4'>
									{decrypt(title)}
								</p>
							</Link>
							<p className='text-[#718096] flex-1 text-sm px-4'>
								{decrypt(intro + "...")}
							</p>
							<div className='flex gap-3 pt-10 items-center px-4'>
								<img
									src={process.env.NEXT_PUBLIC_BASE_URL + decrypt(author_image)}
									className='h-8'
								/>
								<div className='font-sans flex-1'>
									<p className='text-[#C81107] text-xs font-semibold'>
										{decrypt(author_fullname)}
									</p>
									<span className='flex justify-between items-center'>
										<p className='text-[#6F6F70] font-semibold text-[10px]'>
											<span>
												{moment(decrypt(created_at)).format("ll").split(",")[0]}
											</span>
											&nbsp;&nbsp; {decrypt(min_read)}
										</p>
										<Link href={`/blogs/${id}`}>
											<span className='text-[15px] text-[#2D3748] font-bold -mt-1'>
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
			<div className='flex justify-between'>
				<button
					className='flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black'
					onClick={moveLeft}>
					<span className='text-white'>See Less</span>
					<img src={SeeMore2.src} />
				</button>
				<button
					onClick={moveRight}
					className='flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black'>
					<span className='text-white'>See More</span>
					<img src={SeeMore1.src} />
				</button>
			</div>
		</>
	);
}

export default BlogArticle;
