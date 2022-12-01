import React, { useEffect, useState } from "react";
import { Group, Select } from "@mantine/core";
import Xpertsimg from "../Xperts/assets/xpertspic.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const XpertsSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 2,
		next: null,
		previous: null,
		results: [
			{
				id: 2,
				tech_star_id: "ATS-0004",
				full_name: "Azubuine Samuel",
				course: "Backend Engineering",
				profile_picture: null,
				cohort: "2022",
				official_email: "sazubuine@afexnigeria.com",
				url: "http://atsbk.afexats.com/api/v1/tech-stars/tech-star-details-update-delete/2/",
			},
		],
	},
	message: "Successfully Retrieved",
};
type Xperts = typeof XpertsSample;

function Xpert() {
	const { data: Xperts, isLoading } = useQuery<Xperts>(
		["Xperts-details"],
		async () =>
			axios("/api/v1/tech-stars/tech-star-list-create/")
				.then(({ data }) => data)
				.catch((e) => e)
	);

	const data = Array(50).map((_, index) => `Item ${index}`);
	return (
		<div className='flex flex-col gap-8 pt-20'>
			<Group
				position='apart'
				className='lg:flex md:flex flex gap-14 justify-end pb-8 sm:block'>
				<article className='flex flex-col gap-3'>
					<h1 className='lg:text-5xl md:text-2xl sm:text-lg font-bold flex gap-1 justify-center items-center'>
						<span className='bg-[#C81107] text-white md:p-3 p-2'>
							Behind the Scenes
						</span>
						Team
					</h1>
					<p className='text-center lg:text-lg text-base sm:text-sm'>
						Meet our team of Xperts
					</p>
				</article>
				<div className='lg:p-0 md:p-0 p-0 sm:pt-12'>
					<Select
						allowDeselect
						className='flex items-center gap-2 rounded-md focus:outline-none -mt-8'
						label='Sort by'
						searchable
						nothingFound='No options'
						maxDropdownHeight={120}
						placeholder='Cohort'
						data={[
							{ value: "2022", label: "2022" },
							{ value: "2023", label: "2023" },
							{ value: "2024", label: "2024" },
							{ value: "2025", label: "2025" },
							{ value: "2026", label: "2026" },
							{ value: "2027", label: "2027" },
							{ value: "2028", label: "2028" },
							{ value: "2029", label: "2029" },
							{ value: "2030", label: "2030" },
						]}
					/>
				</div>
			</Group>
			<div className='grid lg:grid-cols-3 grid-cols-2 gap-10'>
				{Xperts?.data?.results.map(
					(
						{ full_name, course, profile_picture, cohort }: any,
						idx: number
					) => (
						<div
							key={idx}
							className='place-items-center grid border-2 rounded-2xl shadow py-12'>
							<img
								className='object-cover w-2/3 h-96 rounded-xl'
								src={profile_picture}
							/>

							<div className='text-center pt-4'>
								<p className='text-[#47494E] font-bold lg:text-lg md:text-base'>
									{full_name}
								</p>
								<p className='text-[#47494E] md:text-sm lg:text-base'>
									{course}
								</p>
								<p className='text-[#47494E] md:text-sm lg:text-base'>
									{cohort}
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default Xpert;
