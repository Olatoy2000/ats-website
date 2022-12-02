import React, { useEffect, useState } from "react";
import { Accordion } from "@mantine/core";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const FAQSample = {
	status: "success",
	status_code: 200,
	data: {
		count: 3,
		next: null,
		previous: null,
		results: [
			{
				question: "What is the duration of the program?",
				answer: "It is a 6 - 12 months training program",
			},
			{
				question: "Who is eligible for the 1 year training program?",
				answer:
					"Only fresh Graduates and Corps members currently undergoing their National Youth Service Corps (NYSC) qualify for this opportunity.",
			},
			{
				question: "Whom do I contact for further enquiries?",
				answer: {
					answer_text: "You can send a mail to",
					answer_link: "(contactus@afexnigeria.com)",
				},
			},
		],
	},
};
type FAQ = typeof FAQSample;
const FAQ = () => {
	const [faqs, setFaqs] = useState([])

	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://atsbk.afexats.com/api/v1/support/FAQ-list-create/',
		})
			.then((response: { data: any; }) => {
				setFaqs((response.data.data.results));
			})
			.catch((error: any) => {
				console.log(error);
			});
	}, [])


	return (
		<div className='pb-40'>
			<div className='flex flex-col items-center justify-center gap-4 pt-24 pb-16'>
				<h1 className='lg:text-5xl md:text-3xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Frequently Asked</span>
					Questions
				</h1>
			</div>

			<div>
				{/* {FAQ?.data?.results.map(({ question, answer }: any, idx: number) => ( */}
				{faqs?.map((item, id) => (
					<Accordion
						variant='separated'
						defaultValue='customization'>
						<Accordion.Item
							value='no-focus-ring'
							className='border shadow-lg py-3'>
							<Accordion.Control>
								{item?.question}
							</Accordion.Control>
							<Accordion.Panel className='font-bold bg-neutral-100'>
								{item.answer}
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				))}
			</div>
		</div>
	);
}

export default FAQ;
