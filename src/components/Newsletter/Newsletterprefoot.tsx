import React from "react";
import { Icon } from "@iconify/react";
import useClipboard from "react-use-clipboard";
import { Whatsapp, Link } from "iconsax-react";
import { Popover, Text } from "@mantine/core";
import {
	FacebookShareButton,
	WhatsappShareButton,
	TwitterShareButton,
	LinkedinShareButton,
} from "react-share";

function Newsletterprefoot() {
	const [isCopied, setCopied] = useClipboard("Link Copied");
	return (
		<div className='bg-[#C81107] grid grid-flow-row py-12 text-white justify-center items-center text-center w-full'>
			<div>
				<h2 className='lg:text-3xl md:text-2xl font-semibold pb-6'>
					Wishing you the best of luck!
				</h2>
				<hr className='border-2 lg:w-36 mx-auto' />
			</div>

			<div className='flex items-center gap-3 justify-center pt-8'>
				<Icon
					icon='material-symbols:share'
					color='white'
					width='20'
				/>

				<FacebookShareButton
					url={
						"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
					}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='27'
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
						size='27'
						color='#ffffff'
						variant='Bold'
					/>
				</WhatsappShareButton>

				<LinkedinShareButton
					url={
						"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
					}>
					<Icon
						icon='icon-park-solid:instagram-one'
						color='white'
						width='27'
					/>
				</LinkedinShareButton>

				<TwitterShareButton
					url={
						"https://afex.ats.com/apply/frontend/56473888263783/enquiries?source=careersite"
					}>
					<Icon
						icon='bytesize:twitter'
						color='white'
						width='27'
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
							sx={{ textAlign: "center", color: "black", cursor: "pointer" }}>
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
		</div>
	);
}

export default Newsletterprefoot;
