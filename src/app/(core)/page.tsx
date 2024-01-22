'use client'
import { Home, About, Experience, Projects, Reviews, Contact } from '@/components';
import { useEffect, useRef, useState } from 'react';

export default function App() {
	const content = useRef<HTMLDivElement>(null)
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const currentContent = content.current;
		const handleScroll = () => {
			
			const scrollPosition = currentContent?.scrollTop || 0;
			const sections = content.current?.querySelectorAll('section');
			console.log(sections)
			sections?.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (
					scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
				) {
					setActiveSection(section.id);
				}
			});
		};

		currentContent?.addEventListener('scroll', handleScroll);
		return () => {
			currentContent?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		window.location.hash = activeSection;
	}, [activeSection]);

	return (
		<div
			id='content'
			ref={content}
			className='max-h-screen snap-y snap-mandatory overflow-y-scroll'
		>
			<div className='snap-start h-full w-full'>
				<Home></Home>
			</div>
			<div className='snap-start h-full w-full'>
				<About></About>
			</div>

			<div className='snap-start h-full w-full'>
				<Experience></Experience>
			</div>

			<div className='snap-start h-full w-full'>
				<Projects></Projects>
			</div>

			<div className='snap-start h-full w-full'>
				<Reviews></Reviews>
			</div>

			<div className='snap-start h-full w-full'>
				<Contact></Contact>
			</div>

		</div>
			
	);
}

