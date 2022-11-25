import React from "react";
import Xpertsimg2 from "../Xperts/assets/xpertspic2.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const weekXpert = {
	xpertsimg2: Xpertsimg2.src,
	XpertsName: "Ayodele Davies",
	XpertsTeam: "Product Management",
	Year: "2022",
};

function XpertsWeek() {
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

export default XpertsWeek;
