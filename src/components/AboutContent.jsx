import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '1,000+', label: 'Cups Served' },
  { value: '500+', label: 'Satisfied Guests' },
  { value: '30+', label: 'Handcrafted Menu Items' },
  { value: '1', label: 'Cafe bringing people together' }
];

const FEATURES = [
  {
    title: 'Modern Urban Escape',
    desc: 'A refined cafe experience designed for the modern city lifestyle'
  },
  {
    title: 'Artisanal and Craft Focused',
    desc: 'Every cup and plate made with precision and care.Quality you can taste in every bite'
  },
  {
    title: 'Community Centered Concept',
    desc: 'A place where people meet, create, and belong'
  },
  {
    title: 'Elevated everyday moments',
    desc: 'Turning simple coffee breaks into something special'
  },
  {
    title: 'Founder-led vision Board',
    desc: 'A new generation cafe with long term ambition'
  }
];

export default function AboutContent() {
  useEffect(() => {
    let headingSplit = null;
    let badgeSplit = null;

    const ctx = gsap.context(() => {
      try {
        headingSplit = new SplitType('#about h2', { types: 'words,chars', charClass: 'char' });
        badgeSplit = new SplitType('#about .badge', { types: 'words,chars', charClass: 'char' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        if (badgeSplit.chars) {
          tl.from(badgeSplit.chars, {
            opacity: 0,
            y: 30,
            rotationX: 90,
            stagger: 0.02,
            duration: 0.8,
            ease: 'back.out(1.7)'
          });
        }

        if (headingSplit.chars) {
          tl.from(
            headingSplit.chars,
            {
              opacity: 0,
              y: 40,
              rotationX: 90,
              stagger: 0.03,
              duration: 1,
              ease: 'power3.out'
            },
            '-=0.5'
          );
        }

        tl.from(
          '#about .description',
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out'
          },
          '-=0.3'
        )
          .from(
            '#about .stats-section',
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.8,
              ease: 'power2.out'
            },
            '-=0.2'
          );
      } catch (err) {
        console.warn('SplitType error on AboutContent', err);
      }
    });

    return () => {
      ctx.revert();
      if (headingSplit) headingSplit.revert();
      if (badgeSplit) badgeSplit.revert();
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden px-4 sm:px-6 md:px-0 bg-black pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black z-0 opacity-90" />

      <div className="max-w-6xl mx-auto relative z-10 py-12 sm:py-16 md:py-20">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <p className="badge text-xs sm:text-sm md:text-base font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-coffee-brown/10 text-coffee-brown border border-coffee-brown/20">
              EVERY CUP TELLS A STORY. EVERY VISIT FEELS LIKE HOME.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            More than just coffee <br className="hidden sm:block" />
            it's an experience crafted with care
          </h2>

          <div className="description max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              Founded in the heart of Colombo, Cafe Brit was created to offer a new kind of café
              experience one where quality, atmosphere, and warmth come together effortlessly. We
              believe in slowing down, being present, and turning simple coffee breaks into moments
              that matter.
            </p>
          </div>

          <div className="stats-section grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-medium text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 space-y-8 sm:space-y-12">
          {/* Heritage Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full">
                  Our Heritage
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                The Story Behind Cafe Brit
              </h3>
              <div className="space-y-3 sm:space-y-4 text-white">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Cafe Brit was created with a clear vision to bring a fresh, elevated energy to
                  the coffee scene. The founder set out to build more than just a place to drink
                  coffee. She envisioned a space where quality, atmosphere, and intention come
                  together seamlessly. A cafe designed not only for great taste, but for meaningful
                  moments whether you’re working, meeting, or simply taking a pause. Every detail
                  has been thoughtfully crafted to create a distinct feeling: modern yet warm,
                  refined yet welcoming.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Cafe Brit is the start of something bigger a new-generation cafe experience
                  built with ambition, heart, and a long term vision.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-800 to-black p-1">
                <img
                  src="/cafe/interior-lounge.jpeg"
                  alt="The warm, contemporary Cafe Brit interior"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-800 to-black p-1">
                <img
                  src="/cafe/interior-window.jpeg"
                  alt="Cafe Brit seating beside the street-facing windows"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full">
                  Why Choose Cafe Brit
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Experience the Difference
              </h3>
              <div className="space-y-4 sm:space-y-6 text-white">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  What sets Cafe Brit apart is our attention to detail and commitment to creating
                  exceptional experiences.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {FEATURES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-yellow">
                    Cafe Brit is not just where you eat or drink, it's where you belong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promise Banner */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            OUR PROMISE
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white italic max-w-3xl mx-auto">
            "To be the islands premier Cafè destination, blending global flavors with exceptional
            service to create a unique dining experience that delights every guest"
          </p>
          <p className="mt-4 sm:mt-6 text-coffee-light font-medium text-sm sm:text-base">
            — The Cafe Brit Team
          </p>
        </div>
      </div>
    </section>
  );
}
