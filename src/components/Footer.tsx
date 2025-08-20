
import { Heart, Radio, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6c5a1a81-d187-4ef3-a865-11492f0b9f9a.png" 
                alt="RTCMNC Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-gradient">RTCMNC</h3>
                <p className="text-xs text-muted-foreground">97.4 MHz</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre radio communautaire diffusant depuis Kindu pour toute la province du Maniema.
            </p>
            <div className="flex items-center space-x-2">
              <Radio className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gradient">
                En direct 24h/24
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4 text-gradient">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/en-direct" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                En Direct
              </Link>
              <Link to="/actualites" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Actualités
              </Link>
              <Link to="/#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link to="/#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-gradient">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-muted-foreground">+243 812 543 985</p>
                  <p className="text-muted-foreground">+243 852 960 108</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-muted-foreground">radiomaniemanewcity@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p className="text-muted-foreground">
                  08 Lumumba bis, commune de Kasuku, ville de Kindu
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-gradient">Suivez-nous</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-sm">Programmes populaires</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Journal du Matin (06:00)</p>
                <p>• Débat Citoyen (15:00)</p>
                <p>• Musique Locale (16:00)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                Copyright 2025 RTCMNC, Tous droits réservés | Fièrement conçu par{' '}
                <a 
                  href="https://oredytech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Oredy TECHNOLOGIES
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Développé avec</span>
              <Heart className="h-4 w-4 text-rtcmnc-red fill-current" />
              <span className="text-sm text-muted-foreground">pour le Maniema</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
