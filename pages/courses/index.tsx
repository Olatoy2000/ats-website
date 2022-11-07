import React from "react";
import Courses from "../../src/components/Courses/Coursesb";
import FAQ from "../../src/components/Courses/FAQ";
import Footer from "../../src/components/Footer/bFooter";

function index() {
	return (
		//Courses page
		<>
			<div className='flex flex-col m-auto md:w-[85%] gap-9 max-w-screen-2xl'>
				<Courses />
				<FAQ />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

export default index;
