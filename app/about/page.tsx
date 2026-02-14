import Image from 'next/image';
import { title, description, author, email, location, social, socialIcons } from '../constants';

export default function About() {
  return (
    <div className="min-h-screen bg-[#fffbeb]">
      {/* Main Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Photo - Left side on desktop, top on mobile */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#d9385b] shadow-lg">
                <Image
                  src="/gailbandw.jpg"
                  alt={`${author} portrait`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Card with Content - Right side on desktop, bottom on mobile */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#d9385b] p-8 md:p-12">
                {/* Title and Divider */}
                <div className="mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk text-[#d9385b] mb-6 text-center md:text-left">
                    About {author}
                  </h1>
                  <div className="w-24 h-1 bg-[#d9385b] mx-auto md:mx-0 mb-8"></div>
                </div>

                {/* Description */}
                <div className="mb-12">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-space-grotesk font-bold mb-6">
                    Hi! I'm a Utah based fashion designer focused on womenswear and childrenswear, blending vintage inspiration with modern fit and function.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-space-grotesk">
                    I turn sketches into production ready garments through patternmaking, sewing, and fit from first prototype to final sample. With five years in retail and hands on exposure to buying and manufacturing, I design with merchandising, cost, and timelines in mind. I hold dual <span className="font-bold">AAS degrees in Fashion Design and Technical Apparel</span>, and I'm versatile across categories while staying true to a feminine, vintage leaning aesthetic.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-[#fffbeb] rounded-lg border-2 border-[#d9385b] p-6">
                    <h3 className="text-xl font-bold font-space-grotesk text-[#d9385b] mb-4">
                      Get In Touch
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 mr-3 text-[#d9385b]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <a 
                          href={`mailto:${email}`}
                          className="text-gray-700 font-space-grotesk hover:text-[#d9385b] transition-colors duration-200"
                        >
                          {email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 mr-3 text-[#d9385b]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 font-space-grotesk">{location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fffbeb] rounded-lg border-2 border-[#d9385b] p-6">
                    <h3 className="text-xl font-bold font-space-grotesk text-[#d9385b] mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href={social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d9385b] hover:text-[#b82d4a] transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d={socialIcons.instagram} />
                        </svg>
                      </a>
                      {social.github !== "#" && (
                        <a
                          href={social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d9385b] hover:text-[#b82d4a] transition-colors duration-200"
                          aria-label="GitHub"
                        >
                          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d={socialIcons.github} />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-8 border-t border-gray-200">
                  <p className="text-lg font-space-grotesk text-gray-600 mb-6">
                    Interested in working together?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/portfolio"
                      className="rounded-full bg-[#d9385b] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b82d4a] hover:scale-105 font-space-grotesk"
                    >
                      View My Work
                    </a>
                    <a
                      href="/contact"
                      className="rounded-full border-2 border-[#d9385b] px-8 py-3 text-base font-semibold text-[#d9385b] transition-all duration-300 hover:bg-[#d9385b] hover:text-white hover:scale-105 font-space-grotesk"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

