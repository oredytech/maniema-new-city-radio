
import { useQuery } from '@tanstack/react-query';

export interface WordPressArticle {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const fetchWordPressArticles = async (limit: number = 6): Promise<WordPressArticle[]> => {
  const response = await fetch(
    `https://mishapivoicetv.net/wp-json/wp/v2/posts?per_page=${limit}&_embed=wp:featuredmedia`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  return response.json();
};

const fetchWordPressArticle = async (slug: string): Promise<WordPressArticle> => {
  const response = await fetch(
    `https://mishapivoicetv.net/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  
  const articles = await response.json();
  if (articles.length === 0) {
    throw new Error('Article not found');
  }
  
  return articles[0];
};

export const useWordPressArticles = (limit: number = 6) => {
  return useQuery({
    queryKey: ['wordpress-articles', limit],
    queryFn: () => fetchWordPressArticles(limit),
  });
};

export const useWordPressArticle = (slug: string) => {
  return useQuery({
    queryKey: ['wordpress-article', slug],
    queryFn: () => fetchWordPressArticle(slug),
    enabled: !!slug,
  });
};
