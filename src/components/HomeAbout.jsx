import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  useEffect(() => {
    let split = null;

    const ctx = gsap.context(() => {
      try {
        split = new SplitType('#about h2', { types: 'words' });
        if (split.words) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '#about',
                start: 'top center'
              }
            })
            .from(split.words, {
              opacity: 0,
              duration: 1,
              yPercent: 100,
              ease: 'expo.out',
              stagger: 0.02
            })
            .from(
              '.top-grid div, .bottom-grid div',
              {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04
              },
              '-=0.5'
            );
        }
      } catch (err) {
        console.warn('SplitType error on HomeAbout', err);
      }
    });

    return () => {
      ctx.revert();
      if (split) split.revert();
    };
  }, []);

  return (
    <div id="about">
      <div className="mb-8 sm:mb-10 md:mb-16 px-4 sm:px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2">
              Elevated &amp; Premium
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Where everyday moments feel elevated
              <span />
            </h2>
          </div>

          <div className="sub-content mt-6 sm:mt-8 md:mt-0">
            <p className="text-sm sm:text-base md:text-lg">
              Welcome to Cafe Brit, a carefully crafted café experience designed to blend
              exceptional taste with a warm, contemporary atmosphere. Established in 2026,it was
              built to be both sophisticated and inviting a space you’ll want to return to again
              and again.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-0">
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white-100 mt-1">
                More than +1200 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid px-4 sm:px-5 md:px-0">
        <div className="md:col-span-3 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg">
          <div className="noisy" />
          <img
            src="/cafe/interior-aisle.jpeg"
            alt="Cafe Brit interior and central walkway"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-6 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg">
          <div className="noisy" />
          <img
            src="/cafe/interior-window.jpeg"
            alt="Cafe Brit window seating area"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-3 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg">
          <div className="noisy" />
          <img
            src="/menu/latte-art.jpeg"
            alt="Cafe Brit latte art"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bottom-grid px-4 sm:px-5 md:px-0 mt-4 sm:mt-5 md:mt-6">
        <div className="md:col-span-8 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg">
          <div className="noisy" />
          <img
            src="/cafe/interior-lounge.jpeg"
            alt="Warm seating inside Cafe Brit"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-4 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative overflow-hidden rounded-lg">
          <div className="noisy" />
          <img
            src="/cafe/smash-burger.jpeg"
            alt="Cafe Brit smash cheese beef burger"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
