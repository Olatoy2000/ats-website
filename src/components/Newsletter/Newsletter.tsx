import React from "react";
import AFEXLogo from "./assets/afex-logo.png";
import Link from "next/link";

function Newsletter() {
	return (
		<div className='pt-10 pb-16 w-full lg:px-0 md:px-0 pl-8'>
			<img
				className='object-cover pb-8'
				src={AFEXLogo.src}
			/>

			<article className='lg:text-base md:text-sm pb-12'>
				<p className='py-3'>Dear Davies Ayodele,</p>
				<p className='py-3'>
					Applications for the 2nd Cohort of ATS (AFEX Tech Star) is currently
					open. Thank you for your commitment to your career thus far, we can
					see for real that you truly want to be a baller and not a mechanic and
					we are happy to join you in preparing you for that future. Are you
					ready too?Applications for the 2nd cohort now opened and we have 5
					courses available.
				</p>
				<ol className='list-inside list-decimal py-3'>
					<li>Product Management</li>
					<li>Front-end Development</li>
					<li>Back-end Development</li>
					<li>Mobile App Development</li>
					<li>Product Design</li>
				</ol>

				<p className='py-3'>
					Apply and share the application link with friends and family and start
					a career in any of the 5 courses we offer for complete beginners who
					want to begin a career and join the future workforce.
				</p>
				<p className='py-3'>
					One more thing, it's not to just know Coding, Product design etc. See
					your course (backend, frontend etc) as sand. If you give two people
					sand, one will make sand castle and the other will make glass that
					would have multiple uses, think about the difference between these two
					people. We want to give you SAND and give you what will make you glass
					maker. Join the future.
				</p>
				<p className='pt-3'>AFEX Tech Hub.</p>
				<p>Christiana Oyinade House, Beside First Bank, Iwo Road, Ibadan.</p>
				<span className='pb-3 text-[#C81107]'>
					<a
						href='https://afex-tech-stars.com/jobs'
						target='_blank'>
						https://afex-tech-stars.com/jobs
					</a>
				</span>
			</article>
			<Link href='/courses'>
				<button className='bggradi rounded-lg p-5 items-center group-hover:bg-black'>
					<span className='text-white'>Apply Now</span>
				</button>
			</Link>
		</div>
	);
}

export default Newsletter;
