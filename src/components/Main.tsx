import React from "react";
import MyImage from "../assets/image 1.png";
import MyImage2 from "../assets/image 2.png";
import MyImage3 from "../assets/image 3.png";
import MyImage4 from "../assets/image 4.png";
import MyImage5 from "../assets/image 5.png";

function Main() {
	return (
		<main className='flex-col m-auto sticky'>
			<div className='flex items-center justify-between w-[70%] m-auto pt-12 pb-5'>
				<span className='text-[#C81107] w-32 text-xl font-bold pl-'>
					ATS Updates
				</span>
				<span className='flex'>
					{" "}
					<input
						type='text'
						placeholder='Input search text'
						className='px-2 py-1.5 border w-64 rounded-sm text-sm outline-none'
					/>
					{/* <span></span> */}
				</span>
				<span className='text-[#C81107]'>Blogs</span>
				<span className='text-[#C81107]'>News</span>
				<span className='text-[#C81107]'>Gallery</span>
			</div>

			<div className='bgHero h-[37rem] w-[90rem] items-center flex justify-center m-auto'>
				<div>
					<p className='text-center w-[28rem] text-7xl font-bold'>
						{" "}
						Happenings Around You{" "}
					</p>
					<p className='text-center text-4xl font-light pt-5 text-[#4A5568]'>
						Get Updated
					</p>
				</div>
			</div>

			<div className='m-auto flex border border-solid border-[#E2E2E2] w-[75.5rem] rounded-sm my-10 justify-between'>
				<div className='flex-col px-16 pt-14'>
					<p className='text-[#2D3748] text-4xl font-bold'>
						Ba Wasa! Long Established
					</p>
					<p className='text-base text-[#718096] w-[31.5rem]'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that....
					</p>
					<div className='flex gap-3 pt-16 items-center'>
						<img
							src={MyImage2}
							className='h-10'
						/>
						<div className='flex-col font-sans'>
							<p className='text-[#C81107] text-xs font-semibold'>
								Gloria Erimosele
							</p>
							<span className='flex gap-[13.3rem] items-center'>
								<p className='text-[#6F6F70] font-semibold text-[10px]'>
									A month ago ꞏ 3 min read
								</p>
								<p className='text-[15px] text-[#2D3748] font-bold -mt-1'>
									Read more
								</p>
							</span>
						</div>
					</div>
				</div>
				<div>
					<img src={MyImage} />
				</div>
			</div>
			<div className='flex'>
				<div className='flex-col'>
					<img
						src={MyImage3}
						className='object-cover'
					/>
					<p className='text-[#2D3748] text-xl font-bold w-72'>
						Ways Commodity Exchanges can help Food Systems in Africa
					</p>
				</div>
			</div>
		</main>
	);
}

export default Main;
