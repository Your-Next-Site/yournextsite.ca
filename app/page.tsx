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
    <div className="flex flex-col items-center justify-items-center min-h-screen max-w-[100vw] p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <div className="text-6xl font-bold bg-primary rounded-sm p-8 w-4/6 text-center shadow-2xl">
        Your Next Site
      </div>
      <Image
        className="w-auto "
        src="/website.jpg"
        height={800}
        width={800}
        alt="Website illustration"
      /> */}

      <Carousel
      
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-[70vw]"
      >
        <CarouselContent>
          {/* <CarouselItem>...</CarouselItem> */}
          {/* <CarouselItem>...</CarouselItem> */}

      {/* <div className="flex w-full justify-center gap-8 indent-8"> */}
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
      className={`flex flex-col items-center rounded-sm h-96 shadow-lg p-4 text-white relative overflow-hidden w-max-10/12`}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={`/${imageSrc}`}
        height={800}
        width={800}
        alt={`${title} illustration`}
      />
      <h1 className="mt-4 text-2xl">{title}</h1>
      <span className="bg-black/20 backdrop-blur-sm p-4 rounded-sm mt-auto mb-8">
        {text}
      </span>
    </div>
  );
}
