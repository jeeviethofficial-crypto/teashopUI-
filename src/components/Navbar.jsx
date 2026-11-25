import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'menu', title: 'Menu' },
  { id: 'contact', title: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: 'nav',
        start: 'bottom top',
        onEnter: () => {
          gsap.to('nav', {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 0.3,
            ease: 'power1.inOut'
          });
        },
        onLeaveBack: () => {
          gsap.to('nav', {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            duration: 0.3,
            ease: 'power1.inOut'
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    if (path === '/home' && (pathname === '/' || pathname === '/home')) return true;
    return pathname === path;
  };

  const getPath = (title) => {
    return title.toLowerCase() === 'home' ? '/' : `/${title.toLowerCase()}`;
  };

  return (
    <nav className="py-2 sm:py-3 md:py-4 fixed w-full z-50 transition-colors">
      <div className="relative container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/britLogo.jpeg"
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <p className="text-xl sm:text-2xl md:text-3xl font-modern-negra">Cafe Brit</p>
        </Link>

        {/* Mobile menu hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl z-50 p-2 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:items-center md:gap-6 lg:gap-8 xl:gap-12">
          {NAV_ITEMS.map((item) => {
            const path = getPath(item.title);
            const active = isActive(path);
            return (
              <li key={item.id}>
                <Link
                  to={path}
                  className={`text-sm lg:text-base transition-colors relative group py-1 ${
                    active ? 'text-yellow font-semibold' : 'text-white hover:text-yellow'
                  }`}
                >
                  {item.title}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow rounded-full" />
                  )}
                  {!active && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg z-40 mt-2 rounded-lg shadow-xl border border-gray-800">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {NAV_ITEMS.map((item) => {
                const path = getPath(item.title);
                const active = isActive(path);
                return (
                  <li key={item.id} className="w-full text-center">
                    <Link
                      to={path}
                      className={`block py-3 text-base transition-all duration-300 relative ${
                        active
                          ? 'text-yellow font-semibold bg-white/5'
                          : 'text-white hover:text-yellow hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      {active && (
                        <span className="absolute left-0 top-0 w-1 h-full bg-yellow rounded-r-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
