import Link from "next/link";
import React, { useState } from "react";
import AfexLogo from "./assets/afex-logo.png";

function Header() {
	const navLinks = ["Home", "Courses", "Xpert", "Updates"];

	const [active, setActive] = useState(0);
	return (
		<section className='flex flex-col bg-white sticky top-0 z-20'>
			<div className='mantine-Group-root gap-2 border-b border-b-[#A0AEC0] flex w-full clump:pt-[clamp(1rem,4vw,4rem)] sm:flex-row overflow-hidden mantine-dghak8'>
				<button className='mantine-Text-root p-3 leading-6 bg-[#DC372F] font-bold  text-[#fff] mantine-ssm15l'>
					LATEST NEWS
				</button>
				<div className='flex-1 marquee flex overflow-hidden css-1nkfwl'>
					<ul className='flex gap-6 h-[3.5rem] leading-6 pt-3'>
						<li className='whitespace-nowrap text-[#030000]'>
							<span className='text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold'>
								ADMINISTRATION:
							</span>{" "}
							The future belongs to those who make their own rules and refuse to
							confine themselves. That's why at AFEX we do not ask "why" but
							rather "why not". Through our ATS program, we aspire to build an
							ecosystem of tech stars with the skills and mindset needed to
							thrive now and in the future
						</li>
						<li className='whitespace-nowrap text-[#030000]'>
							<span className='text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold'>
								EVENTS:
							</span>{" "}
							Press Release: AFEX Code Cash Crop 3.0 Creates Solutions to Boost
							Agriculture, Finance, and Technology Sectors{" "}
						</li>
						<li className='whitespace-nowrap text-[#030000]'>
							<span className='text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold'>
								ADMINISTRATION:
							</span>{" "}
							AFEX Celebrates World Food Day with the Launch of 100,000MT/ year
							Grain Quality Enhancement Center
						</li>
						<li className='whitespace-nowrap text-[#030000]'>
							<span className='text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold'>
								FINANCE:
							</span>{" "}
							AFEX Advocates for Financing of Agri-SMEs at AGRF 2022 Summit{" "}
						</li>
						<li className='whitespace-nowrap text-[#030000] '>
							<span className='text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold'>
								AGRICULTURE:
							</span>{" "}
							Press Release: AFEX Commodity Exchanges can help Food Systems in
							Africa
						</li>
					</ul>
				</div>
			</div>
			<nav className='flex cursor-pointer w-full mx-auto max-w-screen-2xl items-center justify-between px-10 gap-10 py-4'>
				<img
					src={AfexLogo.src}
					alt='Afex-logo'
					className='pl-4'
				/>
				<ul className='flex gap-5 justify-between items-center text-[1rem]'>
					{navLinks.map((item, idx) => (
						<Link
							key={idx}
							href={item.toLocaleLowerCase()}>
							<li
								onClick={() => setActive(idx)}
								className={
									active === idx
										? "bg-[#C81107] rounded-xl w-[7.5rem] text-white p-3 leading-6 text-center"
										: "rounded-xl w-[7.5rem] leading-6 text-black p-3 text-center"
								}>
								{item}
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default Header;
