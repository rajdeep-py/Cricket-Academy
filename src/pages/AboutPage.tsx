import PageHero from '../components/PageHero';
import About from '../components/About';
import Partners from '../components/Partners';
import FounderMessage from '../components/FounderMessage';
import Coaches from '../components/Coaches';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Who We Are"
        subtitle="The Elite Story"
        image="assets/hero-cover/about-us.jpg"
      />
      <About isHome={false} />
      <Partners />
      <FounderMessage />
      <Coaches />
    </div>
  );
}
