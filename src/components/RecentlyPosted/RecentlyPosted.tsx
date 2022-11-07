import React from "react";
import MyImage from "./assets/image 5.png";
import Gloria from "./assets/image 10.png";
import Calendar from "./assets/image 11.png";
import Clock from "./assets/image 12.png";

function RecentlyPosted() {
	return (
		<div className='grid grid-flow-row'>
			<h1 className='text-2xl font-bold flex gap-1'>
				<span className='bg-[#C81107] text-white'>Recently</span>Posted
			</h1>
			<div className='flex items-center gap-6'>
				<img
					className='md:py-10'
					src={MyImage.src}
				/>
				<div className='flex-col'>
					<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
						Administration
					</span>
					<p className='font-bold text-2xl pt-3'>
						AFEX Celebrates World Investor Week 2022 with the Securities...
					</p>
					<div className='flex gap-2 items-center'>
						<img
							className='h-5'
							src={Gloria.src}
						/>
						<span className='text-[#777777] text-xs'>Abimbola Otepola</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Calendar.src}
						/>
						<span className='text-[#777777] text-xs'>09 December 2022</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Clock.src}
						/>
						<span className='text-[#777777] text-xs'>3 min. read</span>
					</div>
					<p className='text-[#555555] text-base'>
						AFEX, Nigeria’s leading commodities market player, on Monday, rang
						the bell for financial...{" "}
						<span className='text-[#C81107] text-base'>Read more</span>
					</p>
				</div>
			</div>

			<div className='flex items-center gap-6'>
				<img
					className='md:py-10'
					src={MyImage.src}
				/>
				<div className='flex-col'>
					<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
						Administration
					</span>
					<p className='font-bold text-2xl pt-3'>
						AFEX Celebrates World Investor Week 2022 with the Securities...
					</p>
					<div className='flex gap-2 items-center'>
						<img
							className='h-5'
							src={Gloria.src}
						/>
						<span className='text-[#777777] text-xs'>Abimbola Otepola</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Calendar.src}
						/>
						<span className='text-[#777777] text-xs'>09 December 2022</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Clock.src}
						/>
						<span className='text-[#777777] text-xs'>3 min. read</span>
					</div>
					<p className='text-[#555555] text-base'>
						AFEX, Nigeria’s leading commodities market player, on Monday, rang
						the bell for financial...{" "}
						<span className='text-[#C81107] text-base'>Read more</span>
					</p>
				</div>
			</div>

			<div className='flex items-center gap-6'>
				<img
					className='md:py-10'
					src={MyImage.src}
				/>
				<div className='flex-col'>
					<span className='bg-[#F9E3E3] text-[#666666] text-xs md:p-1'>
						Administration
					</span>
					<p className='font-bold text-2xl pt-3'>
						AFEX Celebrates World Investor Week 2022 with the Securities...
					</p>
					<div className='flex gap-2 items-center'>
						<img
							className='h-5'
							src={Gloria.src}
						/>
						<span className='text-[#777777] text-xs'>Abimbola Otepola</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Calendar.src}
						/>
						<span className='text-[#777777] text-xs'>09 December 2022</span>
						<span className='text-[#999999] font-thin'>|</span>
						<img
							className='h-5'
							src={Clock.src}
						/>
						<span className='text-[#777777] text-xs'>3 min. read</span>
					</div>
					<p className='text-[#555555] text-base'>
						AFEX, Nigeria’s leading commodities market player, on Monday, rang
						the bell for financial...{" "}
						<span className='text-[#C81107] text-base'>Read more</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default RecentlyPosted;
