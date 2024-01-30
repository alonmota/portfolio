
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
			className="flex flex-col items-center justify-stretch w-full h-full p-4 bg-dark-gradient text-light"
		>
			<div className='flex flex-col min-w-fit md:w-fit justify-center items-center mb-2 md:mb-0'>
				<h2 className="text-3xl">What <a href='https://www.linkedin.com/in/alon-mota-lourenco-147966117/details/recommendations/' title='Linkedin reviews'>my colleagues say</a> about me</h2>
				{
					reviews.map((review, index) => (<div key={index}>
						<span>{review.person}</span>
						<span>{review.linkedIn}</span>
						<span>{review.project}</span>
						<span>{review.review}</span>
					</div>))
				}
			</div>
		</section>
	)
}
