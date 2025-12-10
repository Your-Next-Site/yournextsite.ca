import Image from 'next/image'
import ContentContainerDark from '../containers/content-container-dark'

export default function TeamSection() {
	return (
		<ContentContainerDark>
			<h1 className="mb-3 font-bold text-white text-xl">Meet Our Team</h1>

			<div className="flex flex-wrap justify-center">
				<div className="flex w-full flex-col items-center p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
					<Image
						alt="Team Member 1"
						className="h-48 w-48 rounded-full object-cover"
						height={500}
						src="/patrickmacdonald.jpg"
						style={{ objectPosition: '70% 50%' }}
						width={500} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
					/>
					<h3 className="mt-4 font-bold text-xl">
						Patrick MacDonald
					</h3>
					<p className="text-gray-500 text-lg">
						Founder & CEO & Developer
					</p>
				</div>
				<div className="flex w-full flex-col items-center p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
					<Image
						alt="Team Member 1"
						className="h-48 w-48 rounded-full object-cover"
						height={500}
						src="/wagner.jpeg"
						width={500}
						// style={{ objectPosition: "70% 50%" }} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
					/>
					<h3 className="mt-4 font-bold text-xl">
						Wagner Pires Ferreira{' '}
					</h3>
					<p className="text-gray-500 text-lg">
						Founder & CTO & Developer
					</p>
				</div>
			</div>
		</ContentContainerDark>
	)
}
