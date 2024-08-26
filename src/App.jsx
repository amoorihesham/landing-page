import Header from './components/header/Header';
import BrifSection from './components/brif-section/BrifSection';
import ServicesSection from './components/service-section/ServicesSection';
import AboutSection from './components/about-section/AboutSection';
import Testimoniels from './components/testimoniels/Testimoniels';

function App() {
  window.dataLayer.push({
    event:'pageview',
    page:{
      url:'http://localhost:5173/',
      title:'Home'
    }
  })
  console.log(window.dataLayer)
  return (
    
     <>
      <Header />
      <BrifSection/>
      <ServicesSection/>
      <AboutSection/>
      <Testimoniels/>
     </>
    
  );
}

export default App;
