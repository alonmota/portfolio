import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Projects() {

	return (
		<section
			id='projects'
			className="flex flex-col items-center justify-stretch w-full h-full p-4 text-dark-1 bg-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">Projects</h2>
				<p className='text-center'>SOMNUN Landing page</p>
			</div>
		</section>
	)
}
