
import { Heart, Radio, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 mb-4">
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
                <h3 className="font-bold text-rtcmnc-gold">RTCMNC</h3>
                <p className="text-xs text-gray-400">97.4 MHz</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Votre radio communautaire diffusant depuis Kindu pour toute la province du Maniema.
            </p>
            <div className="flex items-center space-x-2">
              <Radio className="h-4 w-4 text-rtcmnc-gold" />
              <span className="text-sm font-medium text-rtcmnc-gold">
                En direct 24h/24
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4 text-rtcmnc-gold">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-rtcmnc-gold transition-colors">
                Accueil
              </Link>
              <Link to="/en-direct" className="block text-sm text-gray-300 hover:text-rtcmnc-gold transition-colors">
                En Direct
              </Link>
              <Link to="/actualites" className="block text-sm text-gray-300 hover:text-rtcmnc-gold transition-colors">
                Actualités
              </Link>
              <Link to="/#about" className="block text-sm text-gray-300 hover:text-rtcmnc-gold transition-colors">
                À propos
              </Link>
              <Link to="/#contact" className="block text-sm text-gray-300 hover:text-rtcmnc-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-rtcmnc-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-rtcmnc-gold" />
                <div>
                  <p className="text-gray-300">+243 812 543 985</p>
                  <p className="text-gray-300">+243 852 960 108</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-rtcmnc-gold" />
                <p className="text-gray-300">radiomaniemanewcity@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-rtcmnc-gold mt-0.5" />
                <p className="text-gray-300">
                  08 Lumumba bis, commune de Kasuku, ville de Kindu
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-rtcmnc-gold">Suivez-nous</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-rtcmnc-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rtcmnc-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rtcmnc-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-sm text-white">Programmes populaires</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• Journal du Matin (06:00)</p>
                <p>• Débat Citoyen (15:00)</p>
                <p>• Musique Locale (16:00)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                Copyright 2025 RTCMNC, Tous droits réservés | Fièrement conçu par{' '}
                <a 
                  href="https://oredytech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rtcmnc-gold hover:text-rtcmnc-gold/80 font-medium transition-colors"
                >
                  Oredy TECHNOLOGIES
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-300">Développé avec</span>
              <Heart className="h-4 w-4 text-rtcmnc-red fill-current" />
              <span className="text-sm text-gray-300">pour le Maniema</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
