
import RadioPlayer from './RadioPlayer';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Radio } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">RTCMNC</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">
                  Radio Communautaire Maniema New City
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Votre radio, votre voix, votre développement. 
                Diffusant depuis Kindu sur 97.4 MHz pour toute la province du Maniema.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center card-hover gradient-primary">
                <Radio className="h-8 w-8 mx-auto mb-2 text-primary-foreground" />
                <p className="font-bold text-primary-foreground">97.4 MHz</p>
                <p className="text-sm text-primary-foreground/80">Fréquence</p>
              </Card>
              <Card className="p-4 text-center card-hover gradient-secondary">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-secondary-foreground" />
                <p className="font-bold text-secondary-foreground">7 Territoires</p>
                <p className="text-sm text-secondary-foreground/80">Couverture</p>
              </Card>
              <Card className="p-4 text-center card-hover gradient-accent">
                <Users className="h-8 w-8 mx-auto mb-2 text-accent-foreground" />
                <p className="font-bold text-accent-foreground">Depuis 2021</p>
                <p className="text-sm text-accent-foreground/80">En Service</p>
              </Card>
            </div>
          </div>

          {/* Right Column - Radio Player */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <RadioPlayer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
