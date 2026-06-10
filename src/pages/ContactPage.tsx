import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Get in Touch"
        subtitle="Start Your Journey"
        image="assets/hero-cover/contact-us-cover.png"
      />
      <Contact />
      <FAQ />
    </div>
  );
}
