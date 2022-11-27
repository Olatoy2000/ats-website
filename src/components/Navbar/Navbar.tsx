import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { Menu, ActionIcon, Group, Button } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

import axios from "axios";
import Link from "next/link";

function Navbar() {
	// const renderSearch = () => {
	// 	let blogs = <h1>We couldn't find any blog with your search query</h1>;
	// 	if (result.blogs.length > 1) {
	// 		blogs = <Blog />;
	// 		//  bloglist={result.blogs}
	// 	}
	// 	return blogs;
	// };
	const [query, setQuery] = useState("");
	const [isOpened, setIsOpened] = useState(false);
	const { pathname, ...items } = useRouter();
	const path = pathname.slice(1);

	useEffect(() => {
		items.push({ hash: `:~:text=${query}` });
	}, [query]);

	return (
		<Group
			position='apart'
			className='items-center py-10 pl-8 md:px-0 lg:px-0'
			id='Navbar'>
			<span className='text-[#C81107] lg:text-xl md:text-lg lg:flex md:flex hidden font-bold'>
				ATS Updates
			</span>

			<div className='flex gap-4 items-center text-sm'>
				<p>Search by</p>
				<Menu
					width={120}
					shadow='md'
					opened={isOpened}>
					<Menu.Target>
						<Button
							color='gray.3'
							variant='outline'
							onClick={() => setIsOpened(!isOpened)}
							classNames={{
								label: "flex gap-3 flex-nowrap font-normal bg-[#F7F8F9]",
								root: "flex bg-[#F7F8F9] border text-black",
							}}>
							{" "}
							{["blog", "news"].includes(path) ? path : ""}
							{isOpened ? (
								<Icon
									icon='ph:caret-up-bold'
									color='#C81107'
								/>
							) : (
								<Icon icon='ph:caret-down-bold' />
							)}
						</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Link
							passHref
							href={{
								pathname: "/blog",
								search: query,
							}}>
							<Menu.Item component='a'>Blog</Menu.Item>
						</Link>
						<Link
							passHref
							href='/news'>
							<Menu.Item component='a'>News</Menu.Item>
						</Link>
					</Menu.Dropdown>
				</Menu>
				<div className='flex w-52'>
					<input
						onChange={(e) => setQuery(e.target.value)}
						className='placeholder:text-slate-400 flex flex-1 items-end bg-[#F7F8F9] border focus:outline-none rounded-md py-2 pl-4 pr-10 sm:text-sm'
						placeholder='Search'
						type='text'
						name='search'
						value={query}
					/>
					<button className='-ml-10'>
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

			<div className='gap-16 lg:flex hidden'>
				<a href='#BlogArticle'>
					<button className='text-[#C81107]'>Blogs</button>
				</a>

				<a href='#RecentlyPosted'>
					<button className='text-[#C81107]'>News</button>
				</a>

				<a href='#ATSGallery'>
					<button className='text-[#C81107]'>Gallery</button>
				</a>
			</div>
		</Group>
	);
}
export default Navbar;
