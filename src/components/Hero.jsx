import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [screen, setScreen] = useState('desktop');

  useEffect(() => {
    const checkScreen = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setScreen('mobile');
      } else if (w < 1024) {
        setScreen('tablet');
      } else {
        setScreen('desktop');
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const isSmall = screen === 'mobile';
  const isMed = screen === 'tablet';

  useEffect(() => {
    let titleSplit = null;
    let subtitleSplit = null;

    const ctx = gsap.context(() => {
      try {
        titleSplit = new SplitType('.title', { types: 'chars,words' });
        subtitleSplit = new SplitType('.subtitle', { types: 'lines' });

        if (titleSplit.chars) {
          titleSplit.chars.forEach((c) => c.classList.add('text-gradient'));
          gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
          });
        }

        if (subtitleSplit.lines) {
          gsap.from(subtitleSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
          });
        }
      } catch (err) {
        console.warn('SplitType animation fallback', err);
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
        .to('.right-leaf', { y: 100 }, 0)
        .to('.left-leaf', { y: 100 }, 0);
    });

    return () => {
      ctx.revert();
      if (titleSplit) titleSplit.revert();
      if (subtitleSplit) subtitleSplit.revert();
    };
  }, []);

  return (
    <>
      <section id="hero" className="relative z-10 w-full border border-transparent">
        <div className="noisy hero-noise" aria-hidden="true" />
        <h1 className="title">CAFE BRIT</h1>

        <img
          src="/images/greenLeaf.png"
          alt="right-leaf"
          className="right-leaf pointer-events-none select-none"
          style={{
            width: isSmall ? '120px' : isMed ? '180px' : '350px',
            marginRight: isSmall ? '-40px' : isMed ? '-90px' : '-150px',
            marginTop: isSmall ? '40px' : isMed ? '70px' : '95px',
            transform: `rotate(${isSmall ? '45deg' : isMed ? '60deg' : '75deg'})`
          }}
        />

        <div className="body">
          <div className="content">
            <div className="space-y-4 sm:space-y-5 md:block">
              <p className="text-base sm:text-lg md:hidden text-center mb-4">
                Rich. Bold. Essential.
              </p>
              <p className="subtitle text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hidden md:block">
                Experience the <br /> Perfect Blend
              </p>
              <p className="subtitle text-xl sm:text-2xl text-center mb-6 md:hidden">
                Experience the Perfect Blend
              </p>
            </div>

            <div className="view-cocktails mt-6 sm:mt-8 md:mt-0">
              <p className="subtitle text-sm sm:text-base md:text-lg">
                Every cup at our cafe is a carefully crafted fusion of ethically sourced beans, and
                cozy comfort brewed to awaken your spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0 pointer-events-none">
        <img
          src="/images/espresso.png"
          alt="espresso"
          className="espresso-img w-full h-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
          style={{
            display: 'block',
            margin: '0 auto',
            marginTop: isSmall ? '80px' : isMed ? '40px' : '60px'
          }}
          fetchpriority="high"
        />
      </div>
    </>
  );
}
