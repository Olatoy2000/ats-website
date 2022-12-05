import React, { useEffect, useState } from "react";
import MyImage from "../../components/Courses/assets/image-5.png";
import { openModal, closeAllModals } from "@mantine/modals";
import ProductManagement from "./modals/productManagement";
import { ModalSettings } from "@mantine/modals/lib/context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Placeholder from "./assets/placeholder.png";
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';

//Courses page

const CoursesSample = {
	success: true,
	data: {
		count: 1,
		next: null,
		previous: null,
		results: [
			{
				url: "https://aptbk.afexats.com/api/jobs/courses/1",
				title: "Data Science",
				image: "https://aptbk.afexats.com/media/course/Data-science.jpg",
				description:
					"This course is designed to provide you with basic working knowledge for using Excel spreadsheets for Data Analysis. It covers some of the first steps for working with spreadsheets and their usage in the process of analyzing data.  It includes plenty of videos, demos, and examples for you to learn, followed by step-by-step instructions for you to apply and practice on a live spreadsheet.\n\nExcel is an essential tool for working with data - whether for business, marketing, data analytics, or research. This course is suitable for those aspiring to take up Data Analysis or Data Science as a profession, as well as those who just want to use Excel for data analysis in their own domains. You will gain valuable experience in cleansing and wrangling data using functions and then analyze your data using techniques like filtering, sorting and creating pivot tables.   \n\nThis course starts with an introduction to spreadsheets like Microsoft Excel and Google Sheets and loading data from multiple formats. With this introduction you will then learn to perform some basic level data wrangling and cleansing tasks and continue to expand your knowledge of analyzing data through the use of filtering, sorting, and using pivot tables within the spreadsheet. By performing these tasks throughout the course, it will give you an understanding of how spreadsheets can be used as a data analysis tool and understand its limitations. \n\nThere is a strong focus on practice and applied learning in this course. With each lab, you will gain hands-on experience in manipulating data and begin to understand the important role of spreadsheets. Clean and analyze your data faster by understanding functions in the formatting of data. You will then convert your data to a pivot table and learn its features to make your data organized and readable. The final project enables you to show off your newly acquired data analysis skills. By the end of this course you will have worked with several data sets and spreadsheets and demonstrated the basics of cleaning and analyzing data all without having to learn any code. \n\nGetting started with Excel is made easy in this course. It does not require any prior experience with spreadsheets or coding. Nor does it require downloads or installation of any software. All you need is a device with a modern web browser, and ability to create a Microsoft account to access Excel online at no-cost.  However if you already have a desktop version of Excel, you can follow along quite easily as well.",
			},
		],
	},
};

function Coursesb() {

	const [Courses, setCourses] = useState([])
	// var key = CryptoJS.enc.Utf8.parse("HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM=");
	// 	var iv = CryptoJS.enc.Utf8.parse("PL2LON7ZBLXq4a32le+FCQ==")

	useEffect(() => {
		let requestTs = String(Date.now())
		axios({
			url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/jobs/courses/`,
			headers: {
				"api-key": process.env.NEXT_PUBLIC_API_KEY_1,
				"request-ts": requestTs,
				"hash-key": sha256(
					`${process.env.NEXT_PUBLIC_API_KEY_1} ` +
					`${process.env.NEXT_PUBLIC_SECRET_KEY_1}` +
					requestTs).toString(CryptoJS.enc.Hex),
			},
			method: "get",
		})
			.then((response) => setCourses(response.data.data.results))
			.catch((e) => console.log(e))
	}, [])

	return (
		<div className='pt-24'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='lg:text-5xl md:text-3xl text-xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Our Featured</span>
					Courses
				</h1>
				<p className='text-center w-2/3 sm:w-3/4 lg:text-lg md:text-base text-xs'>
					The future belongs to those who make their own rules and refuse to
					confine themselves. That's why at AFEX we do not ask "why" but rather
					"why not". Through our ATS program, we aspire to build an ecosystem of
					tech stars with the skills and mindset needed to thrive now and in the
					future
				</p>
			</div>
			{Courses?.map(
				({ title, image, url, description }: any, idx: number) => (
					<div
						key={idx}
						className='grid grid-flow-row pt-16'>
						<div
							className={
								idx % 2 === 0
									? "flex lg:flex-row md:flex-row flex-col border-2 rounded-2xl shadow h-max"
									: "flex lg:flex-row-reverse md:flex-row-reverse flex-col border-2 rounded-2xl shadow h-max"
							}>
							<div className='min-w-[40%] p-6'>
								<img
									className='w-full object-scale-down'
									src={image ? image : Placeholder.src}
								/>
							</div>
							<div className='px-9 max-w-[60%] sm:max-w-full lg:pt-16 pt-7 pb-24 md:w-3/4'>
								<h1 className='text-[#343434] lg:text-5xl md:text-3xl font-bold'>
									{title}
								</h1>
								<p className="lg:text-lg font-['Mulish'] md:text-base pt-5 pb-10">
									{description.split("").splice(0, 205).join("") + "..."}
								</p>

								<button
									onClick={() => {
										openModal({
											children: (
												<ProductManagement
													title={title}
													url={url}
												/>
											),
											classNames: {
												inner: "rounded-none",
												header: "hidden",
												modal:
													"p-0 overflow-y-scroll scrollbar-hide rounded-t-lg",
											},
											styles: {
												modal: {
													marginTop: "auto",
													marginBottom: "auto",
													width: "70vw",
													height: "80vh",
													padding: "0",
												},
											},
										});
									}}
									className="bggradi rounded-lg lg:p-4 p-2 items-center group-hover:bg-black"
								>
									<span className="text-white">Read More</span>
								</button>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
}

export default Coursesb;
