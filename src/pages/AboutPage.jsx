import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main>
      <SEO
        title="About | Cafe Brit"
        description="Learn more about Cafe Brit in Colombo 07 — our story, our coffee, and what makes us special."
        canonicalPath="/about"
      />
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
