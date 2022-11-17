import React from "react";
import ArticleDisplay from "./ArticleDisplay/ArticleDisplay";
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
		<main className='flex flex-col md:mx-auto md:w-[85%] gap-9 md:max-w-screen-2xl'>
			<Navbar />
			<BaWasa />
			<ArticleDisplay />
			<AfexNewsPic />
			<div className='md:flex md:gap-44'>
				<div className='lg:w-max flex-1 md:w-44'>
					<RecentlyPosted />
					<SearchEntries />
				</div>
				<div className='lg:w-96 md:w-96 w-max lg:p-0 sm:pl-24'>
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
