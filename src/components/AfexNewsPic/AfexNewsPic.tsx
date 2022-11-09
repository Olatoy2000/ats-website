import React from "react";
import MyNews from "./assets/AFEXNews-pic.png";

//Afex News Picture
function AfexNewsPic() {
	return (
		<div className='border rounded-md'>
			<img
				className='md:w-full'
				src={MyNews.src}
			/>
		</div>
	);
}

export default AfexNewsPic;
