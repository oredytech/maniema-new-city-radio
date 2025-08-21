
import { useParams, Link } from 'react-router-dom';
import { useWordPressArticle, useWordPressArticlesByCategory, useWordPressCategories } from '@/hooks/useWordPressArticles';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import ArticleSidebar from '../components/ArticleSidebar';
import ShareButtons from '../components/ShareButtons';
import CommentForm from '../components/CommentForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Loader2 } from 'lucide-react';
import { formatDate } from '@/utils/articleUtils';

const ArticleRead = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useWordPressArticle(slug || '');
  const { data: categories } = useWordPressCategories();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16 pb-[50px]">
          <div className="container mx-auto px-4 py-16">
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          </div>
        </main>
        <FixedRadioPlayer />
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16 pb-[50px]">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Article non trouvé</h1>
            <p className="text-xl text-muted-foreground mb-8">
              L'article que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link to="/actualites">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux actualités
              </Button>
            </Link>
          </div>
        </main>
        <FixedRadioPlayer />
        <Footer />
      </div>
    );
  }

  const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const altText = article._embedded?.['wp:featuredmedia']?.[0]?.alt_text || article.title.rendered;
  
  // Get article category for related articles
  const articleCategoryId = article.categories?.[0];
  const currentCategory = categories?.find(cat => cat.id === articleCategoryId);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        {/* Hero Section with Featured Image and Overlay Title */}
        {featuredImage && (
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={featuredImage}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Title Overlay - Bottom Left */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="max-w-4xl">
                <div className="flex items-center text-sm text-white/80 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDate(article.date)}</span>
                  {currentCategory && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold uppercase">
                        {currentCategory.name}
                      </span>
                    </>
                  )}
                </div>
                <h1 
                  className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg"
                  dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/actualites">
              <Button variant="ghost" className="hover:bg-muted">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux actualités
              </Button>
            </Link>
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <article className="lg:col-span-2">
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gradient prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:hover:text-primary/80 prose-strong:text-foreground prose-img:rounded-lg prose-img:shadow-lg prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: article.content.rendered }}
              />

              {/* Share Buttons */}
              <ShareButtons 
                url={window.location.href}
                title={article.title.rendered}
              />

              {/* Comment Form */}
              <CommentForm articleId={article.id} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <ArticleSidebar 
                categoryId={articleCategoryId}
                currentArticleId={article.id}
              />
            </aside>
          </div>
        </div>
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default ArticleRead;
