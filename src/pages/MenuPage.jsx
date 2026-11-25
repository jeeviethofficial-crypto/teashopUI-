import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import MenuContent from '../components/MenuContent';
import Footer from '../components/Footer';

export default function MenuPage() {
  return (
    <main>
      <SEO
        title="Menu | Cafe Brit"
        description="Explore the Cafe Brit menu — coffee, desserts, and more. Find your next favorite."
        canonicalPath="/menu"
      />
      <Navbar />
      <MenuContent />
      <Footer />
    </main>
  );
}
