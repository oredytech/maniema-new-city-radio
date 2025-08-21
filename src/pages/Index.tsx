
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import { useWordPressCategories } from '@/hooks/useWordPressArticles';

const Index = () => {
  const { data: categories } = useWordPressCategories();
  
  // Prendre les 5 premières catégories avec le plus d'articles
  const topCategories = categories?.filter(cat => cat.count > 0).slice(0, 5) || [];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-[50px]">
        <HeroSection />
        <NewsSection />
        
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
