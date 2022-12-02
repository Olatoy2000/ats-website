import { Icon } from "@iconify/react";
import { Divider } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { Whatsapp, Link } from "iconsax-react";
import ProductManagementBack from "./assets/pmback.png";
import setup from "./setup.json";
import moment from "moment";
import useClipboard from "react-use-clipboard";
import { Popover, Text, Button } from "@mantine/core";

import {
	FacebookShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	EmailShareButton,
	LinkedinShareButton,
} from "react-share";
import { url } from "inspector";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {
	url: string;
	title: string;
};

function ProductManagement({ url, title }: Props) {

	const data = {
		"success": true,
		"data": {
			"title": "Data Science",
			"image": "/media/course/Data-science.jpg",
			"description": "This course is designed to provide you with basic working knowledge for using Excel spreadsheets for Data Analysis. It covers some of the first steps for working with spreadsheets and their usage in the process of analyzing data.  It includes plenty of videos, demos, and examples for you to learn, followed by step-by-step instructions for you to apply and practice on a live spreadsheet.\n\nExcel is an essential tool for working with data - whether for business, marketing, data analytics, or research. This course is suitable for those aspiring to take up Data Analysis or Data Science as a profession, as well as those who just want to use Excel for data analysis in their own domains. You will gain valuable experience in cleansing and wrangling data using functions and then analyze your data using techniques like filtering, sorting and creating pivot tables.   \n\nThis course starts with an introduction to spreadsheets like Microsoft Excel and Google Sheets and loading data from multiple formats. With this introduction you will then learn to perform some basic level data wrangling and cleansing tasks and continue to expand your knowledge of analyzing data through the use of filtering, sorting, and using pivot tables within the spreadsheet. By performing these tasks throughout the course, it will give you an understanding of how spreadsheets can be used as a data analysis tool and understand its limitations. \n\nThere is a strong focus on practice and applied learning in this course. With each lab, you will gain hands-on experience in manipulating data and begin to understand the important role of spreadsheets. Clean and analyze your data faster by understanding functions in the formatting of data. You will then convert your data to a pivot table and learn its features to make your data organized and readable. The final project enables you to show off your newly acquired data analysis skills. By the end of this course you will have worked with several data sets and spreadsheets and demonstrated the basics of cleaning and analyzing data all without having to learn any code. \n\nGetting started with Excel is made easy in this course. It does not require any prior experience with spreadsheets or coding. Nor does it require downloads or installation of any software. All you need is a device with a modern web browser, and ability to create a Microsoft account to access Excel online at no-cost.  However if you already have a desktop version of Excel, you can follow along quite easily as well.",
			"active_cohort":
			{
				"name": "ATS 2.0",
				"start_date": "2023-01-05",
				"end_date": "2023-06-30"
			},
			"open_job":
			{
				"id": 2,
				"title": "Data Science for ATS 2.0",
				"cohort": 1,
				"requirement": "make u fit dey think well",
				"date_posted": "2022-11-28T13:08:32.223288+01:00"
			},
		}
	}

	type Course = typeof data


	const [CourseDetail, setCourseDetail] = useState<Course | null>(null)

	useEffect(() => {
		axios({
			url: url,
			headers: {
				"HASH-KEY":
					"ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
				"REQUEST-TS": "1667549939702",
				"API-KEY":
					"qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
			},
			method: "get",
		})
			.then((response) => {
				console.log(response.data)
				setCourseDetail(response.data)
			})
			.catch((e) => console.log(e))
	}, [])

	const [isCopied, setCopied] = useClipboard(
		"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
	);
	return (
		<Fragment>
			<article
				className='flex flex-col relative items-center py-6 gap-6'
				style={{
					backgroundImage: `url(https://aptbk.afexats.com${CourseDetail?.data.image})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}>
				<div className="absolute top-0 bottom-0 left-0 right-0 opacity-40 bg-black"></div>
				<section className='flex flex-col z-50 items-center gap-1'>
					<h1 className='font-extrabold  text-[clamp(1rem,4vw,4.5rem)] leading-[4.75rem] text-semiBold-gostWhite'>
						{CourseDetail?.data?.title}
					</h1>
					<div className='flex items-center gap-1'>
						<Icon
							icon='ci:dot-02-s'
							color={
								+moment(setup.data.job.application_end_date).format("x") -
									+moment().format("x") >
									0
									? "#00ff38"
									: "#C81107"
							}
							width='35'
							height='35'
						/>
						<p
							className={
								"text-[1.125rem] leading-6 " +
								(+moment(setup.data.job.application_end_date).format("x") -
									+moment().format("x") >
									0
									? "text-bold-malachite"
									: "text-light-internationalOrange font-bold")
							}>
							{+moment(setup.data.job.application_end_date).format("x") -
								+moment().format("x") >
								0
								? "Open"
								: "Closed"}{" "}
							Application
						</p>
					</div>
				</section>
				<section className='flex z-50 flex-col mb-8 items-center justify-center gap-4'>
					<div className='flex gap-6'>
						<EmailShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}>
							<button className='border-white text-white hover:bg-[#C81107] border rounded-md p-3'>
								Refer a friend
							</button>
						</EmailShareButton>
						<a href='#app'>
							<button
								className='p-3 text-white rounded-md'
								style={{
									background:
										"linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
								}}>
								Apply now
							</button>
						</a>
					</div>
					<div className='flex items-center mt-4 gap-2'>
						<Icon
							icon='material-symbols:share'
							color='white'
							width='12'
							height='12'
						/>
						<FacebookShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='#fff'>
								<path
									fill='#FFF'
									d='M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z'></path>
							</svg>
						</FacebookShareButton>

						<WhatsappShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}>
							<Whatsapp
								size='24'
								color='#ffffff'
								variant='Bold'
							/>
						</WhatsappShareButton>

						<TelegramShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}
							children={undefined}></TelegramShareButton>
						<LinkedinShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}>
							<Icon
								icon='ri:linkedin-fill'
								color='white'
								width='24'
								height='24'
							/>
						</LinkedinShareButton>
						<TwitterShareButton
							url={
								"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
							}>
							<Icon
								icon='bytesize:twitter'
								color='white'
								width='24'
								height='24'
							/>
						</TwitterShareButton>
						{isCopied ? (
							<Popover
								width={150}
								position='bottom'
								withArrow
								shadow='md'>
								<Popover.Target>
									<Link
										onClick={() => setCopied()}
										size='24'
										color='#fff'
										variant='Bold'
										className='cursor-pointer'
									/>
								</Popover.Target>
								<Popover.Dropdown
									sx={{
										textAlign: "center",
										cursor: "pointer",
									}}>
									<Text size='sm'>Link copied</Text>
								</Popover.Dropdown>
							</Popover>
						) : (
							<Link
								onClick={() => setCopied()}
								size='24'
								color='#fff'
								variant='Bold'
							/>
						)}
					</div>
				</section>
			</article>
			{/* {data?.response?.data?.error?.detail === "Not found" ? null : ( */}
			<article className='flex flex-col gap-6 p-10'>
				<div className='flex flex-col gap-1'>
					<h3 className='text-light-quickSilver uppercase'>course detail</h3>
					<Divider />
				</div>
				<p className='text-justify'>{CourseDetail?.data?.description}</p>
				{CourseDetail?.data?.active_cohort &&
					<>
						<div className='flex flex-col gap-1'>
							<h3 className='text-light-quickSilver uppercase'>active cohort</h3>
							<Divider />
						</div>
						<div>
							<div className='flex flex-col gap-4 justify-start mb-6'>
								<h5 className='font-bold'>
									Cohort:{" "}
									<span className='font-light'>
										{CourseDetail?.data?.active_cohort.name}
									</span>
								</h5>
								<h5 className='font-bold'>
									Starting Date:{" "}
									<span className='font-light'>
										{CourseDetail?.data?.active_cohort.start_date}
									</span>
								</h5>
								<h5 className='font-bold'>
									Ending Date:
									<span className='font-normal'>
										{CourseDetail?.data?.active_cohort.end_date}
									</span>
								</h5>
							</div>
						</div>
					</>
				}
				{CourseDetail?.data.open_job &&
					<>
						<div className='flex flex-col gap-1'>
							<h3 className='uppercase text-light-darkSilver'>open application</h3>
							<Divider />
						</div>
						<div>
							<div className='flex flex-col gap-4 justify-start mb-6'>
								<h5 className='font-bold'>
									Cohort:{" "}
									<span className='font-normal'>{CourseDetail?.data.open_job.cohort}</span>
								</h5>
								<h5 className='font-bold'>
									Starting Date:{" "}
									<span className='font-normal'>
										{moment(setup.data.job.start_date).format("LL")}
									</span>
								</h5>
								<h5 className='font-bold'>
									Ending Date:{" "}
									<span className='font-normal'>
										{moment(setup.data.job.end_date).format("LL")}
									</span>
								</h5>
								<h5 className='font-bold'>
									Application Starting Date:{" "}
									<span className='text-bold-malachite font-bold'>
										{moment(setup.data.job.application_start_date).format("LL")}
									</span>
								</h5>
								<h5 className='font-bold'>
									Application Ending Date:{" "}
									<span className='font-bold text-light-internationalOrange'>
										{moment(setup.data.job.application_end_date).format("LL")}
									</span>
								</h5>
							</div>
						</div>
						<div>
							<h4 className='uppercase font-bold'>Requirement</h4>
							<p>{CourseDetail?.data.open_job.requirement}</p>
						</div>
						<a href={setup.data.job.apply_link}>
							<button
								id='app'
								className='self-center bg-light-internationalOrange w-full rounded-md text-white px-16 py-3'>
								Apply now
							</button>
						</a>
					</>
				}
			</article>
			{/* )} */}
		</Fragment>
	);
}
export default ProductManagement;
