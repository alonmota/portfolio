'use client'
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['carousel'] = {
	'root': {
		'base': 'relative h-full w-full',
		'leftControl': 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
		'rightControl': 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none'
	},
	'item': {
		'base': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-full',
		'wrapper': {
			'off': 'w-full flex-shrink-0 transform cursor-default snap-center basis-1/3 mx-4',
			'on': 'w-full flex-shrink-0 transform cursor-grab snap-center basis-1/3 mx-4'
		}
	},
	'indicators': {
		'active': {
			'off': 'bg-gray-600 hover:bg-gray-100 h-2 w-2',
			'on': 'bg-white h-2 w-2'
		},
		'wrapper': 'absolute -bottom-5 left-1/2 flex -translate-x-1/2 space-x-3'
	},
	'control': {
		'base': 'invisible',
		'icon': 'invisible'
	},
};


export default function Reviews() {
	const reviews = [
		{
			person: 'Buck Mayzes',
			linkedIn: 'https://www.linkedin.com/in/buckamayzing/',
			project: 'Liblab',
			review: `Alon delivers consistent, quality work, and has the right mindset for this type of work. If you're looking for an intelligent, skilled, and flexible engineer, you're in the right place.`
		},
		{
			person: 'Jim Bennett',
			linkedIn: 'https://www.linkedin.com/in/jimbobbennett/',
			project: 'Liblab',
			review: `I really enjoyed working with Alon. He clearly understood the need for great developer experience and was able to build out the tools at liblab with the customer in mind. He dived right in to some challenging projects and was able to deliver a high quality result.`
		},
		{
			person: 'Lev Izraelit',
			linkedIn: 'https://www.linkedin.com/in/lev-izraelit/',
			project: 'Liblab',
			review: `I was fortunate to have Alon in my team at LibLab. From leveraging AI to developing command line applications, Alon was reliable and consistent in his work. He was clear at communicating his technical knowledge to others, and responsive to changing product demands. I hope to work with Alon again in the future, and I’m confident that he would make a great addition to any team.`
		},
		{
			person: 'José Carlos Correa',
			linkedIn: 'https://www.linkedin.com/in/jossdz/',
			project: 'Team Liquid',
			review: `Alon is an exceptional professional with a wealth of knowledge and a desire to help his team thrive. He's skilled in configurations and debugging, tackles complex tasks with ease, and excels at working independently. His contributions have been invaluable, and he's committed to making meaningful impacts on the team's success. Overall, he's an outstanding candidate for any team looking to drive growth and achieve its goals.`
		}
	]

	return (
		<section
			id='reviews'
			className="flex flex-row items-stretch justify-stretch w-full h-full p-8 text-light bg-dark"
		>
			<div className='flex flex-col flex-grow h-full md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl mb-6">What my colleagues say about me</h2>
				<div
					className="flex flex-row h-full w-full p-6"
				>
					<Carousel theme={customTheme} slide={false}>
						{reviews.map((review, index) => (
							<div
								key={index}
								className="flex flex-col bg-light text-dark h-full max-w-full rounded-lg p-2 group"
							>
								<div
									className="flex flex-col h-full max-w-full legend w-full justify-start items-center"
								>
									<a
										href={review.linkedIn}
										target='_blank'
										title='Linkedin Profile'
										className='font-bold hover:underline'
									>{review.person}</a>
									<span className='text-sm'>{review.project}</span>
									<span
										className='h-full text-sm text-gray-500 italic border-l-2flex flex-row items-center mx-4 my-1 rounded-lg overflow-auto'
									>“{review.review}”</span>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</section>
	)
}

