
import { Heart, Radio } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/6c5a1a81-d187-4ef3-a865-11492f0b9f9a.png" 
              alt="RTCMNC Logo" 
              className="h-8 w-auto"
            />
            <div>
              <h3 className="font-bold text-gradient">RTCMNC</h3>
              <p className="text-xs text-muted-foreground">97.4 MHz</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>Développé avec</span>
              <Heart className="h-4 w-4 text-rtcmnc-red fill-current" />
              <span>pour la communauté du Maniema</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2024 RTCMNC - Tous droits réservés
            </p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Radio className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-gradient">
              En direct 24h/24
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
