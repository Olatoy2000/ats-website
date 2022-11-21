import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
import Link from "next/link";

//News Search page
// function index({ newsarticles }) {
function index() {
	const [newsArticle, setNewsArticles] = useState<any>([]);

	const fetchBlogs = () => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news`)
			.then((response) => {
				setNewsArticles(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<div className='flex flex-col gap-9 pl-8 md:px-0 lg:px-0'>
			<h1 className='flex bg-[#C81107] w-20 lg:p-3 p-2 text-white text-2xl font-bold'>
				News
			</h1>
			<div className='grid gap-9 lg:grid-cols-3 md:grid-cols-2'>
				{newsArticle.map((item: any, idx: number) => (
					<div
						key={idx}
						id={`#${idx}`}
						className='flex flex-col pb-[15px] shadow rounded-md'>
						<img
							src={item.image ? item.image : Placeholder.src}
							className='h-64 object-cover md:w-full'
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

						<p className='text-[#2D3748] text-xl font-bold p-4'>{item.title}</p>
						<p className='text-[#718096] flex-1 text-sm px-4'>
							{item.intro + "..."}
						</p>
						<div className='flex gap-3 pt-10 items-center px-4'>
							<img
								src={item.authorImage}
								className='h-10'
							/>
							<div className='font-sans'>
								<p className='text-[#C81107] text-xs font-semibold'>
									{item.author_fullname}
								</p>
								<span className='flex gap-20 md:gap-4 items-center'>
									<p className='text-[#6F6F70] font-semibold text-[10px]'>
										<span>
											{moment(item.created_at).format("ll").split(",")[0]}
										</span>{" "}
										&nbsp;&nbsp; {item.min_read}
									</p>
									<Link href='/readblogwithoutcomment'>
										<p className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
											Read more
										</p>
									</Link>
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
