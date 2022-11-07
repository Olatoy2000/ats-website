import React from "react";
import Gloria from "./assets/image 10.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/Twitter.png";
import Instagram from "./assets/Instagram.png";

function TopAuthors() {
	return (
		<div className='grid grid-flow-row'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Top</span>Authors
			</h1>
			<div className='flex md:py-9 gap-5 items-center'>
				<img
					className='h-[4.5rem]'
					src={Gloria.src}
				/>
				<div className='flex-col'>
					<p className='text-[#222222] text-base font-bold'>Gloria Erimosele</p>
					<p className='text-[#666666] text-base'>Analyst, Talent Manager</p>
					<span className='flex gap-2 md:pt-1'>
						<button className='bg-[#C81107] md:w-5 md:p-1'>
							<img
								className='m-auto'
								src={Facebook.src}
							/>
						</button>
						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Twitter.src}
							/>
						</button>

						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Instagram.src}
							/>
						</button>
					</span>
				</div>
			</div>

			<div className='flex md:py-9 gap-5 items-center'>
				<img
					className='h-[4.5rem]'
					src={Gloria.src}
				/>
				<div className='flex-col'>
					<p className='text-[#222222] text-base font-bold'>Gloria Erimosele</p>
					<p className='text-[#666666] text-base'>Analyst, Talent Manager</p>
					<span className='flex gap-2 md:pt-1'>
						<button className='bg-[#C81107] md:w-5 md:p-1'>
							<img
								className='m-auto'
								src={Facebook.src}
							/>
						</button>
						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Twitter.src}
							/>
						</button>

						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Instagram.src}
							/>
						</button>
					</span>
				</div>
			</div>

			<div className='flex md:py-9 gap-5 items-center'>
				<img
					className='h-[4.5rem]'
					src={Gloria.src}
				/>
				<div className='flex-col'>
					<p className='text-[#222222] text-base font-bold'>Gloria Erimosele</p>
					<p className='text-[#666666] text-base'>Analyst, Talent Manager</p>
					<span className='flex gap-2 md:pt-1'>
						<button className='bg-[#C81107] md:w-5 md:p-1'>
							<img
								className='m-auto'
								src={Facebook.src}
							/>
						</button>
						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Twitter.src}
							/>
						</button>

						<button className='bg-[transparent] md:w-5 md:p-1 border'>
							<img
								className='m-auto md:h-2'
								src={Instagram.src}
							/>
						</button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default TopAuthors;
