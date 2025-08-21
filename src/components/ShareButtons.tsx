
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Facebook, Twitter, Linkedin, Link, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Lien copié dans le presse-papier!');
    } catch (err) {
      toast.error('Erreur lors de la copie du lien');
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <Card className="p-6 mt-8">
      <h3 className="text-lg font-bold mb-4 text-gradient">Partager cet article</h3>
      <div className="flex flex-wrap gap-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleShare('facebook')}
          className="flex items-center gap-2"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleShare('twitter')}
          className="flex items-center gap-2"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleShare('email')}
          className="flex items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          Email
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={copyToClipboard}
          className="flex items-center gap-2"
        >
          <Link className="h-4 w-4" />
          Copier le lien
        </Button>
      </div>
    </Card>
  );
};

export default ShareButtons;
