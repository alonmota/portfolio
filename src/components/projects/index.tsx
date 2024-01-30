import Image from 'next/image';
import Button from '../button';
import { FaArrowRight } from 'react-icons/fa';

export default function Projects() {

	const projects = [
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
			className="flex flex-col items-center justify-stretch w-full h-full p-4 text-dark-1 bg-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">Projects</h2>
				<div>
					Here are some of the projects I worked with
					{
						projects.map((project, index) => (<div key={index}>
							<span>{project.name}</span>
							<span>{project.url}</span>
							<span>{project.description}</span>
						</div>))
					}
				</div>

			</div>
		</section>
	)
}
