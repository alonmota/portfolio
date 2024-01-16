'use client'

import Sidebar from '@/components/sidebar';

import { useAppSelector } from '@/app/(core)/hooks';
import Header from '@/components/header';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const sidebarVisible =  useAppSelector((state) => state.common.sidebarVisible)
	
	return (
		<main className="flex h-screen w-full flex-col items-start bg-dark-1 text-light font-sans">
			<Header></Header>

			<section className='flex flex-row w-full h-full flex-grow relative'>
				<Sidebar visible={sidebarVisible}></Sidebar>
				
				<fieldset 
					id='content'
					className={`flex flex-col w-full`}
				>
					{children}
				</fieldset>

			</section>
		</main>
	);
}
