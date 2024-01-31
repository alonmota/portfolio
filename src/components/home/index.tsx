import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
	function scrollToContacts() {
		const contactElement = document.getElementById('contact');
		const content = document.getElementById('content');
		content?.scroll({ top: contactElement?.offsetTop || 0, behavior:'smooth' });
	};
	return (
		<section
			id='home'
			className="flex flex-col items-center justify-stretch w-full h-full p-4 bg-dark-gradient text-light"
		>
			<div className='flex flex-row w-full flex-wrap h-full justify-around'>
				<div className='flex flex-grow min-w-fit w-full md:w-fit justify-center items-center mb-2 md:mb-0'>
					
					<div 
						className='rounded-full overflow-hidden'
						style={{width: 'min(70vw, 52vh)', aspectRatio: 1 / 1, position: 'relative'}} 
					>
						<Image
							alt='Profile Picture'
							src='/profile-picture.png'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
				<div className='flex flex-col flex-grow items-center justify-center min-w-fit'>
					<h2 className="text-2xl mb:text-4xl text-center">Hi, I&apos;m  <b>Alon Mota</b> </h2>
					<h3 className="text-large mb-6">Fullstack Developer</h3>
					<p className='text-center mb-6'>I enjoy building great web applications.</p>
					<Button 
						className='group flex flex-row whitespace-nowrap items-center justify-between px-4 py-2 m-2 bg-light text-dark rounded-full'
						onClick={scrollToContacts}
					>
						<span>Send me a message</span>
						<span className='group-hover:translate-x-1 ml-2 text-medium pt-1'><FaArrowRight /></span>
						
					</Button>
				</div>
			</div>
		</section>
	)
}
