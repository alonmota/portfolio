import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Experience() {

	return (
		<section
			id='experience'
			className="flex flex-col items-center justify-stretch w-full h-full p-4 bg-dark-gradient text-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">Experience</h2>
				<p className='text-center'>I worked at CGEE.</p>
			</div>
		</section>
	)
}
