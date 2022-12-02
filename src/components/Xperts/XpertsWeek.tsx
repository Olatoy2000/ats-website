import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const weekXpertSample = {
	success: true,
	status_code: 200,
	data: {
		tech_star: 2,
		interview: {
			"About Myself":
				"My name is Ayodele Davies. I’m from Ojirami, Edo State. I work as a Product Management Intern at AFEX, and I love sports, art, volunteering, adventures, going out of fun dates, meeting new people, and watching Lionel Messi.",
			"What would you like Xperts to remember you by when you leave AFEX?":
				"I believe work is about people, especially the people we live and work with every day. Outside of family and close friends, our co-workers likely are the most important people in our lives considering the incredible amount of time we spend with one another every day. Based on this, I’m chiefly interested in being remembered for three things.",
			"If you could hang out with any famous person, who would you choose and why?":
				"Two words - Lionel Messi!!!!!!!! As a football enthusiast, I fell in love with Messi’s alien and magical way of playing football very early in my teenage years. He is simply from another planet!!! I watch him every single weekend because “MESSI IS ART”. His football style gives me joy. His sheer humility, calm and easy-going nature, while being the GREATEST OF ALL TIME amazes and inspires me as a person. I would love to meet him in person, give him one or two football tips to help him win Worldcup, take pictures with him for my children and grandchildren to see that I met the GREATEST SPORTSMAN OF ALL TIME!!!!!!!!!!",
			"The Zombie apocalypse is coming, mention three Xperts you want on your team.":
				"Danladi, Similoluwa (Peace), and Abimbola",
		},
		tech_star_full_name: "Samuel Azubuine",
		tech_star_profile_picture:
			"/media/tech_star_picture/MicrosoftTeams-image.png",
		tech_star_course: "Backend Development",
		tech_star_cohort: "1.0",
	},
	message: "Successfully",
};
type weekXpert = typeof weekXpertSample;

function XpertsWeek() {
	const { data: weekXpert, isLoading } = useQuery<weekXpert>(
		["Xpert-of-the-Week"],
		async () =>
			axios("/api/v1/tech-stars/recent-xpert-of-the-week/", {
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
		<div className='pb-44'>
			<div className='flex flex-col items-center gap-4 lg:pt-28 pt-20 '>
				<h1 className='lg:text-5xl md:text-2xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Xpert of the</span>
					Week
				</h1>
				<p className='text-center lg:text-lg md:text-base pb-8'>
					A weekly interview with one of our Xpert
				</p>
			</div>
			<div className=''>
				<div className='text-center float-left border-2 rounded-2xl shadow pb-6 mr-6'>
					<div className='w-72'>
						<img
							className='object-cover rounded-xl w-full h-72'
							src={`${process.env.NEXT_PUBLIC_BASE_URL}${weekXpert?.data?.tech_star_profile_picture}`}
						/>
					</div>

					<div className='pt-4'>
						<p className='text-[#47494E] font-bold lg:text-lg md:text-base'>
							{weekXpert?.data?.tech_star_full_name}
						</p>
						<p className='text-[#47494E] md:text-sm lg:text-base'>
							{weekXpert?.data?.tech_star_course}
						</p>
						<p className='text-[#47494E] md:text-sm lg:text-base'>
							{weekXpert?.data?.tech_star_cohort}
						</p>
					</div>
				</div>
				<div>
					<p className='lg:text-2xl md:text-xl pb-6 lg:leading-9 md:leading-9 leading-9'>
						{weekXpert?.data?.interview?.["About Myself"]}
					</p>
					<p className='lg:text-2xl md:text-xl pb-6 lg:leading-9 md:leading-9 leading-9'>
						{
							weekXpert?.data?.interview?.[
								"If you could hang out with any famous person, who would you choose and why?"
							]
						}
					</p>
					<p className='lg:text-2xl md:text-xl pb-6 lg:leading-9 md:leading-9 leading-9'>
						{
							weekXpert?.data?.interview?.[
								"The Zombie apocalypse is coming, mention three Xperts you want on your team."
							]
						}
					</p>
					<p className='lg:text-2xl md:text-xl lg:leading-9 md:leading-9 leading-9'>
						{
							weekXpert?.data?.interview?.[
								"What would you like Xperts to remember you by when you leave AFEX?"
							]
						}
					</p>
				</div>
			</div>
		</div>
	);
}

export default XpertsWeek;
