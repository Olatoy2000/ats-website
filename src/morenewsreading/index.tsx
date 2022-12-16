import AfexNewsUpdate from "./assets/afexnewsupdate.png";
import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import { Divider } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Placeholder from "./assets/placeholder.png";
import axios from "axios";
import Link from "next/link";
import CryptoJS from "crypto-js";


var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
	return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
		CryptoJS.enc.Utf8
	)
		;
};

export default function READ_NEWS_ARTICLE({ routeId }: any) {
	const scrollRefs = useRef<HTMLDivElement>(null);

	const moveRight = () => {
		const width = scrollRefs.current!.clientWidth;
		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft + width;
	};

	const moveLeft = () => {
		const width = scrollRefs.current!.clientWidth;
		scrollRefs.current!.scrollLeft = scrollRefs.current!.scrollLeft - width;
	};

	const [newsDetail, setNewsDetail] = useState<any>(null);
	const fetchNewsDetails = () => {
		let config = {
			method: "get",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news`,
			headers: {
				"HASH-KEY":
					"091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
				"REQUEST-TS": "1669397556",
				"API-KEY":
					"7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
			},
		};
		axios(config)
			.then((response) => {
				setNewsDetail(response.data.data.results);
			})
			.catch(console.log);
	};

	useEffect(() => {
		fetchNewsDetails();
	}, []);

	return (
		<Container>
			<section className='flex flex-col gap-2'>
				<article className='flex justify-between items-center'>
					<h2 className='text-bold-maastrichtBlue font-bold text-[1.5rem] leading-8'>
						More News Posts
					</h2>
					<div className='flex gap-3'>
						<ArrowCircleLeft2
							size='32'
							color='#000'
							onClick={moveLeft}
							className='cursor-pointer'
						/>
						<ArrowCircleRight2
							size='32'
							color='#000'
							onClick={moveRight}
							className='cursor-pointer'
						/>
					</div>
				</article>
				<Divider />
				<article
					id='slider'
					ref={scrollRefs}
					className='mb-6 overflow-x-hidden scroll-smooth gap-8 flex'>
					{newsDetail?.map((item: any, idx: number) =>
						item.id !== +routeId ? (
							<Link href={`/news/${decrypt(item.id)}`}>
								<article
									className={`grid gap-4 py-4 duration-1000 grid-cols-[150px_150px]`}
									key={idx}>
									<img
										src={decrypt(item.image)}
										alt=''
										className='w-full'
									/>
									<div className='flex justify-start items-end gap-2 flex-col'>
										<h5 className='text-[#020202] self-start text-[14px] font-bold leading-4'>
											{decrypt(item.title)}
										</h5>
										<p className='flex text-[#020202] leading-4 font-normal text-[0.75rem]'>
											{decrypt(item.intro)
												.split("")
												.map((item: any, id: number) => id < 100 && item)}
										</p>
									</div>
								</article>
							</Link>
						) : null
					)}
				</article>
			</section>
		</Container>
	);
}
