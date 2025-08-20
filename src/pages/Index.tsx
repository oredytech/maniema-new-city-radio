
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-[50px]">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default Index;
