import Image from "next/image";
import { title } from "process";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  let cards = [
    {
      title: "Functionality",
      text: "Great functionality is our top priority. We ensure your site works flawlessly across all devices and provides an exceptional user experience.",
      imageSrc: "functionality.jpg",
    },
    {
      title: "Intuitiveness",
      text: "Your website will be easy to navigate and understand. Users will find what they're looking for quickly and effortlessly.",
      imageSrc: "intuitiveness.jpg",
    },
    {
      title: "Beauty",
      text: "We create visually stunning designs that capture your brand's essence while maintaining clean and modern aesthetics.",
      imageSrc: "beauty.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen max-w-[100vw] pb-10 gap-16">

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[100vw]"
      >
        <CarouselContent>
          {cards?.map((card, index) => (
            <CarouselItem key={index}>
              <Card
                title={card.title}
                text={card.text}
                imageSrc={card.imageSrc}
              />
            </CarouselItem>
          ))}
          {/* </div> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-3xl font-bold mb-4">Trust us to help build your perfect site</h1>
        <p className="text-lg text-gray-500 mb-6">
          We specialize in creating custom websites that perfectly match your vision and business needs. With years of experience and a passionate team of developers, we deliver websites that stand out.
        </p>
        <p className="text-lg text-gray-500">
          From small business websites to complex web applications, we handle every project with the same level of dedication and expertise. Let's work together to bring your digital presence to life.
        </p>
      </div>
    </div>
  );
}

function Card({
  title,
  text,
  imageSrc,
}: {
  title: string;
  text: string;
  imageSrc: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-sm h-96 shadow-lg p-4 text-white relative overflow-hidden w-max-10/12`}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={`/${imageSrc}`}
        height={800}
        width={800}
        alt={`${title} illustration`}
      />
      <h1 className="font-bold mt-4 text-2xl">{title}</h1>
      <span className="bg-black/20 backdrop-blur-sm p-4 rounded-sm mt-auto mb-8">
        {text}
      </span>
    </div>
  );
}
