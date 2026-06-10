import PageHero from '../components/PageHero';
import Programs from '../components/Programs';
import WhyJoinUs from '../components/WhyJoinUs';

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Training Tiers"
        subtitle="Invest in Legacy"
        image="assets/hero-cover/home-cover.jpg"
      />
      <WhyJoinUs />
      <Programs />
    </div>
  );
}
