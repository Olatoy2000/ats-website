import React, { useEffect, useState } from "react";
import Gloria from "./assets/image 10.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/Twitter.png";
import Instagram from "./assets/Instagram.png";
import Placeholder from "./assets/placeholder.png";
import axios from "axios";

function TopAuthors() {
	const [topAuthor, setTopAuthors] = useState<any>([]);

	const fetchAuthor = () => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/author`)
			.then((response) => {
				setTopAuthors(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchAuthor();
	}, []);

	return (
		<div className='md:grid grid-flow-row'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Top</span>Authors
			</h1>
			{topAuthor.map((item: any, idx: number) => (
				<div
					key={idx}
					className='md:flex  md:py-9 gap-5 items-center'>
					<img
						className='md:h-[2.5rem] lg:h-[4.5rem]'
						src={item.profile_pics ? item.profile_pics : Placeholder.src}
					/>
					<div className='flex-col'>
						<p className='text-[#222222] lg:text-base md:text-xs font-bold'>
							{item.first_name}&nbsp;&nbsp;{item.last_name}
						</p>
						<p className='text-[#666666] lg:text-base md:text-xs'>{item.bio}</p>
						<span className='flex gap-2 md:pt-1'>
							<a href={`/category/${item.facebook_link}`}>
								<button className='bg-[#C81107] md:w-5 md:p-1'>
									<img
										className='md:m-auto'
										src={Facebook.src}
									/>
								</button>
							</a>

							<a href={`/category/${item.twitter_link}`}>
								<button className='bg-[transparent] md:w-5 border'>
									<img
										className='md:m-auto md:h-4'
										src={Twitter.src}
									/>
								</button>
							</a>

							<a href={`/category/${item.instagram_link}`}>
								<button className='bg-[transparent] md:w-5 border'>
									<img
										className='md:m-auto md:h-4'
										src={Instagram.src}
									/>
								</button>
							</a>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default TopAuthors;
