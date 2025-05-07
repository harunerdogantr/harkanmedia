import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import References from './components/References';
import Services from './components/Services';
import Partners from './pages/Partners';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <References />
              <Services />
              <Partners />
              <Contact />
            </>
          } />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/partnerlerimiz" element={<Partners />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;