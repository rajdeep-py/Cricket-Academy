import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About isHome />
      <Programs isHome />
      <Testimonials />
      <Blog isHome />
      <Contact />
    </>
  );
}
