import React from "react";
import copyrighticon from "./assets/copyrighticon.svg";
import face from "./assets/face.svg";
import insta from "./assets/insta.svg";
import linkedin from "./assets/linkedin.svg";
import tweet from "./assets/tweet.svg";
import send from "./assets/send.png";

function Footer() {
	return (
		<footer className='m-auto gap-8 max-w-screen-2xl bg-black align-middle'>
			<div className='md:w-[85%] mx-auto md:mt-48 grid gap-9 grid-flow-col md:py-20'>
				<div>
					<h1 className='uppercase text-[#A09D9D] text-xl font-bold'>
						address
					</h1>
					<p className='text-base text-white'>
						AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
						Road, Ibadan.
					</p>
					<div className='flex gap-1'>
						<img src={copyrighticon.src} />
						<p className='text-base text-white'>2022 AFEX NIGERIA</p>
					</div>
				</div>
				<div>
					<h1 className='uppercase text-[#A09D9D] text-xl font-bold'>
						contact us
					</h1>
					<p className='text-base text-white'>
						07000CALLAFEX (+234 70 002 255 2339) For Inquiries
						(contactus@afexnigeria.com) For Complaints and Resolution updates
						(support@afexnigeria.com)
					</p>
				</div>

				<div>
					<h1 className='uppercase text-[#A09D9D] text-xl font-bold'>
						quick links
					</h1>
					<ul className='text-base text-white font-bold'>
						<li>FAQ</li>
						<li>Login</li>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className='grid grid-cols-4 grid-rows-2 text-base items-center text-white font-bold'>
					<img
						className='md:w-full'
						src={insta.src}
					/>
					<img
						className='md:w-full'
						src={face.src}
					/>
					<img
						className='md:w-full'
						src={linkedin.src}
					/>
					<img
						className='md:w-full'
						src={tweet.src}
					/>

					<div className='items-center w-40 flex'>
						{/* <button className='bg-[#383838] md:w-96 md:p-3 rounded-md text-[#A09D9D] text-sm font-medium'>
							Email Address
						</button> */}
						<input
							type='image'
							placeholder='Email Address'
							className='bg-[#383838] md:w-20 md:p-3 rounded-md text-[#A09D9D] text-sm font-medium'
							src={send.src}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
