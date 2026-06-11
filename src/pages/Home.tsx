import Hero from '../components/Hero';
import Partners from '../components/Partners';
import About from '../components/About';
import WhyJoinUs from '../components/WhyJoinUs';
import FounderMessage from '../components/FounderMessage';
import Programs from '../components/Programs';
import Coaches from '../components/Coaches';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About isHome />
      <WhyJoinUs />
      <FounderMessage />
      <Programs isHome />
      <Coaches />
      <Testimonials />
      <Blog isHome />
      <Contact />
      <FAQ />
    </>
  );
}

