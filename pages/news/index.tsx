import React from "react";
import News from "../../src/components/NewsArticle/NewsArticle";
import Navbar from "../../src/components/Navbar/Navbar";

function index() {
	return (
		//The newssearch in the Updates of the landing page
		<div className='flex flex-col m-auto md:w-[85%] gap-9 max-w-screen-2xl'>
			<Navbar />
			<News />
		</div>
	);
}

export default index;
