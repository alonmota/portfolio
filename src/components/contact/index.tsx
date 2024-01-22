import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Contact() {

	return (
		<section
			id='contact'
			className="flex flex-col items-center justify-stretch w-full h-full p-4 text-dark-1 bg-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">Send me a message</h2>
				<p className='text-center'>SOMNUN Landing page</p>
			</div>
		</section>
	)
}
