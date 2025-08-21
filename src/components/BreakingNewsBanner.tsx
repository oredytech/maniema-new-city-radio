
import { useWordPressArticles } from '@/hooks/useWordPressArticles';
import { stripHtml } from '@/utils/articleUtils';
import { Link } from 'react-router-dom';

const BreakingNewsBanner = () => {
  const { data: articles, isLoading } = useWordPressArticles(10);

  if (isLoading || !articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="bg-destructive-foreground text-destructive px-4 py-1 font-bold text-sm uppercase flex-shrink-0">
          Breaking News
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex items-center space-x-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="text-sm hover:underline flex-shrink-0"
                >
                  {stripHtml(article.title.rendered)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBanner;
