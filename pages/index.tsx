import React from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/bFooter";
import Updates from "../src/components/Updates";

function index() {
	return (
		//Updates of the landing page
		<section className='m-0 p-0'>
			{/* <Header /> */}
			<Updates />
			<Footer />
		</section>
	);
}

export default index;
