import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MENU_PAGES = [
  {
    id: 'food',
    label: 'Food Menu',
    src: '/menu/newMenu1.jpeg',
    alt: 'Cafe Brit food menu with soup, rice, starters, bowls, meals, French toast, waffles, and add-ons'
  },
  {
    id: 'drinks',
    label: 'Drinks Menu',
    src: '/menu/newMenu2.jpeg',
    alt: 'Cafe Brit drinks menu with boba, wellness drinks, speciality coffee, matcha, tea, mocktails, milkshakes, fruit juice, and specials'
  },
  {
    id: 'coffee',
    label: 'Coffee Menu',
    src: '/menu/newMenu3.jpeg',
    alt: 'Cafe Brit hot coffee, iced coffee, and coffee add-ons menu'
  }
];

const MOSAIC_TILES = [
  { src: '/menu/one-pan-wonder-close.jpeg', alt: 'Cafe Brit one pan breakfast dish' },
  { src: '/menu/baked-wrap.jpeg', alt: 'Cafe Brit baked wrap' },
  { src: '/menu/iced-latte.jpeg', alt: 'Cafe Brit iced latte' },
  { src: '/menu/strawberry-spritz.jpeg', alt: 'Strawberry iced refresher' }
];

const ZOOM_STEPS = [100, 140, 180, 220];

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState(MENU_PAGES[0].id);
  const [modalMenuId, setModalMenuId] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(1);
  const containerRef = useRef(null);
  const dialogRef = useRef(null);

  const activeMenu = MENU_PAGES.find((x) => x.id === activeTab) ?? MENU_PAGES[0];
  const modalMenu = MENU_PAGES.find((x) => x.id === modalMenuId);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-hero-copy > *', {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out'
      });
      gsap.from('.menu-hero-tile', {
        opacity: 0,
        y: 34,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out'
      });
      gsap.from('.menu-shell', {
        opacity: 0,
        y: 38,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.menu-shell',
          start: 'top 78%'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.active-menu-image', {
        opacity: 0,
        y: 22,
        scale: 0.985,
        duration: 0.45,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  // Native HTML Dialog management adhering to modern-web-guidance
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (modalMenuId) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [modalMenuId]);

  const openModal = (id) => {
    setModalMenuId(id);
    setZoomIndex(1);
  };

  const closeModal = () => {
    setModalMenuId(null);
  };

  const zoomOut = () => {
    setZoomIndex((prev) => Math.max(0, prev - 1));
  };

  const zoomIn = () => {
    setZoomIndex((prev) => Math.min(ZOOM_STEPS.length - 1, prev + 1));
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeModal();
    }
  };

  return (
    <section
      ref={containerRef}
      id="menu-page"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,211,147,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_22%)]" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-15" />

      <div className="relative z-10 pt-32 sm:pt-40 lg:pt-44">
        <div className="container mx-auto px-5">
          {/* Top Hero Section */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="menu-hero-copy max-w-2xl">
              <p className="w-fit border-b border-yellow/60 pb-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow">
                Cafe Brit Menu
              </p>
              <h1 className="font-modern-negra text-6xl leading-none text-white sm:text-7xl md:text-8xl lg:text-9xl mt-4">
                Fresh From Brit
              </h1>
              <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg mt-4">
                Browse the original Cafe Brit menu artwork. Tap any menu page to zoom in for easier
                reading.
              </p>
              <div className="grid max-w-md grid-cols-2 border-y border-white/12 py-5 mt-6">
                <div>
                  <p className="font-serif text-4xl text-yellow">{MENU_PAGES.length}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">Pages</p>
                </div>
                <div className="border-l border-white/12 pl-6">
                  <p className="font-serif text-4xl text-yellow">10%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">Service</p>
                </div>
              </div>
            </div>

            {/* Mosaic grid */}
            <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[230px]">
              {MOSAIC_TILES.map((tile, i) => (
                <figure
                  key={tile.src}
                  className={`menu-hero-tile overflow-hidden rounded-lg border border-white/10 bg-white/5 ${
                    i === 0 ? 'row-span-2' : ''
                  }`}
                >
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>

          {/* Interactive Menu Shell */}
          <div className="menu-shell mt-12 overflow-hidden rounded-xl border border-white/12 bg-black/72 shadow-2xl shadow-black/50 backdrop-blur-xl">
            {/* Tab Buttons */}
            <div className="border-b border-white/10 p-3 sm:p-4">
              <div className="grid gap-2 sm:grid-cols-3">
                {MENU_PAGES.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-lg border px-3 py-3 text-center transition sm:px-4 cursor-pointer ${
                        isActive
                          ? 'border-yellow bg-yellow text-black'
                          : 'border-white/12 bg-white/[0.04] text-white/68 hover:border-yellow/55 hover:text-yellow'
                      }`}
                    >
                      <span className="block font-serif text-xl leading-none sm:text-2xl">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Page View */}
            <div className="p-3 sm:p-5 lg:p-7">
              <div className="mx-auto mb-5 max-w-2xl border-b border-white/12 pb-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow">
                  {activeMenu.label}
                </p>
                <h2 className="mt-2 font-serif text-4xl text-white sm:text-5xl">
                  Full Menu Artwork
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/58">
                  Prices are listed in LKR. Tap the image to zoom, or open it full size in a new tab.
                </p>
              </div>

              <figure className="active-menu-image overflow-hidden rounded-lg border border-white/12 bg-white shadow-2xl shadow-black/40">
                <button
                  type="button"
                  onClick={() => openModal(activeMenu.id)}
                  className="block w-full cursor-zoom-in bg-white"
                  aria-label={`Zoom ${activeMenu.label}`}
                >
                  <img
                    src={activeMenu.src}
                    alt={activeMenu.alt}
                    className="h-auto w-full block"
                    fetchpriority="high"
                  />
                </button>
              </figure>

              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {MENU_PAGES.map((item) => (
                    <button
                      key={`${item.id}-thumb`}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`rounded-full border px-4 py-2 transition cursor-pointer ${
                        activeMenu.id === item.id
                          ? 'border-yellow bg-yellow text-black'
                          : 'border-white/12 text-white/68 hover:border-yellow/55 hover:text-yellow'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <a
                  href={activeMenu.src}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-4 py-2 text-center text-white/74 transition hover:border-yellow/55 hover:text-yellow"
                >
                  Open full size
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Banner Images */}
          <div className="py-10 sm:py-14">
            <div className="grid gap-4 md:grid-cols-[1fr_1.35fr]">
              <img
                src="/menu/barista-tamping.jpeg"
                alt="Cafe Brit barista tamping espresso"
                className="h-72 w-full rounded-lg object-cover md:h-96"
                loading="lazy"
              />
              <img
                src="/menu/iced-latte.jpeg"
                alt="Iced latte from Cafe Brit"
                className="h-72 w-full rounded-lg object-cover md:h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accessible native <dialog> zoom modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="menu-dialog-title"
        onClick={handleBackdropClick}
        onCancel={closeModal}
        className="fixed inset-0 m-0 h-full w-full max-h-full max-w-full bg-black/92 p-3 text-white sm:p-5 backdrop:bg-black/80"
        style={{
          boxSizing: 'border-box'
        }}
      >
        {modalMenu && (
          <div className="flex h-full flex-col gap-3">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/12 bg-black/70 px-3 py-2 backdrop-blur">
              <h1 id="menu-dialog-title" className="font-serif text-2xl text-yellow">
                {modalMenu.label}
              </h1>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="h-10 w-10 rounded-full border border-white/15 text-xl leading-none text-white/80 transition hover:border-yellow hover:text-yellow flex-center cursor-pointer"
                  aria-label="Zoom out"
                >
                  -
                </button>
                <span className="min-w-14 text-center text-sm font-semibold text-white/70">
                  {ZOOM_STEPS[zoomIndex]}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="h-10 w-10 rounded-full border border-white/15 text-xl leading-none text-white/80 transition hover:border-yellow hover:text-yellow flex-center cursor-pointer"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-yellow hover:text-yellow cursor-pointer"
                  autoFocus
                >
                  Close
                </button>
              </div>
            </div>

            {/* Scrollable zoom container */}
            <div className="flex-1 overflow-auto rounded-lg border border-white/12 bg-white flex items-start justify-center p-2">
              <img
                src={modalMenu.src}
                alt={modalMenu.alt}
                className="h-auto max-w-none transition-all duration-200"
                style={{ width: `${ZOOM_STEPS[zoomIndex]}%` }}
              />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
