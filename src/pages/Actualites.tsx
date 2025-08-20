
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import ArticleCard from '../components/ArticleCard';
import { useWordPressArticles } from '@/hooks/useWordPressArticles';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const Actualites = () => {
  const { data: articles, isLoading, error } = useWordPressArticles(12);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Actualités</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Restez informés avec les dernières nouvelles de la province du Maniema
              et de la région
            </p>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading && (
              <div className="flex justify-center mb-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {error && (
              <div className="text-center mb-8">
                <p className="text-xl text-muted-foreground">
                  Impossible de charger les actualités pour le moment
                </p>
              </div>
            )}

            {articles && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Card className="p-8 max-w-2xl mx-auto gradient-primary">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Vous avez une information à partager ?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Contactez notre équipe de rédaction pour nous faire part de vos actualités locales
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">📞</span>
                    <span>+243 812 543 985</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">✉️</span>
                    <span>radiomaniemanewcity@gmail.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default Actualites;
