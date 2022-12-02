import React, { useEffect, useState } from "react";
import AFEXLogo from "./assets/afex-logo.png";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const NewsletterSample = {
	success: true,
	status_code: 200,
	data: {
		id: 3,
		title:
			"AFEX Celebrates World Investor Week 2022 with the Securities and Exchange Commission of Nigeria",
		content:
			"AFEX, Nigeria’s leading commodities market player, on Monday, rang the bell for financial literacy to flag off the sixth edition of World Investor Week 2022, in collaboration with the Securities and Exchange Commission (SEC) and Financial Literacy Technical Committee (FLTC) at a ring the bell ceremony held at the Exchange office in Lagos State.\n\nThe ring-the-bell ceremony flags off a week-long event themed “Investor Resilience and Sustainable Finance”, which is aimed at driving awareness about the importance of investor education and protection, while also promoting financial literacy and inclusion that can engender shared prosperity in the commodities market.\n\nAs a commodities exchange, AFEX has invested in financial education initiatives to enhance financial literacy among investors and improve participation for retail and institutional investors in the commodities market. Over a span of eight years, the Exchange has executed a number of robust education campaigns to deepen the financial market knowledge and confidence of investors through digitally distributed learning materials, data-driven market reports, webinars, and outreach programs, which have driven up active participation in the commodities market.\n\n“AFEX is pleased to once again ring the bell to advocate for financial literacy on the commodities market in Africa. Financial literacy and investor protection are important tenets that drive growth and inclusivity in the financial market, and as part of our efforts to promote sustainability in the ecosystem, we have developed a wholistic engagement framework that empowers retail and institutional investors to take advantage of the opportunities in the commodities market within the current market environment.\n\nCurrently, we are gearing up to launch a four-part comic book designed to educate new and existing investors of all ages on how the commodities market works and how they can grow their wealth by leveraging alternative assest classes. As a participation grows, it is improtant to simplify financial management and investment so that no one is left behind in the commodities ecoysystem,\" stated, Oluwafunto Olasemo, Vice President, Financial Markets, at AFEX.\n\nTo bridge knowledge gaps, initiatives like knowledge-sharing sessions, video tutorials, one-on-one sessions with financial experts, and detailed reports on commodity value chains are being incorporated into AFEX's technology platforms, allowing access to important trading data, trends, and financial information, thereby bringing support and growth to the commodities market.\n\nAccording to Fiona Ahime, MD, FBN Quest, “Investors should embrace diversification of investment”. Charles Egbunonwo, the MD of Forthright Securities, and a member of the Financial Literacy Committee also commented that “It is important to create awareness on financial literacy to unlock the potentials in the commodities space. If we are looking to diversify our economy, commodities are one of the key products to consider and develop. I am happy we are putting hands together to propagate the investment culture in the commodities market.”\n\nAchieving investor resilience and sustainable finance requires a broad-based effort on the part of all capital market players to provide investors with the tools and knowledge required to make informed investment decisions. Addressing these core areas lays a foundation for market intergrity that will enable a thriving commodities market and shared prosperity for everyone involved.",
		subject:
			"AFEX Celebrates World Investor Week 2022 with the Securities and Exchange Commission of Nigeria",
	},
	message: "Successfully",
};
type Newsletter = typeof NewsletterSample;

function Newsletter() {
	const { data: newsletter, isLoading } = useQuery<Newsletter>(
		["Newsletter"],
		async () =>
			axios("/api/v1/newsletter/2", {
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
		<div className='pt-10 pb-16'>
			<img
				className='object-cover pb-8'
				src={AFEXLogo.src}
			/>
			<div>
				{/* {newsletter?.data?.map(
					({ title, content, subject }: any, idx: number) => ( */}
				<article
					// key={idx}
					className='lg:text-base text-sm'>
					<p className=''>{newsletter?.data?.title}</p>
					<p className='pt-10'>{newsletter?.data?.content}</p>
					{/* <ol className='list-inside list-decimal py-3'>
								<li>Product Management</li>
								<li>Front-end Development</li>
								<li>Back-end Development</li>
								<li>Mobile App Development</li>
								<li>Product Design</li>
							</ol>

							<p className='py-3'>
								Apply and share the application link with friends and family and
								start a career in any of the 5 courses we offer for complete
								beginners who want to begin a career and join the future
								workforce.
							</p>
							<p className='py-3'>
								One more thing, it's not to just know Coding, Product design
								etc. See your course (backend, frontend etc) as sand. If you
								give two people sand, one will make sand castle and the other
								will make glass that would have multiple uses, think about the
								difference between these two people. We want to give you SAND
								and give you what will make you glass maker. Join the future.
							</p>
							<p className='pt-3'>AFEX Tech Hub.</p>
							<p>
								Christiana Oyinade House, Beside First Bank, Iwo Road, Ibadan.
							</p>
							<span className='pb-3 text-[#C81107]'>
								<a
									href='https://afex-tech-stars.com/jobs'
									target='_blank'>
									https://afex-tech-stars.com/jobs
								</a>
							</span> */}
				</article>
				{/* )
				)} */}
			</div>
			{/* <Link href='/courses'>
				<button className='bggradi rounded-lg lg:p-5 p-3 items-center group-hover:bg-black'>
					<span className='text-white'>Apply Now</span>
				</button>
			</Link> */}
		</div>
	);
}

export default Newsletter;
