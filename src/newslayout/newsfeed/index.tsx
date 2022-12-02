import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import Container from "../../components/Container";

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
	return (
		<Container>
			<section>
				<section className='mb-12'>
					<article className='flex items-center mb-8 gap-5'>
						{/* <img src={newsDetail.picture} alt="" className="w-20" /> */}
						<div className='flex gap-2 flex-col'>
							<h3 className='text-light-internationalOrange text-[1.25rem] font-bold leading-7'>
								{newsDetail.author.first_name}
							</h3>
							<p className='flex text-light-darkSilver leading-6 font-normal text-[1.18rem]'>
								{moment(newsDetail.created_at).format("ll").split(",")[0]}{" "}
								{/* &nbsp; &#8226; */}
							</p>
						</div>
					</article>
					<article className='leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal'>
						{newsDetail.description}
					</article>
				</section>
			</section>
		</Container>
	);
}
