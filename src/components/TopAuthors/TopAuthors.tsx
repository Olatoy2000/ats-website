import React from "react";
import Gloria from "./assets/image 10.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/Twitter.png";
import Instagram from "./assets/Instagram.png";

function TopAuthors() {
	const authors = [
		{
			authorImage: Gloria.src,
			authorName: "Gloria Erimosele",
			authorTwitter: Twitter.src,
			authorInstagram: Instagram.src,
			authorFacebook: Facebook.src,
			authorPosition: "Analyst, Talent Manager",
		},
		{
			authorImage: Gloria.src,
			authorName: "Gloria Erimosele",
			authorTwitter: Twitter.src,
			authorInstagram: Instagram.src,
			authorFacebook: Facebook.src,
			authorPosition: "Analyst, Talent Manager",
		},
		{
			authorImage: Gloria.src,
			authorName: "Gloria Erimosele",
			authorTwitter: Twitter.src,
			authorInstagram: Instagram.src,
			authorFacebook: Facebook.src,
			authorPosition: "Analyst, Talent Manager",
		},
	];

	return (
		<div className='md:grid grid-flow-row'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Top</span>Authors
			</h1>
			{authors.map((item, idx) => (
				<div
					key={idx}
					id={`#${idx}`}
					className='md:flex  md:py-9 gap-5 items-center'>
					<img
						className='md:h-[2.5rem] lg:h-[4.5rem]'
						src={item.authorImage}
					/>
					<div className='flex-col'>
						<p className='text-[#222222] lg:text-base md:text-xs font-bold'>
							{item.authorName}
						</p>
						<p className='text-[#666666] lg:text-base md:text-xs'>
							{item.authorPosition}
						</p>
						<span className='flex gap-2 md:pt-1'>
							<button className='bg-[#C81107] md:w-5 md:p-1'>
								<img
									className='md:m-auto'
									src={item.authorFacebook}
								/>
							</button>
							<button className='bg-[transparent] md:w-5 border'>
								<img
									className='md:m-auto md:h-2'
									src={item.authorTwitter}
								/>
							</button>

							<button className='bg-[transparent] md:w-5 border'>
								<img
									className='md:m-auto md:h-2'
									src={item.authorInstagram}
								/>
							</button>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default TopAuthors;
