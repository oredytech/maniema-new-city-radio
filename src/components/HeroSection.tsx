
import { Button } from '@/components/ui/button';
import { Radio, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
          {/* Hero Content - Centered */}
          <div className="space-y-8 max-w-4xl">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient">RTCMNC</span>
                <br />
                <span className="text-2xl md:text-3xl text-white/90">
                  Radio Communautaire Maniema New City
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Votre radio, votre voix, votre développement. 
                Diffusant depuis Kindu sur 97.4 MHz pour toute la province du Maniema.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/en-direct">
                <Button 
                  size="lg" 
                  className="gradient-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Radio className="h-6 w-6 mr-3" />
                  En Direct
                </Button>
              </Link>
              
              <Link to="/actualites">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/20 backdrop-blur border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <Newspaper className="h-6 w-6 mr-3" />
                  Actualités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
