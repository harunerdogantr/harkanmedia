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
import FacebookAds from './pages/FacebookAds';
import GoogleAds from './pages/GoogleAds';
import ABTest from './pages/ABTest';
import DataAnalysis from './pages/DataAnalysis';
import DomainHosting from './pages/DomainHosting';
import Reporting from './pages/Reporting';
import SoftwareConsulting from './pages/SoftwareConsulting';
import DataModeling from './pages/DataModeling';

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
              <Contact />
            </>
          } />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/partnerlerimiz" element={<Partners />} />
          <Route path="/facebook-reklam-optimizasyonu" element={<FacebookAds />} />
          <Route path="/google-ads-optimizasyonu" element={<GoogleAds />} />
          <Route path="/ab-testi" element={<ABTest />} />
          <Route path="/veri-analizi" element={<DataAnalysis />} />
          <Route path="/domain-hosting" element={<DomainHosting />} />
          <Route path="/raporlama" element={<Reporting />} />
          <Route path="/yazilim-danismanligi" element={<SoftwareConsulting />} />
          <Route path="/veri-modelleme" element={<DataModeling />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;