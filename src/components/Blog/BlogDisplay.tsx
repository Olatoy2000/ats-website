import { BlogSample, decrypt } from "./library";
import moment from "moment";
import Link from "next/link";

export function BlogDisplay(props: BlogSample["data"]["results"][number]) {
	return (
		<div className='flex flex-col pb-4 shadow rounded-md'>
			<img
				src={decrypt(props.image)}
				className='lg:w-96 lg:h-72 md:w-96 md:h-72 w-full h-72 object-cover'
			/>
			<Link href={`/blogs/${decrypt(props.id)}`}>
				<p className='text-[#2D3748] text-xl font-bold p-4'>
					{decrypt(props.title)}
				</p>
			</Link>
			<p className='text-[#718096] flex-1 text-sm px-4'>
				{decrypt(props.intro + "...")}
			</p>
			<div className='flex gap-3 pt-10 items-center px-4'>
				<img
					src={`${process.env.NEXT_PUBLIC_BASE_URL}${decrypt(
						props.author_image
					)}`}
					className='h-8'
				/>
				<div className='font-sans flex-1'>
					<p className='text-[#C81107] text-xs font-semibold'>
						{decrypt(props.author_fullname)}
					</p>
					<span className='flex gap-3 justify-between items-center'>
						<p className='text-[#6F6F70] font-semibold text-[10px]'>
							<span>
								{moment(decrypt(props.created_at)).format("ll").split(",")[0]}
							</span>{" "}
							&nbsp;&nbsp; {decrypt(props.min_read)}
						</p>
						<Link href={`/blogs/${decrypt(props.id)}`}>
							<span className='text-[15px] text-[#2D3748] font-bold md:-mt-1'>
								Read more
							</span>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
