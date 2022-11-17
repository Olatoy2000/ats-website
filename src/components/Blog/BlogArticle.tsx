import React, { useEffect, useRef, useState } from "react";
import MyImage from "../../components/Blog/assets/image-5.png";
import MyImage2 from "../../components/Blog/assets/image-2.png";
import axios from "axios";
//Blog Search page

interface IHighlighted {
	text?: string;
	search?: string;
}

function index({ text = "", search = "" }: IHighlighted): JSX.Element {
	const blogarticles = [
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
		{
			articleImage: MyImage.src,
			title: "Ways Commodity Exchanges can help Food Systems in Africa",
			articleSnippets:
				"Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
			authorImage: MyImage2.src,
			authorName: "Gloria Erimosele",
			datePublished: "A month ago",
			readTime: "3 min",
		},
	];

	// let blogAreaRef = useRef(null);

	// let searchWord = "ways";

	// useEffect(() => {
	// 	console.log(blogAreaRef.current.innerText);
	// }, []);
	// const [blogarticles, setBlogArticles] = useState();

	const fetchBlogs = async () => {
		let config = {
			method: "get",
			url: "http://atsbk.afexats.com/api/v1/blogs",
			headers: {
				Authorization: "",
				Accept: "*/*",
				"API-KEY":
					"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
				"HASH-KEY":
					"5ac6fcbc48e050f5d0567bcb96a90e3db64e5b74c52d0d9d1e0b5919daee54e0",
				"REQUEST-TS": "1475874457",
			},
		};

		axios(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		// return setBlogArticles(fetchBlogs());
		fetchBlogs();
	}, []);

	// const re = useMemo(() => {
	// 	const SPECIAL_CHAR_RE = /([.?*+^$[\]\\(){}|-])/g;
	// 	const escapedSearch = search.replace(SPECIAL_CHAR_RE, "\\$1");
	// 	return new RegExp(`(${escapedSearch})`, "i");
	// }, [search]);

	return (
		<div className='flex flex-col gap-8'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 lg:grid-rows-4 md:grid-cols-2 md:grid-flow-row'>
				{blogarticles.map((item, idx) => (
					<div
						key={idx}
						id={`#${idx}`}
						className='flex-col pb-[15px] shadow rounded-md'>
						<img
							src={item.articleImage}
							className='object-cover md:w-full'
						/>
						{/* <span>
							{search === ""
								? text
								: text
										.split(re)
										.filter((part) => part !== "")
										.map((part, i) =>
											re.test(part) ? (
												<div
													className='bg-[yellow]'
													key={part + i}>
													{part}
												</div>
											) : (
												part
											)
										)} */}

						<p className='text-[#2D3748] text-xl font-bold md:p-4'>
							{item.title}
						</p>
						<p className='text-[#718096] text-sm md:px-4'>
							{item.articleSnippets}
						</p>
						<div className='flex gap-3 md:pt-10 items-center md:px-4'>
							<img
								src={item.authorImage}
								className='h-10'
							/>
							<div className='font-sans'>
								<p className='text-[#C81107] text-xs font-semibold'>
									{item.authorName}
								</p>
								<span className='flex lg:gap-20 md:gap-4 items-center'>
									<p className='text-[#6F6F70] font-semibold text-[10px]'>
										{item.datePublished} &nbsp;&nbsp; {item.readTime} read
									</p>
									<p className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
										Read more
									</p>
								</span>
							</div>
						</div>
						{/* </span> */}
					</div>
				))}
			</div>
		</div>
	);
}

export default index;
