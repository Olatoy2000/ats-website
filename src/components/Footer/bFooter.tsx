import React from "react";
import copyrighticon from "./assets/copyrighticon.svg";
import face from "./assets/face.svg";
import insta from "./assets/insta.svg";
import linkedin from "./assets/linkedin.svg";
import tweet from "./assets/tweet.svg";
import send from "./assets/send.png";

function Footer() {
	return (
		<footer className='mx-auto gap-8 max-w-screen-2xl bg-black align-middle'>
			<div className='md:w-[85%] mx-auto md:mt-48 grid gap-11 grid-flow-col md:py-28'>
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
						<li>Login</li>
						<li>Courses</li>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className='grid grid-col-4 grid-rows-2 text-base items-center text-white font-bold'>
					<ul className='grid grid-flow-col'>
						<li className='flex gap-5 text-[32px] text-white'>
							<a
								target='_blank'
								href='https://www.instagram.com/afexnigeria/'>
								<svg
									width='2rem'
									height='2rem'
									viewBox='0 0 31 31'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M15.363 8a7.617 7.617 0 00-7.628 7.629 7.617 7.617 0 007.628 7.628 7.618 7.618 0 007.628-7.629A7.617 7.617 0 0015.363 8zm0 12.586a4.968 4.968 0 01-4.957-4.957 4.968 4.968 0 014.957-4.958 4.968 4.968 0 014.958 4.958 4.968 4.968 0 01-4.958 4.957zm7.94-14.676a1.78 1.78 0 00-1.78 1.782 1.78 1.78 0 001.78 1.781c.986 0 1.782-.792 1.782-1.781a1.78 1.78 0 00-1.781-1.782zm6.93 9.719c0-2.054.018-4.088-.097-6.137-.115-2.38-.658-4.493-2.399-6.234C25.993 1.514 23.884.975 21.504.86 19.45.744 17.416.763 15.367.763c-2.053 0-4.088-.019-6.137.096-2.38.116-4.493.659-6.233 2.4C1.252 5.002.713 7.11.597 9.491c-.114 2.053-.096 4.087-.096 6.136 0 2.05-.018 4.088.097 6.137.115 2.38.658 4.493 2.399 6.234 1.744 1.744 3.853 2.283 6.233 2.399 2.053.115 4.088.096 6.137.096 2.053 0 4.087.019 6.137-.096 2.38-.116 4.493-.659 6.233-2.4 1.745-1.744 2.284-3.852 2.4-6.233.118-2.05.096-4.084.096-6.136zm-3.273 8.77a4.726 4.726 0 01-1.123 1.703 4.758 4.758 0 01-1.704 1.123c-1.956.777-6.601.603-8.77.603-2.168 0-6.817.174-8.773-.6a4.726 4.726 0 01-1.704-1.122 4.758 4.758 0 01-1.123-1.704c-.774-1.96-.599-6.605-.599-8.774 0-2.168-.175-6.817.599-8.773A4.726 4.726 0 014.886 5.15 4.808 4.808 0 016.59 4.028c1.956-.774 6.605-.599 8.773-.599 2.169 0 6.818-.175 8.774.6A4.726 4.726 0 0125.84 5.15a4.758 4.758 0 011.124 1.704c.773 1.956.598 6.605.598 8.774 0 2.168.175 6.813-.602 8.77z'
										fill='currentColor'></path>
								</svg>
							</a>
							<a
								target='_blank'
								href='https://www.facebook.com/profile.php?id=100046536650064'>
								<svg
									width='2rem'
									height='2rem'
									viewBox='0 0 31 31'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M13.516 11.075v2.047h-1.499v2.502h1.499v7.438h3.08v-7.438h2.067s.195-1.2.288-2.512h-2.343v-1.71c0-.257.336-.6.67-.6h1.676V8.194h-2.282c-3.232 0-3.156 2.505-3.156 2.88z'
										fill='currentColor'></path>
									<path
										d='M6.536 3.735a2.973 2.973 0 00-2.974 2.973v17.84a2.973 2.973 0 002.974 2.974h17.84a2.974 2.974 0 002.974-2.973V6.709a2.974 2.974 0 00-2.974-2.974H6.536zm0-2.974h17.84a5.947 5.947 0 015.947 5.947v17.84a5.946 5.946 0 01-5.947 5.948H6.536a5.947 5.947 0 01-5.947-5.947V6.709A5.947 5.947 0 016.536.76z'
										fill='currentColor'></path>
								</svg>
							</a>
							<a
								target='_blank'
								href='https://www.linkedin.com/company/afex-commodities-exchange'>
								<svg
									width='2rem'
									height='2rem'
									viewBox='0 0 31 31'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M22.978 17.309v5.496h-3.186v-5.13c0-1.287-.461-2.165-1.615-2.165-.88 0-1.405.591-1.635 1.165-.083.206-.106.49-.106.776v5.354H13.25s.043-8.685 0-9.585h3.187v1.357l-.02.032h.02v-.03c.424-.654 1.18-1.585 2.873-1.585 2.096 0 3.669 1.37 3.669 4.315zM9.914 8.598c-1.09 0-1.803.716-1.803 1.656 0 .922.692 1.658 1.761 1.658h.021c1.112 0 1.804-.738 1.804-1.658-.021-.94-.692-1.656-1.783-1.656zM8.299 22.805h3.188V13.22H8.299v9.585z'
										fill='currentColor'></path>
									<path
										d='M6.624 3.735A2.973 2.973 0 003.65 6.708v17.84a2.973 2.973 0 002.974 2.974h17.84a2.974 2.974 0 002.974-2.973V6.709a2.974 2.974 0 00-2.973-2.974H6.624zm0-2.974h17.84a5.947 5.947 0 015.948 5.947v17.84a5.946 5.946 0 01-5.947 5.948H6.624a5.947 5.947 0 01-5.947-5.947V6.709A5.947 5.947 0 016.624.76z'
										fill='currentColor'></path>
								</svg>
							</a>
							<a
								target='_blank'
								href='https://twitter.com/AFEXNigeria'>
								<svg
									width='2rem'
									height='2rem'
									viewBox='0 0 31 31'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M23.066 11.09a6.162 6.162 0 01-1.751.472 3.026 3.026 0 001.34-1.66c-.6.35-1.255.596-1.938.728a3.061 3.061 0 00-2.225-.948c-1.685 0-3.05 1.345-3.05 3.003 0 .235.027.464.08.684a8.7 8.7 0 01-6.287-3.137 2.947 2.947 0 00-.413 1.509c0 1.04.54 1.962 1.357 2.499a3.087 3.087 0 01-1.382-.376v.037a3.018 3.018 0 002.447 2.944c-.45.119-.921.136-1.378.05a3.046 3.046 0 002.848 2.086 6.179 6.179 0 01-3.788 1.285c-.245 0-.488-.015-.727-.042a8.717 8.717 0 004.674 1.352c5.611 0 8.678-4.577 8.678-8.546l-.01-.39a6.04 6.04 0 001.525-1.55z'
										fill='currentColor'></path>
									<path
										d='M6.712 3.735A2.973 2.973 0 003.74 6.708v17.84a2.973 2.973 0 002.973 2.974h17.841a2.973 2.973 0 002.973-2.973V6.709a2.973 2.973 0 00-2.973-2.974H6.713zm0-2.974h17.841A5.947 5.947 0 0130.5 6.708v17.84a5.947 5.947 0 01-5.947 5.948H6.713a5.947 5.947 0 01-5.948-5.947V6.709A5.947 5.947 0 016.712.76z'
										fill='currentColor'></path>
								</svg>
							</a>
						</li>
					</ul>

					<div className='items-center flex'>
						<form className='flex gap-4 px-4 py-3 bg-[#383838] rounded-xl'>
							<input
								id='email'
								name='email'
								className='flex-1 text-white bg-transparent focus:outline-none'
								placeholder='Email Address'
								type='email'
								value=''
							/>
							<button
								className='place-content-center'
								type='submit'>
								<svg
									width='14'
									height='12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M13.96 1.081l-2.113 9.963c-.16.703-.575.878-1.166.547L7.462 9.219 5.91 10.713c-.172.171-.315.315-.647.315l.232-3.278 5.965-5.39c.26-.232-.056-.36-.403-.129L3.681 6.875.506 5.881c-.69-.215-.703-.69.144-1.022L13.069.075c.575-.216 1.078.128.89 1.006z'
										fill='#fff'></path>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
