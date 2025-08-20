
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import { Card } from '@/components/ui/card';
import { Radio, Users, MapPin, Clock } from 'lucide-react';

const EnDirect = () => {
  useEffect(() => {
    // Auto-start radio when accessing this page
    const event = new CustomEvent('startRadio');
    window.dispatchEvent(event);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">En Direct</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Écoutez RTCMNC en direct sur 97.4 MHz depuis Kindu, 
              diffusant pour toute la province du Maniema
            </p>
          </div>
        </section>

        {/* Live Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center card-hover gradient-primary">
                <Radio className="h-10 w-10 mx-auto mb-4 text-primary-foreground" />
                <h3 className="font-bold text-primary-foreground mb-2">97.4 MHz</h3>
                <p className="text-sm text-primary-foreground/80">Fréquence FM</p>
              </Card>
              
              <Card className="p-6 text-center card-hover gradient-secondary">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-secondary-foreground" />
                <h3 className="font-bold text-secondary-foreground mb-2">7 Territoires</h3>
                <p className="text-sm text-secondary-foreground/80">Couverture Province</p>
              </Card>
              
              <Card className="p-6 text-center card-hover gradient-accent">
                <Users className="h-10 w-10 mx-auto mb-4 text-accent-foreground" />
                <h3 className="font-bold text-accent-foreground mb-2">Communautaire</h3>
                <p className="text-sm text-accent-foreground/80">Radio Locale</p>
              </Card>
              
              <Card className="p-6 text-center card-hover">
                <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">24h/24</h3>
                <p className="text-sm text-muted-foreground">Service Continu</p>
              </Card>
            </div>

            {/* Program Schedule */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
                Grille des Programmes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Programmes Matinaux</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Journal du Matin</span>
                      <span className="text-muted-foreground">06:00 - 07:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Réveil Maniema</span>
                      <span className="text-muted-foreground">07:00 - 09:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Musique & Info</span>
                      <span className="text-muted-foreground">09:00 - 12:00</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Programmes Après-midi</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Journal de Midi</span>
                      <span className="text-muted-foreground">12:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Débat Citoyen</span>
                      <span className="text-muted-foreground">15:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Musique Locale</span>
                      <span className="text-muted-foreground">16:00 - 18:00</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default EnDirect;
