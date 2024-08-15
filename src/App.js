import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import JoinSection from './Components/JoinSection/JoinSection';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PlansSection from './Components/PlansSection/PlansSection';
import Spacer from './Components/Spacer/Spacer';
import TrainSection from './Components/TrainSection/TrainSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <AboutSection />
      <Spacer />
      <FeaturesSection />
      <JoinSection />
      <PlansSection />
      <TrainSection />
      <ContactSection />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
