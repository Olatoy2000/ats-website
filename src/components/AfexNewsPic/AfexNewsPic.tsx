import React from "react";
import MyNews from "./assets/AFEXNews-pic.png";

function AfexNewsPic() {
	return (
		<div className='border'>
			<img
				className='md:w-full'
				src={MyNews.src}
			/>
		</div>
	);
}

export default AfexNewsPic;
