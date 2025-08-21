
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FixedRadioPlayer from '../components/FixedRadioPlayer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pb-[50px]">
        <ContactSection />
      </main>
      <FixedRadioPlayer />
      <Footer />
    </div>
  );
};

export default Contact;
