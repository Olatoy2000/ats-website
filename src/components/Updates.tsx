import React, { useState } from "react";
import BlogArticle from "./BlogArticle/BlogArticle";
import AfexNewsPic from "./AfexNewsPic/AfexNewsPic";
import AFEXLearnMore from "./AFEXLearnMore";
import TodayUpdates from "./TodayUpdates";
import ATSGallery from "./ATSGallery/ATSGallery";
import SearchTagsi from "./SearchTagsi";
import SearchEntries from "./SearchEntries";
import Categories from "./Categories";
import RecentlyPosted from "./RecentlyPosted/RecentlyPosted";
import TopAuthors from "./TopAuthors/TopAuthors";
import BaWasa from "./BaWasa/BaWasa";
import SrollUpAnim from "./SrollUpAnim";
import Navbar from "./Navbar/Navbar";

//Updates page
function Updates() {
	const [keyword, setKeyword] = useState("");

	return (
		<main className='flex flex-col mx-auto w-[85%] gap-10 max-w-screen-2xl'>
			<Navbar
				query={""}
				setQuery={function (value: React.SetStateAction<string>): void {
					throw new Error("Function not implemented.");
				}}
			/>
			<BaWasa />
			<BlogArticle />
			<AfexNewsPic />
			<div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col lg:gap-28 md:gap-52 '>
				<div className='flex-1'>
					<RecentlyPosted keyword={keyword} />
				</div>
				<div className='lg:w-[30%]'>
					<TopAuthors />
					<AFEXLearnMore />
					<Categories />
					<TodayUpdates />
					<ATSGallery />
					<SearchTagsi setKeyword={setKeyword} />
				</div>
			</div>
			<div className='flex relative lg:justify-end md:justify-end justify-end sm:justify-center bottom-12'>
				<SrollUpAnim />
			</div>
		</main>
	);
}

export default Updates;
