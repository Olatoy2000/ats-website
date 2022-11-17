import { useState } from "react";
import axios from "axios";
import Blog from "../../../pages/blog/index";
import { Menu, Button } from "@mantine/core";
import Link from "next/link";
import { Icon } from "@iconify/react";
function Navbar() {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState({
		blogs: [],
		loading: false,
	});
	const handleChange = async (e: any) => {
		const { value } = e.target;
		setQuery(value);
		if (value.length > 1) {
			try {
				axios.defaults.headers.common["API-KEY"] = process.env.APP_API_KEY;
				axios.defaults.headers.common["HASH-KEY"] = process.env.HASH_KEY;
				axios.defaults.headers.common["REQUEST-TS"] = process.env.REQUEST_TS;
				const response = await axios.get(
					`http://578c-41-184-122-5.eu.ngrok.io/api/v1/search-news/?q=${value}`
				);
				console.log(response);
				console.log("Hello from Nav");
				const blogs = await response.data.data.hits;
				console.log(blogs);
				// const blogs = await response.data.data.hits;
				setResult({ blogs, loading: false });
				renderSearch();
			} catch (error) {
				console.log(error, "Error during fetch");
			}
		}
	};
	const renderSearch = () => {
		let blogs = <h1>We couldn't find any blog with your search query</h1>;
		if (result.blogs.length > 1) {
			blogs = <Blog />;
			//  bloglist={result.blogs}
		}
		return blogs;
	};

	const [isOpened, setIsOpened] = useState(false);
	return (
		<div
			className='flex items-center justify-between md:py-10'
			id='Navbar'>
			<span className='text-[#C81107] lg:text-xl md:text-lg font-bold'>
				ATS Updates
			</span>
			<div className='flex items-center gap-8'>
				<Menu
					width={100}
					shadow='md'>
					<Menu.Target>
						<button
							onClick={() => setIsOpened(!isOpened)}
							className='border w-5'>
							{isOpened ? (
								<Icon
									icon='ph:caret-up-bold'
									color='#C81107'
								/>
							) : (
								<Icon icon='ph:caret-down-bold' />
							)}
						</button>
					</Menu.Target>

					<Menu.Dropdown>
						<Link href='/blog'>
							<Menu.Item>Blog</Menu.Item>
						</Link>
						<Link href='/news'>
							<Menu.Item>News</Menu.Item>
						</Link>
					</Menu.Dropdown>
				</Menu>

				<div className='relative flex w-52'>
					<input
						className=' placeholder:text-slate-400 block bg-[#F7F8F9] border focus:outline-none rounded-md md:py-2 md:pl-9 md:pr-3 sm:text-sm'
						placeholder='Search'
						type='text'
						name='search'
						value={query}
						onChange={handleChange}
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
			<div className='gap-16 lg:flex hidden'>
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
