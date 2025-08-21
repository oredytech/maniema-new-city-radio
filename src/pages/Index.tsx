
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HeroNewsSection from '../components/HeroNewsSection';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import BreakingNewsBanner from '../components/BreakingNewsBanner';
import { useWordPressCategories } from '@/hooks/useWordPressArticles';

const Index = () => {
  const { data: categories } = useWordPressCategories();
  
  // Prendre les 5 premières catégories avec le plus d'articles
  const topCategories = categories?.filter(cat => cat.count > 0).slice(0, 5) || [];

  return (
    <div className="min-h-screen">
      <Navigation />
      <BreakingNewsBanner />
      <main className="pb-[50px]">
        <HeroSection />
        <HeroNewsSection />
        
        {/* Sections par catégorie */}
        {topCategories.map((category, index) => (
          <CategorySection
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            categorySlug={category.slug}
          />
        ))}
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default Index;
