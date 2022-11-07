import React from "react";
import { Accordion } from "@mantine/core";

function FAQ() {
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-4 pt-24 pb-16'>
				<h1 className='text-5xl font-bold flex gap-1 items-center'>
					<span className='bg-[#C81107] text-white p-3'>Frequently Asked</span>
					Questions
				</h1>
			</div>
			{/* <section className='clump:py-[clamp(3rem,5vw,5rem)] bg-[white] py-20 relative flex place-content-center'>
				<article className='grid mx-auto px-5 sm:px-0 justify-items-center w-full sm:w-4/5 max-w-screen-2xl clump:gap-[clamp(2rem,5vw,5rem)] gap-20'>
					<div className='mantine-0 w-full'>
						<div className='mantine-Accordion-item mantine-1xcx3og'>
							<h3 className='m-0'>
								<button
									className='mantine-UnstyledButton-root mantine-Accordion-control mantine-1slm3lm'
									type='button'
									aria-expanded='false'
									aria-controls='mantine-jqcjmcazn-0-body'
									id='mantine-jqcjmcazn-0'>
									<div className='mantine-ref_icon_1 mantine-Accordion-icon mantine-1m7yomc'>
										<svg
											width='31'
											height='31'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.147 10.566H7.853c-1.24 0-1.86 1.498-.981 2.377l6.69 6.69a2.752 2.752 0 003.888 0l2.545-2.544 4.146-4.146c.866-.879.246-2.377-.994-2.377z'
												fill='#D71E0E'></path>
										</svg>
									</div>
									<div className='mantine-hgwlez mantine-Accordion-label'>
										What is the duration of the training?{" "}
									</div>
								</button>
							</h3>
							<div
								aria-hidden='true'
								className='mantine-0'
								style={{
									height: "0px",
									boxSizing: "border-box",
									overflow: "hidden",
									display: "none",
								}}>
								<div
									style={{ opacity: "0", transition: "opacity 200ms ease 0s" }}>
									<div
										className='mantine-1y8dbhr mantine-Accordion-content'
										role='region'
										id='mantine-jqcjmcazn-0-body'
										aria-labelledby='mantine-jqcjmcazn-0'>
										<div className='mantine-10o5s20 mantine-Accordion-contentInner'>
											It is a 6 - 12 months training program
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='mantine-Accordion-item mantine-1xcx3og'>
							<h3 style={{ margin: "0px" }}>
								<button
									className='mantine-UnstyledButton-root mantine-Accordion-control mantine-1slm3lm'
									type='button'
									aria-expanded='false'
									aria-controls='mantine-jqcjmcazn-1-body'
									id='mantine-jqcjmcazn-1'>
									<div className='mantine-ref_icon_1 mantine-Accordion-icon mantine-1m7yomc'>
										<svg
											width='31'
											height='31'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.147 10.566H7.853c-1.24 0-1.86 1.498-.981 2.377l6.69 6.69a2.752 2.752 0 003.888 0l2.545-2.544 4.146-4.146c.866-.879.246-2.377-.994-2.377z'
												fill='#D71E0E'></path>
										</svg>
									</div>
									<div className='mantine-hgwlez mantine-Accordion-label'>
										Who is eligible for the 1 year training program?
									</div>
								</button>
							</h3>
							<div
								aria-hidden='true'
								className='mantine-0'
								style={{
									display: "none",
									height: "0",
									overflow: "hidden",
								}}>
								<div
									style={{ opacity: "0", transition: "opacity 200ms ease 0s" }}>
									<div
										className='mantine-1y8dbhr mantine-Accordion-content'
										role='region'
										id='mantine-jqcjmcazn-1-body'
										aria-labelledby='mantine-jqcjmcazn-1'>
										<div className='mantine-10o5s20 mantine-Accordion-contentInner'>
											Only fresh Graduates and Corps members currently
											undergoing their National Youth Service Corps (NYSC)
											qualify for this opportunity.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='mantine-Accordion-item mantine-1xcx3og'>
							<h3 style={{ margin: "0px", fontWeight: "normal" }}>
								<button
									className='mantine-UnstyledButton-root mantine-Accordion-control mantine-1slm3lm'
									type='button'
									aria-expanded='false'
									aria-controls='mantine-jqcjmcazn-2-body'
									id='mantine-jqcjmcazn-2'>
									<div className='mantine-ref_icon_1 mantine-Accordion-icon mantine-1m7yomc'>
										<svg
											width='31'
											height='31'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.147 10.566H7.853c-1.24 0-1.86 1.498-.981 2.377l6.69 6.69a2.752 2.752 0 003.888 0l2.545-2.544 4.146-4.146c.866-.879.246-2.377-.994-2.377z'
												fill='#D71E0E'></path>
										</svg>
									</div>
									<div className='mantine-hgwlez mantine-Accordion-label'>
										Whom do I contact for further enquiries?
									</div>
								</button>
							</h3>
							<div
								aria-hidden='true'
								className='mantine-0'
								style={{
									boxSizing: "border-box",
									display: "none",
									height: "0px",
									overflow: "hidden",
								}}>
								<div
									style={{ opacity: "0", transition: "opacity 200ms ease 0s" }}>
									<div
										className='mantine-1y8dbhr mantine-Accordion-content'
										role='region'
										id='mantine-jqcjmcazn-2-body'
										aria-labelledby='mantine-jqcjmcazn-2'>
										<div className='mantine-10o5s20 mantine-Accordion-contentInner'>
											You can send a mail to{" "}
											<span>
												<a
													href='mailto:contactus@afexnigeria.com'
													className='text-[color:var(--afex-red)]'>
													contactus@afexnigeria.com
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section> */}

			<Accordion
				variant='separated'
				defaultValue='customization'>
				<Accordion.Item
					value='customization'
					className='border shadow-xl py-3'>
					<Accordion.Control>
						What is the duration of the program?
					</Accordion.Control>
					<Accordion.Panel className='font-bold bg-neutral-100'>
						It is a 6 - 12 months training program
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item
					value='flexibility'
					className='border shadow-xl py-3'>
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
					className='border shadow-xl py-3'>
					<Accordion.Control>
						Whom do I contact for further enquiries?
					</Accordion.Control>
					<Accordion.Panel className='font-bold bg-neutral-100'>
						You can send a mail to{" "}
						<span className='text-[#C81107]'>(contactus@afexnigeria.com)</span>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

export default FAQ;
