
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface CommentFormProps {
  articleId: number;
}

const CommentForm = ({ articleId }: CommentFormProps) => {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.author || !formData.email || !formData.content) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the comment to WordPress API
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Commentaire envoyé avec succès! Il sera publié après modération.');
      setFormData({ author: '', email: '', content: '' });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du commentaire');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="p-6 mt-8">
      <h3 className="text-lg font-bold mb-4 text-gradient">Laisser un commentaire</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="author">Nom *</Label>
            <Input
              id="author"
              name="author"
              type="text"
              required
              value={formData.author}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="content">Commentaire *</Label>
          <Textarea
            id="content"
            name="content"
            required
            rows={5}
            value={formData.content}
            onChange={handleChange}
            placeholder="Votre commentaire..."
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="gradient-primary"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Publier le commentaire'}
        </Button>
      </form>
      
      <p className="text-sm text-muted-foreground mt-4">
        Votre commentaire sera publié après modération.
      </p>
    </Card>
  );
};

export default CommentForm;
