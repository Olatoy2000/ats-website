import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import Container from "../../components/Container";
import CryptoJS from "crypto-js";
import { useState } from "react";
import router from "next/router";


var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");


const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	)
		;
};

type NewsDetail = {
	id: number;
	title: string;
	intro: string;
	description: string;
	created_at: string;
	category: {
		id: number;
		name: string;
	};
	author: {
		id: number;
		first_name: string;
		last_name: string;
		email: string;
		bio: string;
		profile_pics: string;
	};
	image: string;
};

interface INewsPost {
	newsDetail: NewsDetail;
}

export default function NewsPost({ newsDetail }: INewsPost) {

	const [newsDetails, setNewsDetails] = useState("")
	var config = {
		method: "get",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news/${router.query.newsId}`,
		headers: {
			"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
			"request-ts": "1669397556",
			"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
		},

	};

	axios(config)
		.then((response) => {
			console.log(response.data.data);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<Container>
			<section>
				<section className='mb-12'>
					<article className='flex items-center mb-8 gap-5'>
						<img src={decrypt(newsDetail.author.profile_pics)} alt="" className="w-20" />
						<div className='flex gap-2 flex-col'>
							<h3 className='text-light-internationalOrange text-[1.25rem] font-bold leading-7'>
								<span>{decrypt(newsDetail.author.first_name)}</span>{" "}<span>{decrypt(newsDetail.author.last_name)}</span>
							</h3>
							<p className='flex text-light-darkSilver leading-6 font-normal text-[1.18rem]'>
								{moment(decrypt(newsDetail.created_at)).format("ll").split(",")[0]}{" "}
								{/* &nbsp; &#8226; */}
							</p>
							<div className="flex flex-col gap-2 justify-start">
								<span>{decrypt(newsDetail.author.bio)}</span>
								<span>{decrypt(newsDetail.author.email)}</span>
							</div>
						</div>
					</article>
					<article className='leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal'>
						{decrypt(newsDetail.description)}
					</article>
				</section>
			</section>
		</Container>
	);
}
