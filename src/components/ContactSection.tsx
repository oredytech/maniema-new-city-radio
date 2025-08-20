
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["08 Lumumba bis", "Commune de Kasuku", "Ville de Kindu", "Province du Maniema"],
      gradient: "gradient-primary"
    },
    {
      icon: Phone,
      title: "Téléphones",
      details: ["+243 812 543 985", "+243 852 960 108"],
      gradient: "gradient-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["radiomaniemanewcity@gmail.com"],
      gradient: "gradient-accent"
    },
    {
      icon: Clock,
      title: "Fréquence",
      details: ["97.4 MHz FM", "24h/24 - 7j/7"],
      gradient: "gradient-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Contactez-Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question 
            ou collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className={`p-6 text-center card-hover ${info.gradient}`}>
                <Icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-bold text-white mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/90 text-sm">{detail}</p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-muted/30 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Rejoignez Notre Communauté
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                RTCMNC est plus qu'une radio, c'est un pont entre les communautés du Maniema. 
                Contactez-nous pour des partenariats, des collaborations ou simplement pour partager vos idées.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="gradient-primary hover:scale-105 transition-transform"
                  onClick={() => window.location.href = 'mailto:radiomaniemanewcity@gmail.com'}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Envoyez-nous un Email
                </Button>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = 'tel:+243812543985'}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +243 812 543 985
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = 'tel:+243852960108'}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +243 852 960 108
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
