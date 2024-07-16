import ButtonGradient from './assets/svg/ButtonGradient'
import Header from '../src/components/Header'
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Colloration from './components/Colloration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return(
    <>
      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Benefits/>
        <Colloration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
