import Link from 'next/link';
import { APP_NAME } from '@/constants/values';
import { HiMenu } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp  } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import { useAppDispatch } from '@/app/(core)/hooks';
import { toggleSidebarVisibility } from '@/state/common/common-slice';
import Button from '@/components/button'


export default function Header() {
	const COMPANY_NUMBER = '+55 (61) 99248-2230'
	const COMPANY_EMAIL = ' alon.mota.l@gmail.com'
	const DEFAULT_SUBJECT = 'New Opportunity'
	const DEFAULT_MESSAGE =  encodeURIComponent(`Hey Alon!\nI have a new opportunity for you and I think you would love it!\nCan we set up a meeting to go over the details?\nBest! <YOUR_NAME>`)

	const dispatch = useAppDispatch();

	function _toggleSidebarVisibility() {
		dispatch(toggleSidebarVisibility())
	}

	return (
		<header className="flex flex-row w-full py-1 bg-dark-1 text-light justify-between">
			<div className='flex flex-row flex-grow'>
				<Button onClick={_toggleSidebarVisibility} className='hover:bg-neutral mx-1 p-2 rounded-full text-large h-min'><HiMenu /></Button>
				<Link
					title={'Home'}
					className="flex justify-start font-sans text-lg font-semibold self-center ml-2 transition click:scale-125"
					href={'/'}
				>
					<h1>
						{APP_NAME}
					</h1>
				</Link>
			</div>
			<span className='mr-2 flex flex-row justify-center align-middle'>
				<a href="https://github.com/alonmota" target='_blank' className='hover:bg-neutral p-2 rounded-full text-large h-min'>
					<FaGithub  />
				</a>
				<a href="https://www.linkedin.com/in/alon-mota-lourenco-147966117/" target='_blank' className='hover:bg-neutral p-2 rounded-full text-large h-min'>
					<FaLinkedin />
				</a>
				<a href={`//api.whatsapp.com/send?phone=${COMPANY_NUMBER.replace(/[^\w\s]/gi, '')}&text=${DEFAULT_MESSAGE}`} target='_blank' className='hover:bg-neutral p-2 rounded-full text-large h-min'>
					<FaWhatsapp />
				</a>
				<a href={`mailto:${COMPANY_EMAIL}?subject=${DEFAULT_SUBJECT}&body=${DEFAULT_MESSAGE}`} target='_blank' className='hover:bg-neutral p-2 rounded-full text-large h-min'>
					<RiMailSendLine />
				</a>
			</span>
		</header>
	);
}