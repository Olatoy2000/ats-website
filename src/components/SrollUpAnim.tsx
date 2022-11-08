import React from "react";

function SrollUpAnim() {
	return (
		<a href='#Navbar'>
			<div className='flex md:h-1/6'>
				<button className='flex items-center gap-3 md:m-0 animate-bounce'>
					<div className='md:px-2 md:py-5 rounded-full border-[color:var(--afex-grey)] border-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='32'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 1024 1024'>
							<path
								fill='currentColor'
								d='M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z'
							/>
						</svg>
					</div>
					<span className='text-[color:var(--afex-grey)] text-xl'>
						Scroll Up
					</span>
				</button>
			</div>
		</a>
	);
}

export default SrollUpAnim;
