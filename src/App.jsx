import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import References from './components/References';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <References />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;