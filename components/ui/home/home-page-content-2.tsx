import ContentContainerLight from '../containers/content-container-light'

const services = [
	{
		title: 'Design',
		description:
			'We craft beautiful, user-centric designs that tell your brand story and engage your audience effectively.',
	},
	{
		title: 'Development',
		description:
			'Our code is clean, efficient, and scalable. We build robust solutions using the latest technologies.',
	},
	{
		title: 'SEO & Analytics',
		description:
			'Get found online with our built-in SEO best practices and track your growth with integrated analytics.',
	},
]
export default function HomePageContent2() {
	return (
		<div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{services.map((service, i) => (
				<ContentContainerLight key={i}>
					<h3 className="mb-3 font-bold text-white text-xl">
						{service.title}
					</h3>
					<p className="text-gray-300">{service.description}</p>
				</ContentContainerLight>
			))}
		</div>
	)
}
