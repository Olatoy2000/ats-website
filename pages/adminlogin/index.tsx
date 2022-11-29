import { Icon } from "@iconify/react";
import LoginBakground from "./assets/atslogin.png";
import Link from "next/link";
import { PasswordInput, TextInput } from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "@mantine/form";

interface FormValues {
	email: string;
	password: string;
}

function AdminLogin() {
	const form = useForm<FormValues>({
		initialValues: {
			email: "",
			password: "",
		},
	});
	const [success, setSuccess] = useState(false);

	const sendAdminLogin = (values: FormValues) => {
		console.log(values);
		var data = JSON.stringify({
			email: "toladejo@afexnigeria.com",
			password: "password@1",
		});

		var config = {
			method: "post",
			url: "https://atsbk.afexats.com/api/v1/account/admin/login",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				if (response.status === 201 || 200) {
					console.log(values);
					console.log(response.data);
					form.reset();
				}
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error: any) {
				console.log(error);
			});
		// axios({
		//   method: "post",
		//   url: "https://atsbk.afexats.com/api/v1/account/admin/login",
		//   data: JSON.stringify({
		//     ...values,
		//   }),
		// }).then((response) => {
		//   if (response.status === 201) {
		//     console.log(values);
		//     console.log(response.data);
		//     form.reset();
		//   }
		// });
	};

	const [time, setTime] = useState(0);
	useEffect(() => {
		const date = new Date();
		setTime(date.getHours());
	}, [time]);
	return (
		<div
			style={{
				backgroundImage: `url(${LoginBakground.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				paddingBlock: "80px",
			}}>
			<section className='grid md:grid-cols-[3fr_1fr] w-5/6 mx-auto md:gap-4 gap-8'>
				<article className='flex flex-col bg-[#1B1B1B] p-8'>
					<h1 className='text-white font-bold text-[2rem] leading-10 pb-5'>
						Admin Login
					</h1>
					<form
						onSubmit={form.onSubmit(sendAdminLogin)}
						className='gap-8 grid md:grid-cols-2'>
						<div className='flex gap-6 bg-white justify-between p-3'>
							<TextInput
								classNames={{ input: "border-none outline-none " }}
								styles={{ root: { border: "none", outline: "none" } }}
								type='email'
								placeholder='Enter your email'
								className='w-full outline-none'
								required
								value={{}}
								{...form.getInputProps("email")}
							/>
						</div>
						<div className=' sm:flex sm:items-center sm:bg-white  sm:px-3 sm:py-2'>
							<PasswordInput
								placeholder='Enter your Password'
								className='text-semiBold-chineseSilver placeholder:leading-6 placeholder:text-semiBold-chineseSilver w-full'
								classNames={{
									input:
										"border-none rounded-none flex items-center py-6 font-['Mulish']",
									rightSection: "p-3",
									innerInput:
										"placeholder:text-[1rem] pt-[10px] align-baseline font-['Mulish]",
									root: "",
								}}
								withAsterisk
								value={{}}
								{...form.getInputProps("password")}
							/>
							<button
								type='submit'
								className='text-white py-2 px-4 mt-4 w-full sm:w-max sm:mt-0 rounded-md leading-6 font-bold text-[1rem]'
								style={{
									background:
										"linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
								}}>
								Login
							</button>
						</div>
					</form>
				</article>
				<article className='flex flex-col gap-3 justify-start'>
					<div className='bg-[#E2E9EB] flex flex-col gap-4 justify-start p-4'>
						<h1 className='text-light-eerieBlack self-start font-bold text-[2rem] leading-10'>
							ATS Login
						</h1>
						<div className='flex flex-col gap-2'>
							<div className='flex gap-1 items-center'>
								<p className='text-light-eerieBlack leading-6 whitespace-nowrap font-normal'>
									Login access
								</p>
								<span
									className={`${
										time >= 8 && time <= 16
											? "text-light-metallicGreen text-[0.75rem] leading-4 whitespace-nowrap font-normal"
											: "text-light-internationalOrange text-[0.75rem] leading-4 whitespace-nowrap font-normal"
									}`}>
									<Icon
										icon='ci:dot-01-xs'
										color={time >= 8 && time <= 16 ? `#498e00` : "#C81107"}
										width='40'
										height='40'
										className='inline'
									/>
									{time >= 8 && time <= 16 ? "opened now" : "closed now"}
								</span>
							</div>
							<p
								className={`${
									time >= 8 && time <= 16
										? "text-light-metallicGreen text-[0.75rem] leading-4 whitespace-nowrap font-normal"
										: "text-light-internationalOrange text-[0.75rem] leading-4 whitespace-nowrap font-normal"
								}`}>
								{time >= 8 && time < 16 ? "opens at 8am" : "closes at 5pm "}
							</p>
						</div>
					</div>
					<Link href='/atslogin'>
						<button
							type='submit'
							style={{
								background:
									"linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
							}}
							className='leading-24 font-bold w-full text-center p-4 text-white'>
							Login as ATS
						</button>
					</Link>
				</article>
			</section>
		</div>
	);
}
export default AdminLogin;
