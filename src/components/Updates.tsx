import React from "react";
import BlogArticle from "./BlogArticle/BlogArticle";
import AfexNewsPic from "./AfexNewsPic/AfexNewsPic";
import AFEXLearnMore from "./AFEXLearnMore";
import TodayUpdates from "./TodayUpdates";
import ATSGallery from "./ATSGallery/ATSGallery";
import SearchTagsi from "./SearchTagsi";
import SearchEntries from "./SearchEntries";
import Categories from "./Categories";
import ApplyNow from "./ApplyNow";
import RecentlyPosted from "./RecentlyPosted/RecentlyPosted";
import TopAuthors from "./TopAuthors/TopAuthors";
import BaWasa from "./BaWasa/BaWasa";
import SrollUpAnim from "./SrollUpAnim";
import Navbar from "./Navbar/Navbar";

//Updates page
function Updates() {
	return (
		<main className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			<BaWasa />
			<BlogArticle />
			<AfexNewsPic />
			<div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col md:gap-20 '>
				<div className='flex-1'>
					<RecentlyPosted />
					<SearchEntries />
				</div>
				<div className='lg:w-[30%] lg:p-0'>
					<TopAuthors />
					<AFEXLearnMore />
					<Categories />
					<TodayUpdates />
					<ATSGallery />
					<SearchTagsi />
					<SrollUpAnim />
				</div>
			</div>
		</main>
	);
}

export default Updates;
