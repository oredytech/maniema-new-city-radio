
import { Card } from '@/components/ui/card';
import { Heart, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Mission Communautaire",
      description: "Fondée en 2021 par l'engagement collectif de nos membres, nous servons les communautés du Maniema avec passion.",
      gradient: "gradient-primary"
    },
    {
      icon: Target,
      title: "Couverture Étendue",
      description: "Diffusant depuis Kindu sur 97.4 MHz, nous atteignons les 7 territoires de la province du Maniema.",
      gradient: "gradient-secondary"
    },
    {
      icon: Users,
      title: "Équipe Dévouée",
      description: "9 agents dévoués travaillent ensemble pour offrir une programmation de qualité à nos auditeurs.",
      gradient: "gradient-accent"
    },
    {
      icon: Award,
      title: "Partenariats Stratégiques",
      description: "Collaborations avec GIZ, SANRU, IMA, PDDRSS, et PNUD pour un impact communautaire renforcé.",
      gradient: "gradient-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            À Propos de RTCMNC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Radio Communautaire Maniema New City est une station innovante qui joue un rôle clé 
            dans l'information et la sensibilisation des communautés locales de la province du Maniema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`p-6 text-center card-hover ${feature.gradient}`}>
                <Icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-muted/30 border-2 border-primary/20">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gradient mb-6">Notre Histoire</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Fondation et Mission :</strong> Maniema New City est une radio communautaire innovante 
                  fondée le 9 septembre 2021 grâce à l'engagement collectif de ses membres et un autofinancement 
                  via leurs cotisations. Supportée par l'ONG ACODESPVE, sous la direction de Me Albati Bendera Aristote.
                </p>
                
                <p>
                  <strong>Couverture et Diffusion :</strong> Émettant depuis Kindu, le chef-lieu de la province 
                  du Maniema, sur la fréquence 97.4 MHz, nous atteignons tous les coins de la province en étant 
                  représentée dans les 7 territoires : Kasongo, Kailo, Kabambare, Kibombo, Punia, Pangi, et Lubutu.
                </p>
                
                <p>
                  <strong>Vision et Impact :</strong> Notre objectif demeure clair : être la voix des communautés 
                  vulnérables et promouvoir le développement local à travers des informations pertinentes et des 
                  initiatives de sensibilisation.
                </p>
              </div>

              <div className="text-center pt-6">
                <p className="text-xl font-bold text-gradient">
                  "Maniema New City : Votre radio, votre voix, votre développement."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
