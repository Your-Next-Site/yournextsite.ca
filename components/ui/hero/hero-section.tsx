import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../carousel'

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
export default function HeroSection() {
	return (
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
			className={`relative flex h-96 w-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-white shadow-lg`}
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
			<div className="z-10 mt-auto flex h-1/2 flex-col justify-center bg-slate-900 p-6">
				<h1 className="mb-2 font-bold text-2xl">{title}</h1>
				<p className="text-gray-300">{text}</p>
			</div>
		</div>
	)
}
