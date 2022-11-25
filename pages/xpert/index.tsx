import React from "react";
import Xpert from "../../src/components/Xperts/Xpert";
import XpertsWeek from "../../src/components/Xperts/XpertsWeek";

//Xperts Page
function index() {
	return (
		<div className='flex flex-col mx-auto w-[85%] gap-9 max-w-screen-2xl'>
			<Xpert />
			<XpertsWeek />
		</div>
	);
}

export default index;
