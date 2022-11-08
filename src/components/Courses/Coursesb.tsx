import React from "react";
import MyImage from "../../components/Courses/assets/image-5.png";
import Link from "next/link";

function Coursesb() {
	return (
		<div className='md:pt-28'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='text-5xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Our Featured</span>
					Courses
				</h1>
				<p className='text-center w-2/3 text-lg'>
					The future belongs to those who make their own rules and refuse to
					confine themselves. That’s why at AFEX we do not ask "why" but rather
					"why not". Through our ATS program, we aspire to build an ecosystem of
					tech stars with the skills and mindset needed to thrive now and in the
					future
				</p>
			</div>
			<div className='grid grid-flow-row gap-24 pt-16'>
				<div className='flex border-2 rounded-2xl shadow-2xl'>
					<div>
						<img
							className='w-full h-full'
							src={MyImage.src}
						/>
					</div>
					<div className='px-9 pt-16 pb-24 w-3/4'>
						<h1 className='text-[#343434] text-5xl font-bold'>
							Product Management
						</h1>
						<p className='text-lg pt-5 pb-7'>
							Our Product Management course exposes you to organizational
							functions that guide every step of the product's lifecycle. You
							will learn how to develop and position products that meet
							customers' needs and follow the right workflow to collaborate with
							other developers and designers.
						</p>
						<Link
							href='/updates'
							id='#ApplyNow'>
							<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
								<span className='text-white'>Click to Apply</span>
							</button>
						</Link>
					</div>
				</div>

				<div className='flex border-2 rounded-2xl shadow-2xl'>
					<div className='px-9 pt-16 pb-24 w-3/4 text-right'>
						<h1 className='text-[#343434] text-5xl font-bold'>
							Frontend Development
						</h1>
						<p className='text-lg pt-5 pb-7'>
							With our Frontend Developemnt course, you will learn about the
							day-to-day responsibilities of a web developer and get a general
							understanding of the core and underlying technologies that power
							the internet. You will learn how front-end developers create
							websites and applications that work well and are easy to maintain.
						</p>
						<Link href='/updates'>
							<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
								<span className='text-white'>Click to Apply</span>
							</button>
						</Link>
					</div>

					<div>
						<img
							className='w-full h-full'
							src={MyImage.src}
						/>
					</div>
				</div>

				<div className='flex border-2 rounded-2xl shadow-2xl'>
					<div>
						<img
							className='w-full h-full'
							src={MyImage.src}
						/>
					</div>
					<div className='px-9 pt-16 pb-24 w-3/4'>
						<h1 className='text-[#343434] text-5xl font-bold'>
							Backend Development
						</h1>
						<p className='text-lg pt-5 pb-7'>
							Our Backend Development course expose participants from
							entry-level to intermediate software engineering. At the tail of
							the course, you will be able to build robust software that meets
							business needs and management objectives
						</p>
						<Link
							href='/updates'
							id='#ApplyNow'>
							<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
								<span className='text-white'>Click to Apply</span>
							</button>
						</Link>
					</div>
				</div>

				<div className='flex border-2 rounded-2xl shadow-2xl'>
					<div className='px-9 pt-16 pb-24 w-3/4 text-right'>
						<h1 className='text-[#343434] text-5xl font-bold'>
							Mobile App Development
						</h1>
						<p className='text-lg pt-5 pb-7'>
							Introduces students to the complete process of mobile application
							development: covering design, planning, implementation, and
							testing. Includes panel events with professional software
							engineers, giving students a well-rounded exploration into app
							development, core coding concepts used to build simple iOS or
							Android apps and exciting opportunities in the tech industry.
						</p>
						<Link
							href='/updates'
							id='#ApplyNow'>
							<button className='bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
								<span className='text-white'>Click to Apply</span>
							</button>
						</Link>
					</div>

					<div>
						<img
							className='w-full h-full'
							src={MyImage.src}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coursesb;
