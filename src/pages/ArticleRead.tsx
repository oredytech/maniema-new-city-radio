
import { useParams, Link } from 'react-router-dom';
import { useWordPressArticle } from '@/hooks/useWordPressArticles';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Loader2 } from 'lucide-react';
import { formatDate } from '@/utils/articleUtils';

const ArticleRead = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useWordPressArticle(slug || '');

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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        {/* Hero Section with Featured Image */}
        {featuredImage && (
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={featuredImage}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
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

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDate(article.date)}</span>
            </div>

            {/* Article Title */}
            <h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-gradient leading-tight"
              dangerouslySetInnerHTML={{ __html: article.title.rendered }}
            />

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gradient prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:hover:text-primary/80 prose-strong:text-foreground prose-img:rounded-lg prose-img:shadow-lg prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: article.content.rendered }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Partagez cet article avec vos proches
                </p>
                <Link to="/actualites">
                  <Button className="gradient-primary">
                    Voir plus d'actualités
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default ArticleRead;
