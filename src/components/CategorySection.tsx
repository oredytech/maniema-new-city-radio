
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
          <div className="flex items-center mb-8">
            <div className="relative">
              <div className="bg-primary px-6 py-3 text-primary-foreground font-bold text-xl uppercase transform skew-x-12">
                <span className="transform -skew-x-12 block">{categoryName}</span>
              </div>
              <div className="h-1 bg-primary ml-2 flex-1"></div>
            </div>
            <div className="h-1 bg-primary flex-1 ml-4"></div>
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
        <div className="flex items-center mb-8">
          <div className="relative">
            <div className="bg-primary px-6 py-3 text-primary-foreground font-bold text-xl uppercase transform skew-x-12">
              <span className="transform -skew-x-12 block">{categoryName}</span>
            </div>
          </div>
          <div className="h-1 bg-primary flex-1 ml-4"></div>
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
