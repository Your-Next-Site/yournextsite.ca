import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import LinkToContacts from '@/components/ui/link-to-contact'

export default function Home() {
	const cards = [
		{
			title: 'Functionality',
			text: 'Great functionality is our top priority. We ensure your site works flawlessly across all devices and provides an exceptional user experience.',
			imageSrc: 'functionality.jpg',
		},
		{
			title: 'Intuitiveness',
			text: "Your website will be easy to navigate and understand. Users will find what they're looking for quickly and effortlessly.",
			imageSrc: 'intuitiveness.jpg',
		},
		{
			title: 'Beauty',
			text: "We create visually stunning designs that capture your brand's essence while maintaining clean and modern aesthetics.",
			imageSrc: 'beauty.jpg',
		},
	]

	return (
		<div className="flex min-h-screen w-full flex-col items-center gap-16 p-8 pb-10 bg-[var(--background)] text-[var(--foreground)]">
			<Carousel
				className="w-full max-w-5xl"
				opts={{
					align: 'start',
					loop: true,
				}}
			>
				<CarouselContent>
					{cards?.map((card, index) => (
						<CarouselItem key={index}>
							<Card
								imageSrc={card.imageSrc}
								text={card.text}
								title={card.title}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="max-w-4xl w-full rounded-xl bg-slate-900 p-8 text-center shadow-xl border border-slate-800">
				<h1 className="mb-4 font-bold text-3xl text-white">
					Trust us to help build your perfect site
				</h1>
				<p className="mb-6 text-gray-300 text-lg">
					We specialize in creating custom websites that perfectly
					match your vision and business needs. With experience and a
					passionate team of developers, we deliver websites that
					stand out.
				</p>
				<p className="text-gray-300 text-lg">
					We specialize in creating perfect websites for small
					businesses. Let&apos;s work together to build your ideal
					online presence.
				</p>
			</div>

			<div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
				{[
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
				].map((service, i) => (
					<div
						className="rounded-xl bg-slate-800 p-6 shadow-lg border border-slate-700"
						key={i}
					>
						<h3 className="mb-3 text-xl font-bold text-white">
							{service.title}
						</h3>
						<p className="text-gray-300">{service.description}</p>
					</div>
				))}
			</div>

			<div className="w-full max-w-md rounded-xl bg-slate-900 p-8 shadow-2xl border border-slate-800">
				<LinkToContacts />
			</div>
		</div>
	)
}

function Card({
	title,
	text,
	imageSrc,
}: {
	title: string
	text: string
	imageSrc: string
}) {
	return (
		<div
			className={`relative flex h-96 w-full flex-col overflow-hidden rounded-xl bg-slate-900 text-white shadow-lg border border-slate-800`}
		>
			<div className="absolute inset-0 h-1/2 w-full">
				<Image
					alt={`${title} illustration`}
					className="h-full w-full object-cover"
					height={600}
					src={`/${imageSrc}`}
					width={600}
				/>
			</div>
			<div className="z-10 mt-auto flex flex-col p-6 bg-slate-900 h-1/2 justify-center">
				<h1 className="mb-2 font-bold text-2xl">{title}</h1>
				<p className="text-gray-300">{text}</p>
			</div>
		</div>
	)
}
