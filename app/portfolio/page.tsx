import CollectionCarousel from "../components/CollectionCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const collectionAImages = [
    'mood1.png',
    'fabric2.png',
    'illustrationGreen3.png',
    'illustrationYellow4.png',
    'flatGreen5.png',
    'flatYellow6.png',
  ];

  const collectionBImages = [
    'mood1.png',
    'fabirc2.png',
    'illustration3.png',
    'idIllustration4.png',
    'illustration5.png',
    'idIllustration6.png',
  ];

  return (
    <div>
      <CollectionCarousel 
        title="Fall/Winter Collection" 
        images={collectionAImages}
        collectionPath="/CollectionA"
      />
      <CollectionCarousel 
        title="Spring/Summer Collection" 
        images={collectionBImages}
        collectionPath="/CollectionB"
      />
      
      {/* Resume Section */}
      <section className="w-full bg-[#fffbeb] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-[#d9385b] font-space-grotesk font-extrabold mb-8 text-center">
            Resume
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="relative bg-white rounded-lg shadow-lg p-4 w-full sm:w-[700px]">
              <Image
                src="/resume.png"
                alt="Resume"
                width={1200}
                height={1600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="text-center">
              <Link
                href="/resume.png"
                download
                className="inline-block rounded-full bg-[#d9385b] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b82d4a] hover:scale-105 font-space-grotesk"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

