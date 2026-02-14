import Image from "next/image";
import Link from "next/link";
import BackToPortfolio from "../../components/BackToPortfolio";

export default function Resume() {
  return (
    <div>
      <BackToPortfolio />
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
