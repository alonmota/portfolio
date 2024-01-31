import Button from '@/components/button';
import { useUrlHash } from '@/hooks';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { BiCabinet, BiMessageRoundedDetail } from 'react-icons/bi';
import { GoChevronLeft, GoChevronRight, GoHome } from 'react-icons/go';
import { HiSwatch } from 'react-icons/hi2';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdReviews } from 'react-icons/md';

export default function Sidebar({visible}: { visible: boolean }) {
	const [minified, setMinified] = useState(true)
	const hash = useUrlHash()
	
	const routes: { path: string, name: string, icon: ReactElement }[] = [
		{ path: 'home', name: 'Home', icon: <GoHome /> },
		{ path: 'about', name: 'About', icon: <IoPersonCircleOutline /> },
		{ path: 'experience', name: 'Experiences', icon: <BiCabinet /> },
		{ path: 'projects', name: 'Projects', icon: <HiSwatch /> },
		{ path: 'reviews', name: 'Reviews', icon: <MdReviews /> },
		{ path: 'contact', name: 'Contact', icon: <BiMessageRoundedDetail /> },
	]

	return (
		<div
			id="sidebar"
			className={`
					z-10 relative h-full bg-dark max-w-fit
					md:relative md:flex
					transition-all duration-800 ${visible ? 'w-[50vw]' : 'w-0'} 
					ease-linear
				`}
		>
			<nav className='overflow-hidden mx-1 flex-grow h-full'>
				<ul className="flex flex-col flex-grow h-full justify-start overflow-hidden">
					{
						routes.map(route => <li
							className='mb-2'
							key={route.path}
						>
							<Link
								title={route.name}
								className={`flex flex-row whitespace-nowrap items-center justify-start hover:underline hover:bg-neutral group rounded-full h-min`}
								href={'#'+route.path}
							>
								<span className={
									`p-2 text-2xl md:text-large ${hash === route.path ? 'scale-125 text-highlight' : ''}`
								}>
									{route.icon}
								</span>
								<span className={`
									overflow-hidden max-w-min transition-all duration-1000
									${minified ? 'w-0' : 'w-[50vw]'}
								`}>
									<span className={`
										px-2 text-large align-middle
										${minified ? 'ml-0' : '-ml-2'}
										${hash === route.path ? 'underline' : ''}
									`}>
										{route.name}
									</span>
								</span>
											
							</Link>
						</li>
						)
					}
					<li className='flex flex-grow'></li>
					<li className='flex flex-row w-full justify-end'>
						<Button 
							className={`flex flex-row whitespace-nowrap align-middle justify-end hover:underline hover:bg-neutral group rounded-full`}
							title='Expand Sidebar' onClick={() => setMinified(!minified)}>
							<div className='flex flex-col justify-center p-2 text-large'>{
								minified ? <GoChevronRight /> : <GoChevronLeft />
							}</div>
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);

	function isPathActive(path: string): string {
		return `link ${hash === path ? 'font-bold scale-125' : ''}`
	}
}