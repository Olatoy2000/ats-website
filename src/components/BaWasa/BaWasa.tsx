import React from "react";
import MyImage from "./assets/image 5.png";
import MyImage2 from "./assets/image 2.png";
import Link from "next/link";

function BaWasa() {
	return (
		<div className='grid grid-cols-[1fr_1fr] border border-[#E2E2E2] shadow rounded-md md:gap-12'>
			<article className='md:pt-12 md:pl-8'>
				<div className='mb-10'>
					<p className='text-[#2D3748] text-[clamp(1rem,2.5vw,2.25rem)] text-4xl font-bold md:py-4'>
						Ba Wasa! Long Established
					</p>
					<p className='text-base text-[#718096]'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that....
					</p>
				</div>
				<div className='flex gap-3 md:pt-28 md:pb-4 items-center'>
					<img
						src={MyImage2.src}
						className='h-10 object-cover'
					/>
					<div className='font-sans flex-1'>
						<p className='text-[#C81107] text-xs font-semibold'>
							Gloria Erimosele
						</p>
						<span className='flex gap-3 justify-between items-center'>
							<p className='text-[#6F6F70] font-semibold text-[10px]'>
								A month ago ꞏ 3 min read
							</p>
							<Link href='/readblogwithoutcomment'>
								<p className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
									Read more
								</p>
							</Link>
						</span>
					</div>
				</div>
			</article>
			<div>
				<img
					className='md:w-full h-full object-cover'
					src={MyImage.src}
				/>
			</div>
		</div>
	);
}

export default BaWasa;
