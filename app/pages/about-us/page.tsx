import LinkToContacts from "@/components/ui/link-to-contact";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center pb-8 p-4 ">
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/functionality.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-bold mt-8 mb-4">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col items-center">
          <Image
            width={500}
            height={500}
            src="/patrickmacdonald.jpg"
            alt="Team Member 1"
            className="rounded-full w-48 h-48 object-cover"
            style={{ objectPosition: "70% 50%" }} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
          />
          <h3 className="text-xl font-bold mt-4">Patrick MacDonald</h3>
          <p className="text-lg text-gray-500">Founder & CEO & Developer</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col items-center">
          <Image
            width={500}
            height={500}
            src="/wagner.jpeg"
            alt="Team Member 1"
            className="rounded-full w-48 h-48 object-cover"
          // style={{ objectPosition: "70% 50%" }} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
          />
          <h3 className="text-xl font-bold mt-4">Wagner Pires Ferreira </h3>
          <p className="text-lg text-gray-500">Founder & CTO & Developer</p>
        </div>
         <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col items-center">
          <Image
            width={500}
            height={500}
            src="/Xiangyu.jpeg"
            alt="Team Member 1"
            className="rounded-full w-48 h-48 object-cover"
          // style={{ objectPosition: "70% 50%" }} // Adjust the first value (horizontal) to move left/right, second (vertical) for up/down
          />
          <h3 className="text-xl font-bold mt-4">Xiangyu Hou</h3>
          <p className="text-lg text-gray-500">Lead Designer & Developer</p>
        </div>
      </div>

      {/* Mission Section */}
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-500 mb-6 indent-8">
        We are a team of passionate college graduates specializing in software development,
        with a particular focus on building high-quality websites. Our team comprises skilled
        professionals with diverse backgrounds in computer science, design, and project management,
        allowing us to tackle complex projects from multiple angles.
      </p>

      {/* Values Section */}
      <h2 className="text-3xl font-bold mt-8 mb-4">Our Values</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-lightbulb fa-2x mb-4"></i>
          <h3 className="text-xl font-bold">Innovation</h3>
          <p className="text-lg text-gray-500">We value innovation and creativity in our work.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-handshake fa-2x mb-4"></i>
          <h3 className="text-xl font-bold">Customer Satisfaction</h3>
          <p className="text-lg text-gray-500">We prioritize customer satisfaction in all our projects.</p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-8 mb-4">
        <LinkToContacts />
      </div>
    </div>
  );
}