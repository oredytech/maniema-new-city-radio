
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordPressArticle } from '@/hooks/useWordPressArticles';
import { formatDate, stripHtml } from '@/utils/articleUtils';

interface ArticleCardProps {
  article: WordPressArticle;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const altText = article._embedded?.['wp:featuredmedia']?.[0]?.alt_text || article.title.rendered;
  
  return (
    <Link to={`/article/${article.slug}`}>
      <Card className="overflow-hidden card-hover h-full">
        <div className="aspect-video overflow-hidden">
          {featuredImage ? (
            <img
              src={featuredImage}
              alt={altText}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <span className="text-4xl">📰</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDate(article.date)}</span>
          </div>
          
          <h3 
            className="text-xl font-bold mb-3 line-clamp-2 text-gradient hover:text-primary transition-colors"
            dangerouslySetInnerHTML={{ __html: article.title.rendered }}
          />
          
          <p className="text-muted-foreground line-clamp-3">
            {stripHtml(article.excerpt.rendered)}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
