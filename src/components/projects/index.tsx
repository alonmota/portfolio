'use client'
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';

interface IProject {
	name: string;
	url: string;
	description: string;
}

const customTheme: CustomFlowbiteTheme['carousel'] = {
	'root': {
		'base': 'relative h-full w-full',
		'leftControl': 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
		'rightControl': 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none'
	},
	'item': {
		'base': 'absolute top-0 left-0 block w-full',
		'wrapper': {
			'off': 'w-full flex-shrink-0 transform cursor-default snap-center',
			'on': 'w-full flex-shrink-0 transform cursor-grab snap-center'
		}
	},
	'indicators': {
		'active': {
			'off': 'bg-gray-800/50 hover:bg-gray-800',
			'on': 'bg-gray-800'
		},
	},
	'control': {
		'base': 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
		'icon': 'h-4 w-4 text-light sm:h-6 sm:w-6  group-focus:scale-110'
	},
};


export default function Projects() {
	const projects: IProject[] = [
		{
			name: 'AI QA bot',
			url: 'https://www.npmjs.com/package/@alonmota/ai-qa-bot',
			description: 'CLI for answering questions regarding local documents using AI'
		},
		{
			name: 'Typescript API Template',
			url: 'https://github.com/alonmota/typescript-api-template',
			description: 'A Nest.js boilerplate containing most of the support needed for large scale applications'
		},
		{
			name: 'SOMNUM',
			url: 'https://somnun.netlify.app/',
			description: 'Landing page for an anesthesiologist company'
		}
	]

	return (
		<section
			id='projects'
			className="flex flex-row items-stretch justify-stretch w-full h-full p-8 text-dark bg-highlight"
		>
			<div className='flex flex-col flex-grow h-full md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl mb-6">Here are some of my projects</h2>
				<div
					className="flex flex-row h-full w-full p-6"
				>
					<Carousel theme={customTheme} slide={false}>
						{projects.map((project, index) => (
							<div
								key={index}
								className="flex flex-col bg-light text-dark h-full max-w-full rounded-lg p-6 group"
							>
								<a
									href={project.url}
									target="_blank"
									title={project.name}
									className="flex flex-col h-full max-w-full legend w-full justify-start items-center"
								>
									<span
										className="text-large rig font-bold hover:underline overflow-ellipsis mb-2 group-hover:underline"
										title={project.name}
									>
										{project.name}
									</span>
									<span className="font-light" title={project.description}>
										{project.description}
									</span>
								</a>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</section>
	)
}
