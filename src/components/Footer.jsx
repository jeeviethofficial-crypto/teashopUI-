import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  {
    platform: 'Facebook',
    href: 'https://www.facebook.com/yourpage',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    )
  },
  {
    platform: 'Instagram',
    href: 'https://www.instagram.com/cafebrit_?igsh=bmtpZmV5MGRmOW5m',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    )
  },
  {
    platform: 'WhatsApp',
    href: 'https://wa.me/yourphonenumber',
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
    )
  }
];

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Contact', path: '/contact' }
];

export default function Footer() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#footer h2',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '#footer', start: 'top 80%' }
        }
      );
      gsap.fromTo(
        '#footer .footer-content > div',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: '#footer', start: 'top 70%' }
        }
      );
      gsap.fromTo(
        '#footer .newsletter-section',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '#footer', start: 'top 60%' }
        }
      );
      gsap.set('.social-link', { scale: 1 });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden radial-gradient">
      <div className="noisy" />
      <img
        src="/images/greenLeaf.png"
        alt=""
        className="absolute bottom-0 left-0 pointer-events-none opacity-30 hidden sm:block"
        style={{
          width: 'clamp(100px, 20vw, 250px)',
          marginLeft: 'clamp(-50px, -8vw, -100px)',
          transform: 'rotate(240deg)'
        }}
        loading="lazy"
      />
      <img
        src="/images/greenLeaf.png"
        alt=""
        className="absolute top-0 right-0 pointer-events-none opacity-30 hidden sm:block"
        style={{
          width: 'clamp(80px, 15vw, 200px)',
          marginRight: 'clamp(-60px, -10vw, -150px)',
          transform: 'rotate(10deg)'
        }}
        loading="lazy"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/images/britLogo.jpeg"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-yellow"
                alt="Cafe Brit Logo"
                loading="lazy"
              />
              <h3 className="font-modern-negra text-2xl sm:text-3xl md:text-4xl">Cafe Brit</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md text-gray-300 leading-relaxed">
              Crafting remarkable coffee experiences where heritage meets innovation. Every brew
              tells a story of passion, precision, and the art of craft coffee.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {SOCIAL_LINKS.map(({ platform, href, icon }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex-center hover:border-yellow hover:text-yellow transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  aria-label={`Follow us on ${platform}`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-modern-negra text-lg sm:text-xl md:text-2xl text-yellow mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow transition-colors text-sm sm:text-base md:text-lg block py-1 sm:py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-modern-negra text-lg sm:text-xl md:text-2xl text-yellow mb-4 sm:mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-yellow flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="text-sm sm:text-base md:text-lg">
                    No. 71, Ward Place, <br /> Colombo 07, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <p className="text-sm sm:text-base md:text-lg">0112 444 222</p>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <p className="text-sm sm:text-base md:text-lg">director@cafebrit.lk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-section border-t border-gray-700 pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-modern-negra text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow mb-2 sm:mb-3 md:mb-4">
              Stay Steeped in News
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg px-2">
              Subscribe to our newsletter for the latest coffee blends, brewing tips, and exclusive
              offers.
            </p>
            <div className="max-w-lg mx-auto px-2 sm:px-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to Cafe Brit newsletter!');
                }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 sm:py-4 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-yellow transition-colors text-sm sm:text-base"
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  type="submit"
                  className="px-6 py-3 sm:py-4 bg-yellow text-black font-semibold rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-opacity-90 transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Cafe Brit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
