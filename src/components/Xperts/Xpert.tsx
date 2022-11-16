import React from "react";
import { Select } from "@mantine/core";
import Xpertsimg from "../Xperts/assets/xpertspic.png";
import Xpertsimg2 from "../Xperts/assets/xpertspic2.png";

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

	const data = Array(50).map((_, index) => `Item ${index}`);

	const weekXpert = {
		xpertsimg2: Xpertsimg2.src,
		XpertsName: "Ayodele Davies",
		XpertsTeam: "Product Management",
		Year: "2022",
	};
	return (
		<div
			className='flex flex-col gap-8 md:pt-28 md:pb-44 flex-1'
			id='Xpert'>
			<div className='flex lg:gap-20 md:gap-10 justify-end pb-8'>
				<article className='flex flex-col gap-3 justify-center'>
					<h1 className='lg:text-5xl md:text-2xl font-bold flex gap-1 items-center'>
						<span className='bg-[#C81107] text-white md:p-3'>
							Behind the Scenes
						</span>
						Team
					</h1>
					<p className='text-center text-lg md:text-base'>
						Meet our team of Xperts
					</p>
				</article>
				<Select
					allowDeselect
					className='flex items-center gap-2 rounded-md focus:outline-none md:-mt-8'
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
			<div className='grid grid-cols-3 grid-rows-7 gap-8'>
				{Xperts.map((item, idx) => (
					<div
						id={`#${idx}`}
						className='place-items-center grid border-2 rounded-2xl shadow md:py-10'>
						<img
							className='object-cover md:w-3/4'
							src={item.XpertsImg}
						/>

						<div className='text-center md:pt-4'>
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
			<div className='flex flex-col items-center gap-4 md:pt-28'>
				<h1 className='lg:text-5xl md:text-2xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Xpert of the</span>
					Week
				</h1>
				<p className='text-center lg:text-lg md:text-base md:pb-8'>
					A weekly interview with one of our Xpert
				</p>
			</div>
			<div className=''>
				<div className='text-center float-left border-2 rounded-2xl shadow md:pb-10 md:mr-6'>
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
				<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] md:pb-2'>
					About Myself:
				</h2>
				<p className='lg:text-2xl md:text-xl md:pb-12 leading-9'>
					My name is Ayodele Davies. I’m from Ojirami, Edo State. I work as a
					Product Management Intern at AFEX, and I love sports, art,
					volunteering, adventures, going out of fun dates, meeting new people,
					and watching Lionel Messi.
				</p>

				<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] md:pb-3'>
					If you could hang out with any famous person, who would you choose and
					why?
				</h2>
				<p className='lg:text-2xl md:text-xl md:pb-12 leading-9'>
					Two words - Lionel Messi!!!!!!!! As a football enthusiast, I fell in
					love with Messi’s alien and magical way of playing football very early
					in my teenage years. He is simply from another planet!!! I watch him
					every single weekend because “MESSI IS ART”. His football style gives
					me joy. His sheer humility, calm and easy-going nature, while being
					the GREATEST OF ALL TIME amazes and inspires me as a person. I would
					love to meet him in person, give him one or two football tips to help
					him win Worldcup, take pictures with him for my children and
					grandchildren to see that I met the GREATEST SPORTSMAN OF ALL
					TIME!!!!!!!!!!
				</p>

				<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] md:pb-2'>
					The Zombie apocalypse is coming, mention three Xperts you want on your
					team.
				</h2>
				<p className='lg:text-2xl md:text-xl md:pb-12 leading-9'>
					Danladi, Similoluwa (Peace), and Abimbola
				</p>

				<h2 className='font-bold lg:text-2xl md:text-xl text-[#343434] md:pb-2'>
					What would you like Xperts to remember you by when you leave AFEX?
				</h2>
				<p className='lg:text-2xl md:text-xl md:pb-12 leading-9'>
					I believe work is about people, especially the people we live and work
					with every day. Outside of family and close friends, our co-workers
					likely are the most important people in our lives considering the
					incredible amount of time we spend with one another every day. Based
					on this, I’m chiefly interested in being remembered for three things.
				</p>
				<ol className='lg:text-2xl md:text-xl list-decimal list-inside leading-9'>
					<li>Being a kind and compasionate person</li>
					<li>Being eager to help others; and</li>
					<li>
						Having contributed my own quota, however little, to the realization
						of AFEX’s ultimate dream of “helping Africa feed itself”.
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Xpert;
