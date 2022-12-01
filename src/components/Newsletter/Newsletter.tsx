import React, { useEffect, useState } from "react";
import AFEXLogo from "./assets/afex-logo.png";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const NewsletterSample = {
	success: true,
	status_code: 200,
	data: {
		count: 5,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "AFEX Launches 5 Year Impact Report",
				content:
					"Over the last 5 years, AFEX set out to build a platform that addresses major development challenges in Africa’s food systems by investing in innovations with the potential for sustainable social impact in rural households and the larger society. At AFEX’s core was the mission to create an efficient, inclusive, and vibrant market that promotes a fair exchange for everyone involved in the value chain. On the 4th of May 2021, the leading commodities market operator released its first edition of the AFEX Impact Report, celebrating the positive socio-economic outcomes that have improved the livelihoods of over 160,000 farmers while cumulatively facilitating over 200,000MT of trades. This impact continues to unlock wealth and prosperity in the commodities market.\n\nBy focusing on turning farming operations into profitable livelihoods, AFEX has built Nigeria’s largest supply chain infrastructure, giving producers access to credit, inputs, and markets, which are required to generate sustainable income across the value chain. Achieving a stronger economy should include a push for food security, food self-sufficiency, and reduced poverty while promoting decent work and inclusion, all of which remain a key focus for AFEX’s wide-reaching impact in rural communities.\n\nAs a commodities exchange AFEX also enables the capital market to be included in this impact framework, unlocking finance and credit from the financial markets to drive activities and outcomes in the physical market.",
				subject: "AFEX Launches 5 Year Impact Report",
				url: "https://atsbk.afexats.com/api/v1/newsletter/1",
			},
			{
				id: 2,
				title: "AFEX Celebrates Cocoa Farmers",
				content:
					"Over the years, AFEX activities in the cocoa value chain has cut across engagement with cocoa farmers, sustainability, and engagement with clients (domestic and foreign). In a bid to improve the productivity of cocoa farmers, AFEX has maintained a consistent commitment to providing cocoa farmers with key inputs and especially certifications to ensure that they are harvesting products of very high standards.\n\nAFEX through this event has acknowledged the significance of these farmers as key players in the cocoa system and is celebrating them.\n\nHe said: “AFEX has always promoted sustainable agricultural practices, the aim is to see that in the nearest future, all cocoa farmers spanning from the smallholder farmers and beyond practice and utilise sustainable agricultural mechanisms and management methods.\n\nAFEX’s big vision to see Africa feed itself has impacted over 200,000 smallholder farmers, in view of this, they are well positioned to help more farmers grow through disbursement of input loans down to provision of post-harvest storage facilities and grant easy access to market.",
				subject: "AFEX Celebrates Cocoa Farmers",
				url: "https://atsbk.afexats.com/api/v1/newsletter/2",
			},
			{
				id: 3,
				title:
					"AFEX Celebrates World Investor Week 2022 with the Securities and Exchange Commission of Nigeria",
				content:
					"AFEX, Nigeria’s leading commodities market player, on Monday, rang the bell for financial literacy to flag off the sixth edition of World Investor Week 2022, in collaboration with the Securities and Exchange Commission (SEC) and Financial Literacy Technical Committee (FLTC) at a ring the bell ceremony held at the Exchange office in Lagos State.\n\nThe ring-the-bell ceremony flags off a week-long event themed “Investor Resilience and Sustainable Finance”, which is aimed at driving awareness about the importance of investor education and protection, while also promoting financial literacy and inclusion that can engender shared prosperity in the commodities market.\n\nAs a commodities exchange, AFEX has invested in financial education initiatives to enhance financial literacy among investors and improve participation for retail and institutional investors in the commodities market. Over a span of eight years, the Exchange has executed a number of robust education campaigns to deepen the financial market knowledge and confidence of investors through digitally distributed learning materials, data-driven market reports, webinars, and outreach programs, which have driven up active participation in the commodities market.\n\n“AFEX is pleased to once again ring the bell to advocate for financial literacy on the commodities market in Africa. Financial literacy and investor protection are important tenets that drive growth and inclusivity in the financial market, and as part of our efforts to promote sustainability in the ecosystem, we have developed a wholistic engagement framework that empowers retail and institutional investors to take advantage of the opportunities in the commodities market within the current market environment.\n\nCurrently, we are gearing up to launch a four-part comic book designed to educate new and existing investors of all ages on how the commodities market works and how they can grow their wealth by leveraging alternative assest classes. As a participation grows, it is improtant to simplify financial management and investment so that no one is left behind in the commodities ecoysystem,\" stated, Oluwafunto Olasemo, Vice President, Financial Markets, at AFEX.\n\nTo bridge knowledge gaps, initiatives like knowledge-sharing sessions, video tutorials, one-on-one sessions with financial experts, and detailed reports on commodity value chains are being incorporated into AFEX's technology platforms, allowing access to important trading data, trends, and financial information, thereby bringing support and growth to the commodities market.\n\nAccording to Fiona Ahime, MD, FBN Quest, “Investors should embrace diversification of investment”. Charles Egbunonwo, the MD of Forthright Securities, and a member of the Financial Literacy Committee also commented that “It is important to create awareness on financial literacy to unlock the potentials in the commodities space. If we are looking to diversify our economy, commodities are one of the key products to consider and develop. I am happy we are putting hands together to propagate the investment culture in the commodities market.”\n\nAchieving investor resilience and sustainable finance requires a broad-based effort on the part of all capital market players to provide investors with the tools and knowledge required to make informed investment decisions. Addressing these core areas lays a foundation for market intergrity that will enable a thriving commodities market and shared prosperity for everyone involved.",
				subject:
					"AFEX Celebrates World Investor Week 2022 with the Securities and Exchange Commission of Nigeria",
				url: "https://atsbk.afexats.com/api/v1/newsletter/3",
			},
			{
				id: 4,
				title:
					"AFEX Celebrates World Food Day with the Launch of 100,000MT/ year Grain Quality Enhancement Center",
				content:
					"AFEX, Nigeria’s leading commodities market player, on Friday, marked World Food Day, with the launch of a new 100,000MT/ year Grain Quality Enhancement Center and 30,000 MT storage capacity warehouse at Zaria-Kano Highway, Kaduna State.\n\nThe plant represents AFEX’s renewed commitment to infrastructure investments that cut post-harvest losses, strengthen quality and standardization criteria in grain value chains and improve the livelihoods of primary producers who are able to earn higher income on better quality grains. The plant, which has an annual capacity of 100,000MT, meets the challenges of grain quality enhancement through cleaning, grinding, heating, drying, packaging, and storage services for grains like maize, paddy rice, and soybean.\n\n“Over the years, we have seen a growing demand for grain commodities in the animal feed, food, and drink industries. However, 3.5 trillion naira is lost annually after harvest because the national storage capacity can only accommodate 5-7 percent of agricultural produce. At AFEX, we believe that the grain quality enhancement center will help meet that demand, support the closure of quality and quantity gaps, maximize income returns for smallholder farmers, and increase access to markets that will benefit key players in the value chain and society at large. The activities in the processing plant will include quality and quantity checks, packaging, storage, and other processes in the value chain.\n\nThis historic milestone aligns with our UN SDG goals 1, 2, 5, 8, and 12. We are working towards resilience and sustainability of the agricultural supply chain to ensure that farmers and growers get a better deal for their produce, everyone has access to affordable and nutritious food, alleviate poverty, and ensure that no one is left behind.\n\nOur partnership with the Kaduna State Government and the USAID-Funded West Africa Trade & Investment Hub has also been instrumental in moving the project forward. We are delighted for their contributions as we continue to explore together the true potential and market opportunities of grains in Nigeria” Commented, CEO, AFEX, Ayodeji Balogun.\n\nCurrently, Nigeria’s storage capacities stand at less than 5%, resulting in excessive post-harvest losses, all of which impact food security. To solve the problem, the new facility will strengthen food supply chains, boost grain prices for producers and serve as a reliable source for processed grain meal and hulls in the growing markets whilst bolstering food production in the country. Essentially, by depositing commodities in the warehouse, farmers will be able to pay for the processing services and have access to buyers on the AFEX platform at a higher price.\n\nSpeaking on the commissioning of the AFEX Grain Quality Enhancement Center, His Excellency, the Governor of Kaduna State, Mallam Nasiru el-Rufai said “I am happy to see this new development in the agricultural value chain. Oftentimes, when farmers harvest their produce, they sell quickly at low prices to prevent post-harvest loss and in return, they never get the best value. With this center, AFEX has closed the gap in preparation, cleaning, and logistics, helping farmers to sell at the right price.\n\nI am grateful to all the partners behind AFEX, USAID-Funded West Africa Trade & Investment Hub, AGRA, for collaborating on this project and enhancing access to a structured and ready market for farmers and job creation for Nigerian youths.”\n\nSince 2014, AFEX has built a robust network of warehouses to support the growth of agricultural commodities and provide offtake agreements to farmers at market prices with a same-day payment model. Currently, AFEX has a footprint of over 100 warehouses across 23 grain-producing states in Nigeria which accounts for over 300,000 MT of the total national storage capacity. They have reached over 430,000 farmers and traded over 1 million MT of commodities to transform rural households and boost economic prosperity.\n\nWith more efficient pricing mechanisms and transparent, fair distribution fees, agricultural producers working with AFEX benefit from significant – and often life-changing – savings on taxes, charges, transportation costs, and better storage/disruption.",
				subject:
					"AFEX Celebrates World Food Day with the Launch of 100,000MT/ year Grain Quality Enhancement Center",
				url: "https://atsbk.afexats.com/api/v1/newsletter/4",
			},
			{
				id: 5,
				title: "Ways Commodity Exchanges can help Food Systems in Africa",
				content:
					"African farmers have been victims of fractured and disorganized markets where they have had to sell their products lower than the market price. This is why Africa's poorest are small-scale farmers who remain poor because they lack access to investment and techniques to optimize their farming. Without the infrastructure to connect their rural areas to large markets where their products can be bought and sold, they get cut off from profitable opportunities to stable and prosperous supply chains. This type of fragmentation means most farmers will remain poor and vulnerable to exploitation.\n\nCovid19 caused significant disruptions in the supply chain to Africa's already weak food systems and affected both food itself and the people who farm. Social welfare mechanisms that could mitigate the impact of the pandemic are limited and struggling, and this has exposed the vulnerabilities of our food systems and created the need to strengthen the continent's resilience to manage future shocks.\n\nAccording to the Global Network Against Food Crises report referenced by Tony Blair Institute for Global Change, before COVID-19, Africa was already home to more than 70% of the world's poorest people and 55 percent of the world's hungry. However, because of Covid19, in Africa alone, 22 million more people will need food assistance soon.\n\nAfrican agriculture would greatly benefit from improved seeds, fertilizer, machines, and other inputs but even more, farmers would benefit from significant investment in agri-processing facilities to reduce post-harvest losses. The Tony Blair Institute for Global Change estimates that 48 million people can be fed on post-harvest wastages yearly south of the Sahara.\n\nWays Commodity Exchanges Can Help Food Systems In Africa\n\nCreate access to market: Commodity Exchanges allow farmers to access an ethical trading platform and benefit from fairer transactions. As a result, they will make better investment decisions and economic growth.\n\nEnable infrastructural development: Agriculture and food systems provide income for almost half of Africa's population and as much as 70 percent in East Africa alone. If the continent has developmental ambitions, resilient food systems must exist, and exchanges can act as conduits for better infrastructure such as roads and warehouses to transport or store goods.\n\nPotential to boost intra-regional trade - Africa has an almost non-existent intra-regional trade. However, the African Continental Free Trade Area (AfCFTA) is poised to transform the face of commodity and other trading in Africa. The AfCFTA is a trade agreement between 44 of the 55 African Union countries to create a single market bolstered by the free movement of trade services and a single currency union.\n\nHelp farmers save on high transaction costs - By their very nature, Commodity Exchanges can reduce high prices in commodity value chains. These can include expenses incurred by farmers when trying to find buyers for their produce and costs associated with securing finance, among others. These benefits stimulate agricultural growth.\n\nHelp reduce financiers’ risk - Investors and financiers usually classify Africa as high risk and low profit, this has affected farmers' access to investment, and even loans attract high interest. But through commodity exchanges, ecosystem forms of financing now exist that help reduces the financiers' risk.\n\nMake it possible for farmers to lock prices Market participants in commodity markets can lock prices of crops months before they are harvested and benefit from price changes. Farmers can plan, choose the most profitable crops to grow, and discern the best time to sell, minimizing the risk of revenue loss due to price fluctuation.\n\nAt AFEX we are empowering farmers with research and innovation, access to market, funding, and resources to thrive and ultimately strengthen Africa's weak food systems.",
				subject: "Ways Commodity Exchanges can help Food Systems in Africa",
				url: "https://atsbk.afexats.com/api/v1/newsletter/5",
			},
		],
	},
	message: "Successfully",
};
type Newsletter = typeof NewsletterSample;

function Newsletter() {
	const { data: newsletter, isLoading } = useQuery<Newsletter>(
		["Newsletter"],
		async () =>
			axios("/api/v1/newsletter")
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
				{newsletter?.data?.results
					.splice(2, 1)
					.map(({ title, content, subject }: any, idx: number) => (
						<article
							key={idx}
							className='lg:text-base text-sm'>
							<p className=''>{title}</p>
							<p className='pt-10'>{content}</p>
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
					))}
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
