import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

export default function Contact() {
	const COMPANY_NUMBER = '+55 (61) 99248-2230'
	const COMPANY_EMAIL = ' alon.mota.l@gmail.com'
	const DEFAULT_SUBJECT = 'New Opportunity'
	const DEFAULT_MESSAGE =  encodeURIComponent(`Hey Alon!\nI have a new opportunity for you and I think you would love it!\nCan we set up a meeting to go over the details?\nBest! <YOUR_NAME>`)


	return (
		<section
			id='contact'
			className="flex flex-col flex-grow items-center justify-stretch w-full h-full p-4 text-dark bg-light overflow-hidden"
		>
			<div className='flex flex-col flex-grow min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<div className='mr-2 flex flex-col flex-grow justify-center align-middle'>
					<h2 className="text-3xl mb-6">Send me a message</h2>
					<a 
						href="https://github.com/alonmota"
						target='_blank'
						className='flex flex-row w-full items-center bg-neutral text-light hover:scale-110 py-2 px-8 my-2 rounded-full h-min text-2xl md:text-large'
					>
						<FaGithub  /> <span className='ml-4 text-sm'>Github: alonmota</span>
					</a>
					<a
						href="https://www.linkedin.com/in/alon-mota-lourenco-147966117/"
						target='_blank'
						className='flex flex-row w-full items-center bg-neutral text-light hover:scale-110 py-2 px-8 my-2 rounded-full h-min text-2xl md:text-large'
					>
						<FaLinkedin /> <span className='ml-4 text-sm'>LinkedIn: alon-mota-lourenco-147966117</span>
					</a>
					<a
						href={`//api.whatsapp.com/send?phone=${COMPANY_NUMBER.replace(/[^\w\s]/gi, '')}&text=${DEFAULT_MESSAGE}`}
						target='_blank'
						className='flex flex-row w-full items-center bg-neutral text-light hover:scale-110 py-2 px-8 my-2 rounded-full h-min text-2xl md:text-large'
					>
						<FaWhatsapp /> <span className='ml-4 text-sm'>Whatsapp: +55 (61) 99248-2230</span>
					</a>
					<a
						href={`mailto:${COMPANY_EMAIL}?subject=${DEFAULT_SUBJECT}&body=${DEFAULT_MESSAGE}`}
						target='_blank'
						className='flex flex-row w-full items-center bg-neutral text-light hover:scale-110 py-2 px-8 my-2 rounded-full h-min text-2xl md:text-large'
					>
						<RiMailSendLine /> <span className='ml-4 text-sm'>Email: alon.mota.l@gmail.com</span>
					</a>
				</div>
			</div>
		</section>
	);
}