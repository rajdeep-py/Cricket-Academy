import PageHero from '../components/PageHero';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Academy Insights"
        subtitle="Master The Theory"
        image="assets/hero-cover/blogs-cover.jpg"
      />
      <Blog />
    </div>
  );
}
