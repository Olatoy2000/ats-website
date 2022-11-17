import React from "react";
import Newsletter from "../../src/components/Newsletter/Newsletter";
import Newsletterfoot from "../../src/components/Newsletter/Newsletterfoot";
import Newsletterprefoot from "../../src/components/Newsletter/Newsletterprefoot";

function index() {
	return (
		<>
			<div className='mx-auto md:w-[85%] max-w-screen-2xl'>
				<Newsletter />
			</div>
			<div className='mx-auto max-w-screen-2xl'>
				<Newsletterprefoot />
				<Newsletterfoot />
			</div>
		</>
	);
}

export default index;
