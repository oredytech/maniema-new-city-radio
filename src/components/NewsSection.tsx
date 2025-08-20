
import { useWordPressArticles } from '@/hooks/useWordPressArticles';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

const NewsSection = () => {
  const { data: articles, isLoading, error } = useWordPressArticles(6);

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Actualités Récentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Les dernières nouvelles de notre région
            </p>
          </div>
          
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Actualités Récentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Impossible de charger les actualités pour le moment
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Actualités Récentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Les dernières nouvelles de notre région
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles?.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/actualites">
            <Button size="lg" className="gradient-primary hover:scale-105 transition-all duration-300">
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
