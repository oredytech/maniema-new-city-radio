
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import { Card } from '@/components/ui/card';
import { Clock, User, MapPin } from 'lucide-react';

const Actualites = () => {
  const actualites = [
    {
      id: 1,
      titre: "Développement des infrastructures routières au Maniema",
      contenu: "La province du Maniema bénéficie d'un nouveau programme de réhabilitation des routes financé par le PNUD. Les travaux ont débuté dans le territoire de Kasongo.",
      auteur: "Équipe RTCMNC",
      date: "15 Janvier 2025",
      lieu: "Kasongo"
    },
    {
      id: 2,
      titre: "Campagne de vaccination contre la rougeole",
      contenu: "Le ministère de la santé lance une campagne de vaccination gratuite contre la rougeole dans tous les territoires de la province. La campagne durera 15 jours.",
      auteur: "Équipe RTCMNC",
      date: "12 Janvier 2025",
      lieu: "Kindu"
    },
    {
      id: 3,
      titre: "Nouveau marché communautaire à Punia",
      contenu: "Les habitants du territoire de Punia inaugurent un nouveau marché communautaire construit grâce aux cotisations des commerçants locaux.",
      auteur: "Équipe RTCMNC",
      date: "10 Janvier 2025",
      lieu: "Punia"
    },
    {
      id: 4,
      titre: "Formation des jeunes entrepreneurs",
      contenu: "L'ONG ACODESPVE organise une session de formation en entrepreneuriat pour les jeunes de Kindu. L'inscription est gratuite et ouverte à tous.",
      auteur: "Équipe RTCMNC",
      date: "8 Janvier 2025",
      lieu: "Kindu"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Actualités</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Restez informés avec les dernières nouvelles de la province du Maniema
              et de la région
            </p>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {actualites.map((article) => (
                <Card key={article.id} className="p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gradient mb-3 md:mb-0 flex-1">
                      {article.titre}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{article.lieu}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.auteur}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {article.contenu}
                  </p>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Card className="p-8 max-w-2xl mx-auto gradient-primary">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Vous avez une information à partager ?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Contactez notre équipe de rédaction pour nous faire part de vos actualités locales
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">📞</span>
                    <span>+243 812 543 985</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">✉️</span>
                    <span>radiomaniemanewcity@gmail.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default Actualites;
