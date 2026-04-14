import './App.css';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Welcome from './components/Welcome';
import Proposal from './proposal/page';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Foooter';

function App() {
  return (
    <div>
      <Proposal />
      <EmblaCarousel slides={Array.from(Array(5).keys())} options={{ loop: true }} />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
