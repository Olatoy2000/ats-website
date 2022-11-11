import React from "react";
import Xpert from "../../src/components/Xperts/Xpert";

//Xperts Page
function index() {
	return (
		<div className='flex flex-col mx-auto md:w-[85%] gap-9 max-w-screen-2xl'>
			<Xpert />
		</div>
	);
}

export default index;
