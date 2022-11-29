import { Button, Menu, Textarea, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import PopUp from "./assets/group-pop.png";
import BoyLaptop from "./assets/boy-with-nosemark.png";
import RedOverlay from "./assets/red-overlay.png";
import ReceivedMessage from "./assets/receivedmess.png";
import axios from "axios";
import { useForm } from "@mantine/form";

interface FormValues {
	fullName: string;
	email: string;
	subject: string;
	message: string;
}

export default function MenuPopover() {
	const form = useForm<FormValues>({
		initialValues: {
			fullName: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const [success, setSuccess] = useState(false);

	function sendMessage(values: FormValues) {
		console.log(values);
		axios({
			method: "post",
			url: "https://atsbk.afexats.com/api/v1/support/contact-us-list-create/",
			data: JSON.stringify({
				...values,
			}),
		}).then((response) => {
			if (response.status === 201) {
				setSuccess(true);
				console.log(response.data);
				form.reset();
				setTimeout(() => {
					setSuccess(false);
				}, 5000);
			}
		});
	}

	return (
		<Menu
			transition='slide-up'
			offset={10}
			transitionDuration={150}>
			<Menu.Target>
				<img
					src={PopUp.src}
					className='hidden sm:block sm:fixed w-14 bottom-6 right-6 z-[400]'
					alt='pop-up'
				/>
			</Menu.Target>
			<Menu.Dropdown className='border-2 boder-2-[#EAAEAD] rounded-2xl !left-auto right-5 !top-auto bottom-5 !fixed'>
				<Menu.Label
					className={`w-[400px] bg-no-repeat bg-cover border border-[#EAAEAD] rounded-tl-2xl rounded-tr-2xl flex gap-3 justify-start pl-8 py-4`}
					style={{
						backgroundImage: `url(${RedOverlay.src})`,
					}}>
					<div className='p-2 rounded-full bg-[#EAAEAD]'>
						<img
							src={BoyLaptop.src}
							alt='Boy with Laptop'
							className='w-5'
						/>
					</div>
					<section className='flex flex-col gap-3'>
						<div className='text-[1.125rem] text-bold text-white leading-3'>
							Ask_Deji
						</div>
						<div className='text-white text-[0.875rem] font-normal leading-3'>
							Customer Representative
						</div>
					</section>
				</Menu.Label>
				<Menu.Label className='w-[400px] flex flex-col gap-4'>
					<p className='text-[#C81107] text-[0.75rem] font-normal leading-4'>
						Please fill out the form below and we will get back to you as soon
						as possible.
					</p>

					<form
						className='flex flex-col gap-1'
						onSubmit={form.onSubmit(sendMessage)}>
						{success ? (
							<div
								className='leading-6 text-[1rem] border-2 rounded-md flex p-3 items-center justify-start gap-3'
								style={{
									background:
										"linear-gradient(180deg, #EEFDF7 0%, #EBFDF5 19.26%);",
									border: "1.83447px solid #76AD94",
									boxShadow:
										"inset 0px 0px 3.66893px rgba(255, 255, 255, 0.63)",
								}}>
								<img
									src={ReceivedMessage.src}
									alt=''
									className='w-5'
								/>
								<h5>Thanks, your message was received</h5>
							</div>
						) : null}
						<TextInput
							styles={{
								input: { backgroundColor: "#FBFAF9" },
							}}
							type='text'
							placeholder='Full name'
							{...form.getInputProps("fullName")}
						/>
						<TextInput
							styles={{
								input: { backgroundColor: "#FBFAF9" },
							}}
							type='email'
							placeholder='Email'
							mt='md'
							{...form.getInputProps("email")}
						/>
						<TextInput
							styles={{
								input: { backgroundColor: "#FBFAF9" },
							}}
							type='text'
							placeholder='Subject'
							mt='md'
							{...form.getInputProps("subject")}
						/>
						<Textarea
							styles={{
								input: { backgroundColor: "#FBFAF9" },
							}}
							placeholder='Message'
							mt='md'
							cols={20}
							minRows={8}
							{...form.getInputProps("message")}
						/>
						<Button
							fullWidth
							className='bg-[#C81107] hover:bg-[#C81107] rounded-xl text-white py-3 px-6'
							type='submit'
							mt='md'>
							Submit
						</Button>
					</form>
				</Menu.Label>
			</Menu.Dropdown>
		</Menu>
	);
}
