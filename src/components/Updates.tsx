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

function Updates() {
	return (
		<main className='flex flex-col m-auto md:w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			<BaWasa />
			<ArticleDisplay />
			<AfexNewsPic />
			<div className='flex gap-40'>
				<div className='flex-1'>
					<RecentlyPosted />
					<ApplyNow />
					<RecentlyPosted />
					<SearchEntries />
				</div>
				<div className='md:w-96'>
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