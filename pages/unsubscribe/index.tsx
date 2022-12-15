import React, { useState } from "react";
import AFEXLogo from "./assets/afex-logo.png";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";
import axios from "axios";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
const encrypt = (element: any) => {
	return CryptoJS.AES.encrypt(element, key, {
		iv: iv,
	}).toString();
};

const newsLetterSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				id: 1,
				title: "You have successfully unsubscribed",
			},
			{
				id: 2,
				title: "Unsubscribe from our mailing list",
				intro:
					"To help us improve our services, we would be grateful if you could tell us why:",
				relevant: "Your emails are not relevant to me",
				frequent: "Your emails are too frequent",
				receive: "I no longer want to receive these mails",
				others: "Others",
			},
		],
	},
	message: "Successfully Retrieved",
	onSuccess: () => {
		const message = "success";
		alert(message);
	},
	onError: () => {
		alert("there was an error");
	},
};
type Newsletter = typeof newsLetterSample;

function index() {
	const { data: Newsletter, isLoading } = useQuery<Newsletter>(
		["News-Articles"],
		async () =>
			axios(
				process.env.NEXT_PUBLIC_BASE_URL +
					`/api/v1/newsletter-subscription-list-create`,
				{
					headers: {
						"api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
						"request-ts": "1669397556",
						"hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
					},
					method: "post",
				}
			)
				.then(({ data }) => data)
				.catch((e) => e)
	);
	const [isUnsubscribed, setisUnsubscribed] = useState(false);
	return (
		<div className='pt-10 flex flex-col gap- pb-16 w-full lg:px-0 md:px-0 px-8 mx-auto md:w-[85%] h-screen max-w-screen-2xl'>
			<div className='8'>
				<img
					className='object-cover pb-8'
					src={AFEXLogo.src}
				/>
			</div>

			{isUnsubscribed ? (
				<div className='flex self-center justify-self-center my-auto flex-col border rounded-md shadow py-10 px-5 items-center'>
					<span className='bg-[#C81107] rounded-full h-32 w-32 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='8em'
							height='8em'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 128 128'>
							<path
								fill='#fff'
								stroke='#e0e0e0'
								strokeMiterlimit='10'
								strokeWidth='6'
								d='M48.3 102.32L12.65 66.87a2.2 2.2 0 0 1 0-3.12l9-9.01c.86-.86 2.25-.86 3.11 0l23.47 23.33c.86.86 2.26.85 3.12-.01l51.86-52.36c.86-.87 2.26-.87 3.13-.01l9.01 9.01c.86.86.86 2.25.01 3.11l-56.5 57.01l.01.01l-7.45 7.49c-.86.86-2.26.86-3.12 0z'
							/>
							<path
								fill='#fff'
								d='M-27.53-17.19c-3.08-3.09-8.13-3.08-11.21 0L-63.65 7.72c-3.08 3.08-8.13 3.08-11.21 0l-24.91-24.9c-3.08-3.08-8.12-3.08-11.21 0l-6.21 6.21c-3.08 3.09-3.08 8.13 0 11.21l24.91 24.91c3.08 3.08 3.08 8.13 0 11.21l-24.91 24.91c-3.08 3.08-3.08 8.12 0 11.21l6.22 6.22c3.08 3.08 8.13 3.08 11.21 0l24.91-24.91c3.08-3.08 8.13-3.08 11.21 0l24.91 24.91c3.08 3.08 8.13 3.08 11.21 0l6.21-6.22c3.08-3.09 3.08-8.13 0-11.21l-24.91-24.9c-3.08-3.08-3.08-8.13 0-11.21L-21.31.25c3.08-3.08 3.08-8.12 0-11.21l-6.22-6.23z'
							/>
						</svg>
					</span>

					<p className='text-[#C81107] text-2xl text-center pt-8 pb-20'>
						You have successfully unsubscribed
					</p>
					<Link href='/'>
						<button className='bggradi rounded-lg py-3 px-10 flex self-center group-hover:bg-black'>
							<span className='text-white text-base'>Home</span>
						</button>
					</Link>
				</div>
			) : (
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
					<Link href=''>
						<button
							className='bggradi rounded-lg p-3 group-hover:bg-black'
							onClick={() => setisUnsubscribed(true)}>
							<span className='text-white text-base'>Unsubscribe</span>
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default index;
