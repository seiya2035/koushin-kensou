import './App.css';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Welcome from './components/Welcome';
import Proposal from './proposal/page';

function App() {
  return (
    <div>
      <Proposal />
      <EmblaCarousel slides={Array.from(Array(5).keys())} />

    </div>
  );
}



export default App;
