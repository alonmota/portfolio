import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {

	return (
		<section
			id='home'
			className="flex flex-col items-center justify-stretch w-full h-full p-4 bg-dark-gradient text-light"
		>
			<div className='flex flex-row w-full flex-wrap h-full'>
				<div className='flex min-w-fit w-full md:w-fit justify-center items-center mb-8 md:mb-0'>
					<Image alt='Profile Picture' src='/profile-picture.png' className='rounded-full' 
						width={300}
						layout='fixed'
						height={300} />
				</div>
				<div className='flex flex-col flex-grow items-center justify-center min-w-fit'>
					<h2 className="text-3xl">Hi, I&apos;m  <b>Alon Mota</b> </h2>
					<h3 className="text-large mb-6">Fullstack Developer</h3>
					<p>I enjoy building great web applications.</p>
					<Button className='group flex flex-row whitespace-nowrap items-center justify-between px-4 py-2 m-2 bg-light text-dark-1 rounded-full'>
						<span>Send me a message</span>
						<span className='group-hover:translate-x-1 ml-2 text-medium pt-1'><FaArrowRight /></span>
						
					</Button>
				</div>
			</div>
		</section>
	)
}
