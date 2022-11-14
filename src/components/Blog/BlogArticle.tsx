import React from "react";
import MyImage from "../../components/Blog/assets/image-5.png";
import MyImage2 from "../../components/Blog/assets/image-2.png";

//Blog Search page
function index() {
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

	return (
		<div className='flex flex-col gap-8'>
			<h1 className='flex bg-[#C81107] w-20 md:p-3 text-white text-2xl font-bold'>
				Blog
			</h1>
			<div className='grid gap-9 grid-cols-3 grid-rows-4'>
				{blogarticles.map((item, idx) => (
					<div
						id={`#${idx}`}
						className='flex-col pb-[15px] shadow rounded-md'>
						<img
							src={item.articleImage}
							className='object-cover md:w-full'
						/>
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
								<span className='flex gap-24 items-center'>
									<p className='text-[#6F6F70] font-semibold text-[10px]'>
										{item.datePublished} &nbsp;&nbsp; {item.readTime} read
									</p>
									<p className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
										Read more
									</p>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default index;
