import React from "react";
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

function FAQ() {
	// const { data: FAQ, isLoading } = useQuery<FAQ>(
	// 	["News-Articles-Search"],
	// 	async () =>
	// 		await axios
	// 			.post("/api/v1/support/FAQ-list-create/")
	// 			.then(({ data }) => data)
	// 			.catch((e) => e)
	// );
	// console.log(FAQ);
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
				<Accordion
					variant='separated'
					defaultValue='customization'>
					<Accordion.Item
						value='customization'
						className='border shadow-lg py-3'>
						<Accordion.Control>
							What is the duration of the program?
						</Accordion.Control>
						<Accordion.Panel className='font-bold bg-neutral-100'>
							It is a 6 - 12 months training program
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item
						value='flexibility'
						className='border shadow-lg py-3'>
						<Accordion.Control>
							Who is eligible for the 1 year training program?
						</Accordion.Control>
						<Accordion.Panel className='font-bold bg-neutral-100'>
							Only fresh Graduates and Corps members currently undergoing their
							National Youth Service Corps (NYSC) qualify for this opportunity.
						</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item
						value='focus-ring'
						className='border shadow-lg py-3'>
						<Accordion.Control>
							Whom do I contact for further enquiries?
						</Accordion.Control>
						<Accordion.Panel className='font-bold bg-neutral-100'>
							You can send a mail to{" "}
							<Link href='mailto:contactus@afexnigeria.com'>
								<span className='text-[#C81107]'>
									(contactus@afexnigeria.com)
								</span>
							</Link>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				{/* ))} */}
			</div>
		</div>
	);
}

export default FAQ;
