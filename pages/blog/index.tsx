import React from "react";
import Blog from "../../src/components/Blog/BlogArticle";
import Navbar from "../../src/components/Navbar/Navbar";
import SearchEntries from "../../src/components/SearchEntries";

function index() {
	return (
		//The blogsearch in the Updates of the landing page
		<>
			<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
				<Navbar />
				<Blog />
				<SearchEntries />
			</div>
		</>
	);
}

export default index;
