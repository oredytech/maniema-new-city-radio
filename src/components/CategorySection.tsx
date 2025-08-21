
import { useWordPressArticlesByCategory } from '@/hooks/useWordPressArticles';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface CategorySectionProps {
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

const CategorySection = ({ categoryId, categoryName, categorySlug }: CategorySectionProps) => {
  const { data: articles, isLoading, error } = useWordPressArticlesByCategory(categoryId, 6);

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gradient">{categoryName}</span>
            </h2>
          </div>
          
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">{categoryName}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Les dernières actualités de la catégorie {categoryName.toLowerCase()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Link to={`/actualites?category=${categorySlug}`}>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              Voir plus d'articles {categoryName.toLowerCase()}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
