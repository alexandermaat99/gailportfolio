import Image from "next/image";
import Link from "next/link";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALfZ2drPaQyy28Mkjxqzu8YJYkckkjk0pSlf/9k=";

const portfolioCards = [
  {
    title: "Collections",
    href: "/portfolio/collections",
    image: "/greenSet.jpg",
    alt: "Collections",
  },
  {
    title: "Tech Packs",
    href: "/portfolio/tech-packs",
    image: "/tech pack hero image.png",
    alt: "Tech Packs",
  },
  {
    title: "Resume",
    href: "/portfolio/resume",
    image: "/resume.png",
    alt: "Resume",
  },
  // {
  //   title: "Visual Merchandising",
  //   href: "/portfolio/visual-merchandising",
  //   image: "/CollectionA/fabric2.png",
  //   alt: "Visual Merchandising",
  // },
  // {
  //   title: "Modeling",
  //   href: "/portfolio/modeling",
  //   image: "/CollectionB/mood1.png",
  //   alt: "Modeling",
  // },
];

export default function Portfolio() {
  return (
    <div>
      <section className="w-full bg-[#fffbeb] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-[#d9385b] font-space-grotesk font-extrabold mb-8 text-center">
            Welcome to my portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block rounded-xl overflow-hidden border-2 border-white/20 bg-white/50 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[#d9385b]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#fffbeb]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    quality={80}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-space-grotesk font-bold text-[#d9385b] group-hover:text-[#b82d4a] transition-colors">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}