import Image from 'next/image'
import LinkToContacts from '@/components/ui/link-to-contact'

export default function AboutUs() {
	return (
		<div className="flex flex-col items-center p-4 pb-8">
			<div
				className="flex h-96 w-full items-center justify-center bg-center bg-cover"
				style={{ backgroundImage: "url('/functionality.jpg')" }}
			>
				<h1 className="font-bold text-5xl text-white drop-shadow-lg">
					About Us
				</h1>
			</div>

			{/* Team Section */}
			<h2 className="mt-8 mb-4 font-bold text-3xl">Meet Our Team</h2>
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
				{/* <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col items-center">
          <Image
            width={500}
            height={500}
            src="/Xiangyu.jpg"
            alt="Team Member 1"
            className="rounded-full w-48 h-48 object-cover"
          // style={{ objectPosition: "70% 50%" }} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
          />
          <h3 className="text-xl font-bold mt-4">Xiangyu Hou</h3>
          <p className="text-lg text-gray-500">Lead Designer & Developer</p>
        </div> */}
			</div>

			{/* Mission Section */}
			<h2 className="mt-8 mb-4 font-bold text-3xl">Our Mission</h2>
			<p className="mb-6 indent-8 text-gray-500 text-lg">
				We are a team of passionate college graduates specializing in
				software development, with a particular focus on building
				high-quality websites. Our team comprises skilled professionals
				with diverse backgrounds in computer science, design, and
				project management, allowing us to tackle complex projects from
				multiple angles.
			</p>

			{/* Values Section */}
			<h2 className="mt-8 mb-4 font-bold text-3xl">Our Values</h2>
			<div className="flex flex-wrap justify-center">
				<div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
					<i className="fas fa-lightbulb fa-2x mb-4"></i>
					<h3 className="font-bold text-xl">Innovation</h3>
					<p className="text-gray-500 text-lg">
						We value innovation and creativity in our work.
					</p>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
					<i className="fas fa-handshake fa-2x mb-4"></i>
					<h3 className="font-bold text-xl">Customer Satisfaction</h3>
					<p className="text-gray-500 text-lg">
						We prioritize customer satisfaction in all our projects.
					</p>
				</div>
			</div>

			{/* Call-to-Action Section */}
			<div className="mt-8 mb-4">
				<LinkToContacts />
			</div>
		</div>
	)
}
