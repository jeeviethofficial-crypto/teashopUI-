import SEO, { defaultJsonLd } from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <SEO
        title="Cafe Brit | Colombo 07"
        description="Cafe Brit in Colombo 07 (Ward Place) serving coffee, desserts, and more. Visit us for great food and a cozy atmosphere."
        canonicalPath="/"
        jsonLd={defaultJsonLd}
      />
      <Navbar />
      <Hero />
      <HomeAbout />
      <Footer />
    </main>
  );
}
