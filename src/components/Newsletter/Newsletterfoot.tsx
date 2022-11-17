import React from "react";
import Link from "next/link";

function Newsletterfoot() {
	return (
		<div className='bg-[#1B1B1B] grid grid-flow-row py-12 text-white justify-center items-center text-center gap-4 w-full'>
			<div className='flex text-[0.8125rem] text-white font-normal ats-address gap-3'>
				<p className=''>&copy; 2022 AFEX NIGERIA</p>
				<span className=''>|</span>
				<p className=''>All rights reserved</p>
			</div>

			<ul className='flex text-[0.8125rem] text-white font-normal ats-address gap-2 '>
				<Link href='/PrivacyPolicy'>
					<li className='underline hover:underline-offset-2 hover:underline-white'>
						Privacy Policy
					</li>
				</Link>
				<li className=''>|</li>
				<Link href='/contactUs'>
					<li className='underline hover:underline-offset-2 hover:underline-white'>
						Contact us
					</li>
				</Link>
				<li className=''>|</li>
				<li className='underline hover:underline-offset-2 hover:underline-white'>
					Unsubscribe
				</li>
			</ul>
		</div>
	);
}

export default Newsletterfoot;
