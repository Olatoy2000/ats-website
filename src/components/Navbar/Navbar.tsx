import { Children, Fragment, useEffect, useState } from "react";
import { clsx, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";

//Search Navbar
const menu: Array<
	{
		label: string;
	} & Partial<{
		children?: Array<string>;
		visible: boolean;
	}>
> = [
	{
		label: "Blog",
		children: ["Blog", "News"],
		visible: false,
	},
];

function Navbar() {
	const [subMenu, setsubMenu] = useState(
		Object.fromEntries(
			menu
				.filter(({ visible }) => visible !== undefined)
				.map(({ label, visible }) => [label, visible])
		)
	);

	return (
		<div
			className='flex items-center justify-between md:py-6'
			id='Navbar'>
			<span className='text-[#C81107] text-xl font-bold'>ATS Updates</span>

			<div className='flex items-center gap-8'>
				<menu>
					{menu.map(({ label, children }, idx) => {
						const visible = subMenu[label];
						return (
							<Fragment key={idx}>
								<UnstyledButton
									onClick={
										children
											? () => {
													setsubMenu({ ...subMenu, [label]: !visible });
											  }
											: undefined
									}
									className={clsx(
										"flex justify-between focus:outline-none rounded-md shadow-sm font-bold sm:text-sm focus:border-[#D0D5DD]",
										visible ? "black" : "#C81107"
									)}>
									{children ? (
										<Icon icon={visible ? "bx:caret-up" : "bx:caret-down"} />
									) : null}
								</UnstyledButton>

								{children && visible
									? children.map((item, idx) => (
											<UnstyledButton
												key={idx}
												className='flex flex-col md:py-2 font-extrabold md:text-base text-[#EBEBEB]'>
												{item}
											</UnstyledButton>
									  ))
									: null}
							</Fragment>
						);
					})}
				</menu>

				<div className='relative flex w-52'>
					<input
						className='placeholder:italic placeholder:text-slate-400 block bg-[#EBEBEB] w-full border focus:outline-none rounded-md md:py-2 md:pl-9 md:pr-3 shadow-sm sm:text-sm focus:border-[#D0D5DD]'
						placeholder='Search'
						type='text'
						name='search'
					/>

					<button className='absolute right-3 top-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='20'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 50 50'
							className='-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);'>
							<path
								fill='rgba(0, 0, 0, 0.85)'
								d='M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11z'
							/>
							<path
								fill='rgba(0, 0, 0, 0.85)'
								d='m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className='flex gap-16'>
				<a href='#ArticleDisplay'>
					<button className='text-[#C81107]'>Blogs</button>
				</a>
				<a href='#RecentlyPosted'>
					<button className='text-[#C81107]'>News</button>
				</a>
				<a href='#ATSGallery'>
					<button className='text-[#C81107]'>Gallery</button>
				</a>
			</div>
		</div>
	);
}

export default Navbar;
