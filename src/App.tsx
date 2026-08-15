import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Worries from './components/worries/Worries';
import Solution from './components/solution/Solution';
import Reasons from './components/reasons/Reasons';
import Voices from './components/voices/Voices';
import CtaBand from './components/cta/CtaBand';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Proposal from './proposal/page';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Foooter';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Worries />
      <Solution />
      <Reasons />
      <Voices />
      <CtaBand />
      <Proposal />
      <EmblaCarousel slides={Array.from(Array(3).keys())} options={{ loop: true }} />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
