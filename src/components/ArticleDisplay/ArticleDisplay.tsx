import React from "react";
import MyImage from "./assets/image 5.png";
import MyImage2 from "./assets/image 2.png";
import SeeMore1 from "./assets/SeeMore3 icon.png";
import SeeMore2 from "./assets/SeeLess icon.png";
import { useRef } from "react";
import Link from "next/link";

//Blogs part in the Updates page
function ArticleDisplay() {
	const articles = [
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
	const scrollRefs = useRef<HTMLDivElement>(null);

	const moveRight = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
	};

	const moveLeft = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
	};

	return (
		<>
			<div
				ref={scrollRefs}
				className='grid overflow-x-scroll md:py-5 md:gap-4 lg:gap-9 grid-flow-col scrollbar-hide'
				id='ArticleDisplay'>
				{articles.map((item, idx) => (
					<div
						key={idx}
						id={`#${idx}`}
						className='flex-col md:pb-[15px] shadow-xl lg:w-96 md:w-80 rounded-md'>
						<img
							src={item.articleImage}
							className='object-cover md:w-full'
						/>
						<Link href='/readblogwithoutcomment'>
							<p className='text-[#2D3748] text-[clamp(1rem,1.5vw,1.25rem)] font-bold md:p-4'>
								{item.title}
							</p>
						</Link>
						<p className='text-[#718096] text-sm md:px-4'>
							{item.articleSnippets}
						</p>
						<div className='flex gap-3 md:pt-10 items-center md:px-4'>
							<img
								src={item.authorImage}
								className='h-10'
							/>
							<div className='font-sans flex-1'>
								<p className='text-[#C81107] text-xs font-semibold'>
									{item.authorName}
								</p>
								<span className='flex justify-between items-center'>
									<p className='text-[#6F6F70] font-semibold text-[10px]'>
										{item.datePublished} &nbsp;&nbsp; {item.readTime} read
									</p>
									<Link href='/readblogwithoutcomment'>
										<p className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
											Read more
										</p>
									</Link>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-between'>
				<button
					className='flex gap-2 bggradi rounded-lg md:p-4 items-center group-hover:bg-black'
					onClick={moveLeft}>
					<span className='text-white'>See Less</span>
					<img src={SeeMore2.src} />
				</button>
				<button
					onClick={moveRight}
					className='flex gap-2 bggradi rounded-lg md:p-4 items-center group-hover:bg-black'>
					<span className='text-white'>See More</span>
					<img src={SeeMore1.src} />
				</button>
			</div>
		</>
	);
}

export default ArticleDisplay;
