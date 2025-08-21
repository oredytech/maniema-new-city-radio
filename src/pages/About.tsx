
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        <AboutSection />
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default About;
