import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {

	return (
		<section
			id='about'
			className="flex flex-row flex-wrap items-center justify-center w-full h-full p-4 bg-neutral text-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">About Me</h2>
				<p className='text-center'>I&apos;m a passionate Full Stack Developer, with over 7 years of experience.</p>
				<p className='text-center'>I take pride in my problem solving skills and my ability to communicate effectively.</p>
			</div>
			<div className='flex flex-col flex-grow items-center justify-center min-w-fit'>
				<h2 className="text-3xl">Stack</h2>
				<p className='text-center'>Node.js, Nest.js, Angular+, React</p>
			</div>
		</section>
	)
}
