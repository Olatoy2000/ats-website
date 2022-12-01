import React, { useEffect, useState } from "react";
import Gloria from "./assets/image 10.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/Twitter.png";
import Instagram from "./assets/Instagram.png";
import Placeholder from "./assets/placeholder.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const authorsSample = {
	success: true,
	status_code: 200,
	data: [
		{
			id: 1,
			first_name: "Gloria",
			last_name: "Eronmonsele",
			email: "geromonsele@afexnigeria.com",
			bio: "Analyst, Talent Management",
			profile_pics:
				"https://atsbk.afexats.com/media/media/profile_pic/1649956831190.jfif",
			url: "https://atsbk.afexats.com/api/v1/author/1",
			twitter_link: null,
			facebook_link: null,
			instagram_link: null,
		},
		{
			id: 2,
			first_name: "Raheem",
			last_name: "Yusuf",
			email: "ryusuf@afexnigeria.com",
			bio: "Head Of Software Engineering",
			profile_pics:
				"https://atsbk.afexats.com/media/media/profile_pic/1567321506330.jfif",
			url: "https://atsbk.afexats.com/api/v1/author/2",
			twitter_link: null,
			facebook_link: null,
			instagram_link: null,
		},
		{
			id: 3,
			first_name: "Rildwan",
			last_name: "Olanrewaju",
			email: "rolanrewaju@afexnigeria.com",
			bio: "Analyst, Frontend Development",
			profile_pics:
				"https://atsbk.afexats.com/media/media/profile_pic/1618866906272.jfif",
			url: "https://atsbk.afexats.com/api/v1/author/3",
			twitter_link: null,
			facebook_link: null,
			instagram_link: null,
		},
		{
			id: 4,
			first_name: "Habeeb",
			last_name: "Oluwo",
			email: "holuwo@afexnigeria.com",
			bio: "Associate, Backend Development",
			profile_pics:
				"https://atsbk.afexats.com/media/media/profile_pic/1516236128606.jfif",
			url: "https://atsbk.afexats.com/api/v1/author/4",
			twitter_link: null,
			facebook_link: null,
			instagram_link: null,
		},
	],
	message: "Successfully",
};
type Authors = typeof authorsSample;
function TopAuthors() {
	const { data: topAuthors, isLoading } = useQuery<Authors>(
		["Top-Authors"],
		async () =>
			axios("/api/v1/top-authors")
				.then(({ data }) => data)
				.catch((e) => e)
	);

	return (
		<div className='md:grid grid grid-flow-row'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Top</span>Authors
			</h1>
			{topAuthors?.data?.map(
				(
					{
						id,
						first_name,
						last_name,
						email,
						bio,
						profile_pics,

						twitter_link,
						facebook_link,
						instagram_link,
					}: any,
					idx: number
				) => (
					<div
						key={idx}
						className='flex py-9 gap-5 items-center'>
						<img
							className='md:h-10 h-16 rounded'
							src={profile_pics ? profile_pics : Placeholder.src}
						/>
						<div className='flex-col'>
							<p className='text-[#222222] lg:text-base md:text-xs font-bold'>
								{`${first_name} ${last_name}`}
							</p>
							<p className='text-[#666666] lg:text-base md:text-xs'>{bio}</p>
							<span className='flex gap-2 md:pt-1'>
								<a href={`/category/${facebook_link}`}>
									<button className='bg-[#C81107] md:w-5 md:p-1'>
										<img
											className='md:m-auto'
											src={Facebook.src}
										/>
									</button>
								</a>

								<a href={`/category/${twitter_link}`}>
									<button className='bg-[transparent] md:w-5 border'>
										<img
											className='md:m-auto md:h-4'
											src={Twitter.src}
										/>
									</button>
								</a>

								<a href={`/category/${instagram_link}`}>
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
				)
			)}
		</div>
	);
}

export default TopAuthors;
