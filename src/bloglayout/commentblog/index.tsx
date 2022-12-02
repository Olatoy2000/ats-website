import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import moment from "moment";
import { Fragment, useState } from "react";
import Container from "../../components/Container";
import XpertLogo from "./assets/newxpert.png";

export default function CommentBlog({ blogDetail }: any) {
	const [paginate, setPaginate] = useState(5);
	const [blogComment, setBlogComment] = useState(
		blogDetail?.few_comments ?? []
	);

	const form = useForm({
		initialValues: {
			name: "",
			description: "",
			blog_article: blogDetail?.id ?? "",
		},
	});

	const handleSubmit = (e: { preventDefault: () => any }) => {
		e.preventDefault();
		var data = form.values;

		var config = {
			method: "post",
			url: "http://atsbk.afexats.com/api/v1/comment",
			headers: {
				"HASH-KEY":
					"091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
				"REQUEST-TS": "1669397556",
				"API-KEY":
					"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
			},
			data: data,
		};

		axios(config)
			.then(function (response) {
				if (response.statusText === "Created") {
					form.reset();
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<section>
				<section className='mb-12'>
					<article className='flex items-center mb-8 gap-5'>
						<img
							src={XpertLogo.src}
							alt='xpert logo'
							className='w-20'
						/>
						<div className='flex gap-2 flex-col'>
							<h3 className='text-light-internationalOrange text-[1.25rem] font-bold leading-7'>
								{blogDetail?.author_fullname ?? ""}
							</h3>
							<p className='flex text-light-darkSilver leading-6 font-normal text-[1.18rem]'>
								{moment(blogDetail?.created_at).format("ll").split(",")[0]}{" "}
								&nbsp; &#8226; {blogDetail?.min_read ?? ""}
							</p>
						</div>
					</article>
					<section className='grid gap-16 grid-cols-[1fr_300px]'>
						<article className='leading-8 text-justify text-[1.125rem] text-light-completeBlack font-normal'>
							{blogDetail?.description ?? ""}
						</article>
						<aside>
							<h3 className='leading-7 mb-10 text-[1.75rem] text-bold-japaneseIndigo font-bold'>
								Comments
							</h3>
							<div className='flex flex-col gap-12'>
								<article className='flex gap-12 flex-col'>
									{blogComment?.map((el: any, id: number) =>
										id < paginate ? (
											<Fragment key={id}>
												<div className='flex gap-4 justify-start items-start'>
													<img
														src={XpertLogo.src}
														alt=''
														className='w-20 shadow-md border rounded-full'
													/>
													<div className='flex self-center flex-col gap-4'>
														<p className='text-bold-blackOlive justify-start'>
															<span className='text-[1rem] block font-bold'>
																{el.name}
															</span>{" "}
															&nbsp;{" "}
															<span className='leading-4 text-[0.625rem] font-normal text-bold-blackOlive'>
																{
																	moment(el.created_at)
																		.format("ll")
																		.split(",")[0]
																}
															</span>
														</p>
														<p>{el.description}</p>
													</div>
												</div>
											</Fragment>
										) : null
									)}
									{blogComment?.length < 5 &&
										Array(4 - blogComment?.length).fill(
											<Fragment>
												<div className='flex gap-6 items-center'>
													<img
														src={XpertLogo.src}
														alt=''
														className='w-20 shadow-md border rounded-full'
													/>
													<p className='text-bold-blackOlive flex flex-col'>
														<span className='block text-[1rem] font-bold'>
															---------------
														</span>{" "}
														&nbsp;{" "}
														<span className='text-[0.625rem] font-normal  text-bold-blackOlive'>
															----------
														</span>
													</p>
												</div>
												<div className='break-words'>
													...............................................................................................................................................................................................................................................................................................................................
												</div>
											</Fragment>
										)}
									<button
										onClick={() => {
											setPaginate(10);
											axios(
												`http://atsbk.afexats.com/api/v1/blogs-comments/${
													blogDetail?.id ?? ""
												}`
											)
												.then((res) => {
													setBlogComment(res.data.data);
												})
												.catch(console.error);
										}}
										className='flex gap-3 justify-center text-white p-3 rounded-md items-center'
										style={{
											background:
												"linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
										}}>
										Read More
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											viewBox='0 0 24 24'
											fill='#FFF'>
											<path
												stroke='red'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1.5'
												d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8.5v6'></path>
											<path
												stroke='red'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1.5'
												d='M9 12.5l3 3 3-3'></path>
										</svg>
									</button>
								</article>

								<h2 className='text-bold-japaneseIndigo font-extrabold'>
									Comment
								</h2>
								<form>
									<TextInput
										{...form.getInputProps("name")}
										classNames={{
											root: "!p-0",
											input: "!border-none !p-2 !bg-transparent",
										}}
										type='text'
										className='bg-[#F9FAFB] align-start p-3 w-full placeholder:text-[#C9C8C6] rounded-md border border-[#DEDDDC]'
										placeholder='Full Name'
										required
									/>
									<br />
									<Textarea
										{...form.getInputProps("description")}
										classNames={{
											root: "!mt-0 !p-0",
											input: "!bg-transparent !border-none",
										}}
										name=''
										id=''
										placeholder='Enter comment'
										className='bg-[#F9FAFB] resize-none align-start p-3 w-full placeholder:text-[#C9C8C6] rounded-md mt-4 border border-[#DEDDDC]'
										cols={30}
										minRows={10}
										required
									/>
									<button
										type='submit'
										className='flex gap-3 mt-6 justify-center text-white p-3 w-full rounded-md items-center'
										style={{
											background:
												"linear-gradient(168.79deg, #E1261C 28.64%, #8A0B04 136.7%)",
										}}
										onClick={(e) => handleSubmit(e)}>
										Comment
									</button>
								</form>
							</div>
						</aside>
					</section>
				</section>
			</section>
		</Container>
	);
}
