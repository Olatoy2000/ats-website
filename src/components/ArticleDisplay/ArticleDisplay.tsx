import React, { useEffect, useState } from "react";
import Placeholder from "./assets/placeholder.png";
import SeeMore1 from "./assets/SeeMore3 icon.png";
import SeeMore2 from "./assets/SeeLess icon.png";
import { useRef } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

//Blogs part in the Updates page
function ArticleDisplay() {
	const scrollRefs = useRef<HTMLDivElement>(null);

	const moveRight = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
	};

	const moveLeft = () => {
		const width = scrollRefs.current!.clientWidth;

		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
	};

	const [blogArticle, setBlogArticles] = useState<any>([]);

	const fetchBlogs = () => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`)
			.then((response) => {
				setBlogArticles(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<>
			<div
				ref={scrollRefs}
				className='grid overflow-x-scroll py-5 gap-9 grid-flow-col scrollbar-hide'
				id='ArticleDisplay'>
				{blogArticle.map((item: any, idx: number) => (
					<div
						key={idx}
						className='flex flex-col pb-[15px] shadow-xl lg:w-96 md:w-80 w-64 rounded-md'>
						<img
							src={item.image ? item.image : Placeholder.src}
							className='h-96 object-cover w-full'
						/>
						<Link href={`/blog/${item.id}`}>
							<p className='text-[#2D3748] text-[clamp(1rem,1.5vw,1.25rem)] font-bold p-4'>
								{item.title}
							</p>
						</Link>
						<p className='text-[#718096] flex-1 text-sm px-4'>
							{item.intro + "..."}
						</p>
						<div className='flex gap-3 pt-10 items-center px-4'>
							<img
								src={item.authorImage}
								className='h-10'
							/>
							<div className='font-sans flex-1'>
								<p className='text-[#C81107] text-xs font-semibold'>
									{item.author_fullname}
								</p>
								<span className='flex justify-between items-center'>
									<p className='text-[#6F6F70] font-semibold text-[10px]'>
										<span>
											{moment(item.created_at).format("ll").split(",")[0]}
										</span>{" "}
										&nbsp;&nbsp; {item.min_read}
									</p>
									<Link href={`/blog/${item.id}`}>
										<span className='text-[15px] text-[#2D3748] font-bold -mt-1'>
											Read more
										</span>
									</Link>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-between'>
				<button
					className='flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black'
					onClick={moveLeft}>
					<span className='text-white'>See Less</span>
					<img src={SeeMore2.src} />
				</button>
				<button
					onClick={moveRight}
					className='flex gap-2 bggradi rounded-lg lg:p-4 md:p-4 p-2 items-center group-hover:bg-black'>
					<span className='text-white'>See More</span>
					<img src={SeeMore1.src} />
				</button>
			</div>
		</>
	);
}

export default ArticleDisplay;
