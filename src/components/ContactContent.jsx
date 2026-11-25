import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: 'Facebook', icon: '/images/fb.png', url: '#' },
  {
    name: 'Instagram',
    icon: '/images/insta.png',
    url: 'https://www.instagram.com/cafebrit_?igsh=bmtpZmV5MGRmOW5m'
  }
];

const OPEN_HOURS = [{ day: 'Everyday', time: '07:00am – 12:00am' }];

export default function ContactContent() {
  useEffect(() => {
    let split = null;

    const ctx = gsap.context(() => {
      try {
        split = new SplitType('#contact h2', { types: 'words' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#contact',
            start: 'top center'
          },
          ease: 'power1.inOut'
        });

        if (split.words) {
          tl.from(split.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
          });
        }

        tl.from('#contact h3, #contact p, #contact .map-container', {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02
        })
          .to('#f-right-leaf', { y: -50, duration: 1, ease: 'power1.inOut' })
          .to('#f-left-leaf', { y: -50, duration: 1, ease: 'power1.inOut' }, '<');
      } catch (err) {
        console.warn('SplitType error on ContactContent', err);
      }
    });

    return () => {
      ctx.revert();
      if (split) split.revert();
    };
  }, []);

  return (
    <footer id="contact" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <img
        src="/images/greenLeaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        className="pointer-events-none select-none"
      />
      <img
        src="/images/greenLeaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        className="pointer-events-none select-none"
      />

      <div className="content">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Where to Find Us
        </h2>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm md:text-base xl:text-lg">Contact Us</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            0112 444 222
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            director@cafebrit.lk
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm md:text-base xl:text-lg mb-3 sm:mb-4">Socials</h3>
          <div className="flex-center gap-3 sm:gap-4 md:gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-center rounded-full bg-white/10 hover:bg-yellow/20 transition-colors"
              >
                <img src={s.icon} alt={s.name} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm md:text-base xl:text-lg">Open Hours</h3>
          {OPEN_HOURS.map((s) => (
            <p
              key={s.day}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            >
              {s.day} : {s.time}
            </p>
          ))}
        </div>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm md:text-base xl:text-lg">Visit Our Cafe</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            No. 71, Ward Place, <br /> Colombo 07, Sri Lanka
          </p>

          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="map-container w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/10">
              <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  title="Cafe Brit location map"
                  src="https://www.google.com/maps?q=No.%2071,%20Ward%20Place,%20Colombo%2007,%20Sri%20Lanka&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
