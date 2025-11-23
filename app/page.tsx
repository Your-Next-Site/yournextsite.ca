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
		<div className="flex min-h-screen max-w-[100vw] flex-col items-center justify-items-center gap-16 p-8 pb-10">
			<Carousel
				className="w-[100vw] md:w-[70vw]"
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
			<div className="max-w-4xl px-4 text-center">
				<h1 className="mb-4 font-bold text-3xl">
					Trust us to help build your perfect site
				</h1>
				<p className="mb-6 text-gray-500 text-lg">
					We specialize in creating custom websites that perfectly
					match your vision and business needs. With experience and a
					passionate team of developers, we deliver websites that
					stand out.
				</p>
				<p className="text-gray-500 text-lg">
					We specialize in creating perfect websites for small
					businesses. Let&apos;s work together to build your ideal
					online presence.
				</p>
			</div>
			<LinkToContacts />
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
			className={`relative flex h-96 w-max-10/12 flex-col overflow-hidden rounded-sm p-4 text-white shadow-lg`}
		>
			<Image
				alt={`${title} illustration`}
				className="-z-10 absolute inset-0 h-full w-full object-cover"
				height={1200}
				src={`/${imageSrc}`}
				width={1200}
			/>
			<h1 className="mt-4 font-bold text-2xl">{title}</h1>
			<span className="mt-auto mb-8 rounded-sm bg-black/20 p-4 backdrop-blur-sm">
				{text}
			</span>
		</div>
	)
}
