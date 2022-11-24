import React from "react";
import AFEXLogo from "./assets/afex-logo.png";
import Link from "next/link";

function index() {
	return (
		<div className='pt-10 flex flex-col gap- pb-16 w-full lg:px-0 md:px-0 px-8 mx-auto md:w-[85%] h-screen max-w-screen-2xl'>
			<div className='8'>
				<img
					className='object-cover pb-8'
					src={AFEXLogo.src}
				/>
			</div>
			<div className='flex self-center justify-self-center my-auto flex-col border rounded-md shadow py-10 items-center'>
				<h2 className='text-[#C81107] text-2xl'>
					Unsubscribe from our mailing list
				</h2>
				<h4 className='text-xs pb-8 leading-9 w-4/5'>
					To help us improve our services, we would be grateful if you could
					tell us why:
				</h4>
				<ul className='text-base list-inside list-disc leading-9 pb-6'>
					<li>Your emails are not relevant to me</li>
					<li>Your emails are too frequent</li>
					<li>I no longer want to receive these mails</li>
					<li>Others</li>
				</ul>
				<Link href='/'>
					<button className='bggradi rounded-lg p-3 group-hover:bg-black'>
						<span className='text-white'>Unsubscribe</span>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default index;
