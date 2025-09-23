import Link from 'next/link';
import { title, description, email, location, social, socialIcons, footer } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-300 text-yellow-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4">{title}</h3>
            <p className="text-yellow-300 font-space-grotesk mb-4 max-w-md">
              {description}
            </p>
            <div className="flex space-x-4">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 font-space-grotesk hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={socialIcons.instagram} />
                </svg>
              </a>
              <a
                href={social.github}
                className="text-yellow-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={socialIcons.github} />
                </svg>
              </a>
              <a
                href={social.twitter}
                className="text-yellow-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={socialIcons.twitter} />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-space-grotesk font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-yellow-300 font-space-grotesk hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-space-grotesk font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 font-space-grotesk text-yellow-300 ">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a 
                  href={`mailto:${email}`}
                  className="text-yellow-300  hover:text-white transition-colors duration-200"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                {location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t text-yellow-300 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-yellow-300 font-space-grotesk text-sm">
              © {currentYear} {title}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footer.legal.map((link) => (
                <a key={link.name} href={link.href} className="text-yellow-300 font-space-grotesk hover:text-white text-sm transition-colors duration-200">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
