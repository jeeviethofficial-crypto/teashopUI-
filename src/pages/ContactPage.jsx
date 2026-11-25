import SEO, { defaultJsonLd } from '../components/SEO';
import Navbar from '../components/Navbar';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main>
      <SEO
        title="Contact | Cafe Brit"
        description="Find Cafe Brit at No. 71, Ward Place, Colombo 07. Call 0112 444 222 or email director@cafebrit.lk."
        canonicalPath="/contact"
        jsonLd={defaultJsonLd}
      />
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
