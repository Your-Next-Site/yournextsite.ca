import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ContentContainerDark from '../containers/content-container-dark'

const projects = [
	{
		title: 'Pardons Are Us',
		description:
			'A dedicated platform helping Canadians navigate the record suspension process effortlessly. Features a complete guided experience for both professional help and DIY paths.',
		image: '/pardonsareus.png',
		url: 'https://pardonsareus.ca',
		layout: 'left',
	},
	{
		title: 'Landscape Friend',
		description:
			'Comprehensive lawn care management software built for landscaping professionals. Features client management, route optimization, and secure Stripe billing integration.',
		image: '/landscapefriend.png',
		url: 'https://landscapefriend.com',
		layout: 'right',
	},
]

export default function ProjectsSection() {
	return (
		<div className="w-full max-w-6xl py-12">
			<div className="mb-12 text-center">
				<h2 className="mb-4 font-bold text-3xl text-white md:text-4xl">
					Our Recent Work
				</h2>
				<p className="mx-auto max-w-2xl text-gray-300 text-lg">
					Take a look at some of the custom solutions we&apos;ve built
					to help businesses succeed online.
				</p>
			</div>

			<div className="flex flex-col items-center gap-16">
				{projects.map((project, i) => (
					<ContentContainerDark key={i}>
						<div
							className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
								project.layout === 'right'
									? 'lg:flex-row-reverse'
									: ''
							}`}
						>
							<div className="flex-1 overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
								<div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
									<Image
										alt={`${project.title} screenshot`}
										className="object-cover object-top transition-transform duration-500 hover:scale-105"
										fill
										src={project.image}
									/>
								</div>
							</div>

							<div className="flex-1 space-y-4 p-2 text-left lg:p-6">
								<h3 className="font-bold text-2xl text-white">
									{project.title}
								</h3>
								<p className="text-gray-300 text-lg leading-relaxed">
									{project.description}
								</p>
								<div className="pt-4">
									<Link
										className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
										href={project.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Visit Project
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					</ContentContainerDark>
				))}
			</div>
		</div>
	)
}
