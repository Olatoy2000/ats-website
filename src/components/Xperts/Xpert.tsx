import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import Xpertsimg from "../Xperts/assets/xpertspic.png";
import Xpertsimg2 from "../Xperts/assets/xpertspic2.png";
import axios from "axios";

function Xpert() {
	const Xperts = [
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
		{
			XpertsImg: Xpertsimg.src,
			XpertsName: "Oluwatosin Olabanji",
			XpertsTeam: "Product Management",
			Year: "2022",
		},
	];

	const [xperts, setXperts] = useState<any>([]);

	const fetchBlogs = () => {
		axios(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tech-stars/testimonial-list-create/`
		)
			.then((response) => {
				console.log(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	const data = Array(50).map((_, index) => `Item ${index}`);

	const weekXpert = {
		xpertsimg2: Xpertsimg2.src,
		XpertsName: "Ayodele Davies",
		XpertsTeam: "Product Management",
		Year: "2022",
	};
	return (
		<div
			className='flex flex-col gap-8 pt-20 pb-44 flex-1'
			id='Xpert'>
			<div className='flex flex-col gap-14 lg:flex lg:flex-row md:flex md:flex-row lg:gap-20 md:gap-10 justify-end pb-8'>
				<article className='flex flex-col gap-3 justify-center'>
					<h1 className='lg:text-5xl md:text-2xl sm:text-lg font-bold flex gap-1 justify-center items-center'>
						<span className='bg-[#C81107] text-white md:p-3 p-2'>
							Behind the Scenes
						</span>
						Team
					</h1>
					<p className='text-center lg:text-lg text-base sm:text-sm'>
						Meet our team of Xperts
					</p>
				</article>
				<Select
					allowDeselect
					className='flex items-center gap-2 rounded-md focus:outline-none -mt-8'
					label='Sort by'
					searchable
					nothingFound='No options'
					maxDropdownHeight={120}
					placeholder='Cohort'
					data={[
						{ value: "2022", label: "2022" },
						{ value: "2023", label: "2023" },
						{ value: "2024", label: "2024" },
						{ value: "2025", label: "2025" },
						{ value: "2026", label: "2026" },
						{ value: "2027", label: "2027" },
						{ value: "2028", label: "2028" },
						{ value: "2029", label: "2029" },
						{ value: "2030", label: "2030" },
					]}
				/>
			</div>
			<div className='grid lg:grid-cols-3 grid-cols-2 gap-8'>
				{Xperts.map((item: any, idx: number) => (
					<div
						key={idx}
						id={`#${idx}`}
						className='place-items-center grid border-2 rounded-2xl shadow py-10'>
						<img
							className='object-cover w-3/4'
							src={item.XpertsImg}
						/>

						<div className='text-center pt-4'>
							<p className='text-[#47494E] font-bold lg:text-lg md:text-base'>
								{item.XpertsName}
							</p>
							<p className='text-[#47494E] md:text-sm lg:text-base'>
								{item.XpertsTeam}
							</p>
							<p className='text-[#47494E] md:text-sm lg:text-base'>
								{item.Year}
							</p>
						</div>
					</div>
				))}
			</div>
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
					<img
						className='object-cover'
						src={weekXpert.xpertsimg2}
					/>

					<div className='pt-4'>
						<p className='text-[#47494E] font-bold lg:text-lg md:text-base'>
							{weekXpert.XpertsName}
						</p>
						<p className='text-[#47494E] md:text-sm lg:text-base'>
							{weekXpert.XpertsTeam}
						</p>
						<p className='text-[#47494E] md:text-sm lg:text-base'>
							{weekXpert.Year}
						</p>
					</div>
				</div>
				<div>
					<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] pb-2'>
						About Myself:
					</h2>
					<p className='lg:text-2xl md:text-xl pb-10 lg:leading-9 md:leading-9 leading-9'>
						My name is Ayodele Davies. I’m from Ojirami, Edo State. I work as a
						Product Management Intern at AFEX, and I love sports, art,
						volunteering, adventures, going out of fun dates, meeting new
						people, and watching Lionel Messi.
					</p>

					<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] pb-3'>
						If you could hang out with any famous person, who would you choose
						and why?
					</h2>
					<p className='lg:text-2xl md:text-xl pb-10 lg:leading-9 md:leading-9 leading-9'>
						Two words - Lionel Messi!!!!!!!! As a football enthusiast, I fell in
						love with Messi’s alien and magical way of playing football very
						early in my teenage years. He is simply from another planet!!! I
						watch him every single weekend because “MESSI IS ART”. His football
						style gives me joy. His sheer humility, calm and easy-going nature,
						while being the GREATEST OF ALL TIME amazes and inspires me as a
						person. I would love to meet him in person, give him one or two
						football tips to help him win Worldcup, take pictures with him for
						my children and grandchildren to see that I met the GREATEST
						SPORTSMAN OF ALL TIME!!!!!!!!!!
					</p>

					<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] pb-2'>
						The Zombie apocalypse is coming, mention three Xperts you want on
						your team.
					</h2>
					<p className='lg:text-2xl md:text-xl pb-10 lg:leading-9 md:leading-9 leading-9'>
						Danladi, Similoluwa (Peace), and Abimbola
					</p>

					<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] pb-2'>
						What would you like Xperts to remember you by when you leave AFEX?
					</h2>
					<p className='lg:text-2xl md:text-xl pb-2 lg:leading-9 md:leading-9 leading-9'>
						I believe work is about people, especially the people we live and
						work with every day. Outside of family and close friends, our
						co-workers likely are the most important people in our lives
						considering the incredible amount of time we spend with one another
						every day. Based on this, I’m chiefly interested in being remembered
						for three things.
					</p>
					<ol className='lg:text-2xl md:text-xl list-decimal list-inside lg:leading-9 md:leading-9 leading-9'>
						<li>Being a kind and compasionate person</li>
						<li>Being eager to help others; and</li>
						<li>
							Having contributed my own quota, however little, to the
							realization of AFEX’s ultimate dream of “helping Africa feed
							itself”.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default Xpert;
