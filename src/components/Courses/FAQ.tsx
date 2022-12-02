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
type Faq = typeof FAQSample["data"]["results"]


const FAQ = () => {
	const [faqs, setFaqs] = useState<Faq>([])

	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://atsbk.afexats.com/api/v1/support/FAQ-list-create/',
			headers: {
				"api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
				"hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
				"request-ts": "1669397556",
			}
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
					<Accordion key={id}
						variant='separated'
						defaultValue='customization'>
						<Accordion.Item
							value='no-focus-ring'
							className='border mb-10 shadow-lg py-3'>
							<Accordion.Control>
								{item?.question}
							</Accordion.Control>
							<Accordion.Panel className='font-bold bg-neutral-100'>
								{item?.answer}
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				))}
			</div>
		</div>
	);
}

export default FAQ;
