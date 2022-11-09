import React from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";

//The newssearch in the Updates of the landing page
function index() {
	return (
		<div className='flex flex-col mx-auto md:w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			<News />
			<SearchEntries />
		</div>
	);
}

export default index;
