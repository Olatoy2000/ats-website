import React from "react";
import FaceBook from "./assets/facebook.png";
import LinkedIn from "./assets/linkedin.png";
import Send from "./assets/send.png";
import Instagram from "./assets/instagram.png";
import Twitter from "../footer/assets/twitter.png";
import Link from "next/link";
import { clsx, Divider } from "@mantine/core";

function Footer() {
	return (
		<section className='bg-black w-full'>
			<article
				className={clsx(
					"grid max-w-screen-2xl lg:grid-cols-[repeat(4,auto)] py-24",
					"gap-12 px-[clamp(1.5rem,6vw,6rem)] mx-auto",
					"md:grid-cols-[repeat(3,auto)]"
				)}>
				<div className='grid content-between lg:content-start row-span-2'>
					<section>
						<h3 className='text-[#A09D9D] mb-4 leading-7 uppercase text-[1.25rem] font-bold'>
							address
						</h3>
						<p className='font-normal leading-6 text-white'>
							AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
							Road, Ibadan.
						</p>
					</section>
					<p className='hidden md:flex text-[0.8125rem] text-white font-normal leading-10'>
						&copy; 2022 AFEX NIGERIA
					</p>
				</div>
				<div className='grid'>
					<h3 className='text-[#A09D9D] mb-4 leading-7 uppercase text-[1.25rem] font-bold'>
						contact us
					</h3>
					<ul className='grid gap-2 font-normal leading-6 text-[1rem] text-white'>
						<li>
							07000CALLAFEX{" "}
							<a href='tel:+234700022552339'>(+234 70 002 255 2339)</a>
						</li>
						<li>
							For Inquiries{" "}
							<a href='mailto:afexnigeria.com'>(contactus@afexnigeria.com)</a>
						</li>
						<li> For Complaints and Resolution updates</li>
						<li>
							<a href='mailto:support@afexnigeria.com'>
								(support@afexnigeria.com)
							</a>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3 className='text-[#A09D9D;] whitespace-nowrap mb-4 leading-7 uppercase text-[1.25rem] font-bold'>
						quick links
					</h3>
					<div className='font-normal leading-6 text-white'>
						<ul className='leading-6 font-bold text-[1rem]'>
							<Link href='/atslogin'>
								<li className='pb-2'>Login</li>
							</Link>
							<Link href='/courses'>
								<li className='pb-2'>Courses</li>
							</Link>
							<Link href='/contactUs'>
								<li className='pb-2'>Contact Us</li>
							</Link>
							<Link href='/PrivacyPolicy'>
								<li className='pb-2'>Privacy Policy</li>
							</Link>
						</ul>
					</div>
				</div>
				<div
					className={clsx(
						"grid gap-4 items-center content-start",
						"lg:grid lg:col-span-1 lg:col-start-auto lg:gap-6",
						"md:col-start-2 md:col-span-2 md:flex md:justify-between"
					)}>
					<ul className='flex gap-4 justify-end'>
						<li>
							<a
								href='https://www.instagram.com/afexnigeria/'
								target='_blank'>
								<img
									src={Instagram.src}
									alt='Instagram Logo'
									className='w-10'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=100046536650064'
								target='_blank'>
								<img
									src={FaceBook.src}
									alt='Facebook'
									className='w-10'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/company/afex-commodities-exchange'
								target='_blank'>
								<img
									src={LinkedIn.src}
									alt='Instagram Logo'
									className='w-10'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/AFEXNigeria'
								target='_blank'>
								<img
									src={Twitter.src}
									alt='Instagram Logo'
									className='w-10'
								/>
							</a>
						</li>
					</ul>
					<div className='flex bg-[#383838] w-fit justify-between justify-self-end gap-2 rounded-md p-2'>
						<input
							type='email'
							placeholder='Email Address'
							className='outline-none border-none overflow-auto text-white placeholder:text-[rgba(0, 0, 0, 0.5)] bg-inherit'
						/>
						<img
							src={Send.src}
							alt='telegram logo'
							className='w-4 h-fit self-center'
						/>
					</div>
					<div className='justify-self-end border border-[#B4B4B0] w-full md:hidden'></div>
					<p className='text-[0.8125rem] text-white font-normal justify-self-end md:hidden leading-10'>
						&copy; 2022 AFEX NIGERIA
					</p>
				</div>
			</article>
		</section>
	);
}

export default Footer;

// 1095px
