
import { useWordPressArticlesByCategory } from '@/hooks/useWordPressArticles';
import { Card } from '@/components/ui/card';
import { Clock, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate, stripHtml } from '@/utils/articleUtils';

interface ArticleSidebarProps {
  categoryId: number;
  currentArticleId: number;
}

const ArticleSidebar = ({ categoryId, currentArticleId }: ArticleSidebarProps) => {
  const { data: relatedArticles } = useWordPressArticlesByCategory(categoryId, 6);

  // Filter out current article and limit to 5
  const filteredArticles = relatedArticles?.filter(article => article.id !== currentArticleId).slice(0, 5) || [];

  // Mock recent comments data
  const recentComments = [
    { id: 1, author: "Jean Dupont", content: "Très intéressant cet article...", date: "2024-01-20" },
    { id: 2, author: "Marie Martin", content: "Merci pour ces informations...", date: "2024-01-19" },
    { id: 3, author: "Pierre Durand", content: "Excellente analyse...", date: "2024-01-18" },
    { id: 4, author: "Sophie Lambert", content: "J'aimerais en savoir plus...", date: "2024-01-17" },
    { id: 5, author: "Antoine Moreau", content: "Article très informatif...", date: "2024-01-16" }
  ];

  return (
    <div className="space-y-6">
      {/* Related Articles */}
      {filteredArticles.length > 0 && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-gradient">Articles connexes</h3>
          <div className="space-y-4">
            {filteredArticles.map((article) => {
              const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              return (
                <Link 
                  key={article.id} 
                  to={`/article/${article.slug}`}
                  className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                    {featuredImage ? (
                      <img 
                        src={featuredImage} 
                        alt={stripHtml(article.title.rendered)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-lg">📰</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 
                      className="text-sm font-medium line-clamp-2 mb-1"
                      dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                    />
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Card>
      )}

      {/* Advertisement */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gradient">Publicité</h3>
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <div className="text-4xl mb-2">📢</div>
          <p className="text-sm text-muted-foreground">Espace publicitaire</p>
          <p className="text-xs text-muted-foreground mt-1">300x250</p>
        </div>
      </Card>

      {/* Recent Comments */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gradient">Commentaires récents</h3>
        <div className="space-y-4">
          {recentComments.map((comment) => (
            <div key={comment.id} className="p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{comment.author}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(comment.date)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ArticleSidebar;
