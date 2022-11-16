import React from "react";

function Categories() {
	return (
		<div className='py-9'>
			<h1 className='flex bg-[#C81107] md:w-32 text-white text-2xl font-bold'>
				Categories
			</h1>
			<div className='md:text-sm lg:text-base grid grid-flow-row md:pt-6'>
				<ul className='flex justify-between border-b-[#D1E7E5] border-b md:py-2'>
					<li>Lifestyle</li>
					<li>09</li>
				</ul>
				<ul className='flex justify-between border-b-[#D1E7E5] border-b md:py-2'>
					<li>Agriculture</li>
					<li>05</li>
				</ul>
				<ul className='flex justify-between border-b-[#D1E7E5] border-b md:py-2'>
					<li>Finance</li>
					<li>09</li>
				</ul>
				<ul className='flex justify-between border-b-[#D1E7E5] border-b md:py-2'>
					<li>Administration</li>
					<li>10</li>
				</ul>
				<ul className='flex justify-between border-b-[#D1E7E5] border-b md:py-2'>
					<li>Technology</li>
					<li>03</li>
				</ul>
				<ul className='flex justify-between md:py-2'>
					<li>Event</li>
					<li>12</li>
				</ul>
			</div>
		</div>
	);
}

export default Categories;
