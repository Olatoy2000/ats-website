import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
const iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const blogSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 10,
		next: null,
		previous: null,
		results: [
			{
				id: 10,
				title: "5 Investors Share The Best Investment Advice they’ve received",
				intro:
					"Perhaps you’ve heard it before “buy low and sell high” “save for the rainy days” and “apply the 50–30–20 rule”, everyone at some point has received a slice of wisdom that helped them make better financial decisions.\n\nWhen it comes to accumulating wealth, it’s important you stay in a constant learning mode grasping all the financial insights you can get. Also, if you take a closer look, most succes",
				description:
					"Perhaps you’ve heard it before “buy low and sell high” “save for the rainy days” and “apply the 50–30–20 rule”, everyone at some point has received a slice of wisdom that helped them make better financial decisions.\n\nWhen it comes to accumulating wealth, it’s important you stay in a constant learning mode grasping all the financial insights you can get. Also, if you take a closer look, most successful investors have one thing in common — they have rules which are simply a diverse set of information to help them make a fortune. However, until you implement that advice, it’s hard to know what will work for you.\n\nHence, we asked 5investors across various fields what is the absolute best investment advice they have ever received and learned from their own experiences.\n\nOlayemi, Businesswoman/ Fashion stylist\n\nFirstly, before you invest make sure you have an emergency fund so you won’t be forced to liquidate your investment when an emergency occurs. Outside the emergency fund, have a savings account and from the savings take out money for investment.\n\nInvestments are for the long term so be sure you are comfortable enough to allow the money set aside for it to grow and multiply over the years while you also add to it. Secondly, invest in foreign currency to hedge against naira devaluation.\n\nYusuf, Head, structuring, and Origination at AFEX\n\nThat would be, you put your money only in investments that you understand and can distinguish how the investments work.\n\nTaiwo, Financial Analyst\n\nOnly invest in something you understand. If the returns are ridiculously or not logically explained, run.\n\nMohammed, Senior Product Manager\n\nThe best advice I have learned is to never forget the market knows better than me. A lot of smart people fall for the trap of overestimating how smart they are and because of that, they think they know better than everyone else. At the bottom of it, a market is a place where buyers and sellers come together, and the market (the collection of all these buyers and sellers communicate through price and other data like trade volume, etc). Therefore, if the market is saying something through all those numbers, it’s important to not think you know better than the market.",
				created_at: "2022-11-27T22:15:45.432734+01:00",
				url: "http://atsbk.afexats.com/api/v1/blogs/10",
				image:
					"http://atsbk.afexats.com/media/media/blog_article/images/5.jpeg",
				min_read: "1 Minute Read",
				author_fullname: "Gloria Eronmonsele",
				author_image: "/media/media/profile_pic/glo.jpg",
			},
		],
	},
};

export type BlogSample = typeof blogSample;

const blogSearchSample = {
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

export function isBlogSample(value?: BlogQuery): value is BlogSample {
	return value ? Object.hasOwn(value?.data, "results") : false;
}

export type BlogSearchSample = typeof blogSearchSample;

export type BlogQuery = BlogSample | BlogSearchSample;

export const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	);
};
