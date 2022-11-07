import React from "react";
import Blog from "../../src/components/Blog/BlogArticle";
import Footer from "../../src/components/Footer/bFooter";
import Navbar from "../../src/components/Navbar/Navbar";

function index() {
	return (
		//The blogsearch in the Updates of the landing page
		<>
			<div className='flex flex-col m-auto md:w-[85%] gap-9 max-w-screen-2xl'>
				<Navbar />
				<Blog />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

export default index;
