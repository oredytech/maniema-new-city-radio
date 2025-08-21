
import { useWordPressArticles } from '@/hooks/useWordPressArticles';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate, stripHtml } from '@/utils/articleUtils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Loader2 } from 'lucide-react';

const HeroNewsSection = () => {
  const { data: articles, isLoading, error } = useWordPressArticles(8);

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">À LA UNE</span>
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

  const sliderArticles = articles.slice(0, 3);
  const gridArticles = articles.slice(3, 7);

  const ArticleCard = ({ article, isLarge = false }: { article: any, isLarge?: boolean }) => {
    const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const altText = article._embedded?.['wp:featuredmedia']?.[0]?.alt_text || article.title.rendered;
    
    return (
      <Link to={`/article/${article.slug}`} className="block h-full">
        <Card className="overflow-hidden card-hover h-full relative">
          <div className={`${isLarge ? 'aspect-[16/10]' : 'aspect-video'} overflow-hidden relative`}>
            {featuredImage ? (
              <img
                src={featuredImage}
                alt={altText}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
            )}
            
            {/* Overlay avec le contenu */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              {/* Badge catégorie */}
              <div className="mb-2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold uppercase">
                  TOTALEMENT SPORT
                </span>
              </div>
              
              {/* Titre */}
              <h3 
                className={`text-white font-bold mb-2 line-clamp-2 ${isLarge ? 'text-xl' : 'text-sm'}`}
                dangerouslySetInnerHTML={{ __html: article.title.rendered }}
              />
              
              {/* Date et auteur */}
              <div className="flex items-center text-white/80 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">À LA UNE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Slider à gauche */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {sliderArticles.map((article) => (
                  <CarouselItem key={article.id}>
                    <ArticleCard article={article} isLarge={true} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Grille 2x2 à droite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gridArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewsSection;
