import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
import SearchOptimization from './pages/SearchOptimization';
import InstagramAds from './pages/InstagramAds';
import LinkedInAds from './pages/LinkedInAds';
import SocialMediaAds from './pages/SocialMediaAds';
import GoogleLocalSeo from './pages/GoogleLocalSeo';
import IysCozumleri from './pages/IysCozumleri';
import DijitalPazarlama from './pages/DijitalPazarlama';
import WebAnalitik from './pages/WebAnalitik';
import MobilAnalitik from './pages/MobilAnalitik';
import Calismalarimiz from './pages/Calismalarimiz';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
            <Route path="/arama-optimizasyonu" element={<SearchOptimization />} />
            <Route path="/instagram-reklam-optimizasyonu" element={<InstagramAds />} />
            <Route path="/linkedin-reklam-optimizasyonu" element={<LinkedInAds />} />
            <Route path="/sosyal-medya-reklamlari" element={<SocialMediaAds />} />
            <Route path="/google-local-seo" element={<GoogleLocalSeo />} />
            <Route path="/iys-cozumleri" element={<IysCozumleri />} />
            <Route path="/dijital-pazarlama" element={<DijitalPazarlama />} />
            <Route path="/web-analitik" element={<WebAnalitik />} />
            <Route path="/mobil-analitik" element={<MobilAnalitik />} />
            <Route path="/calismalarimiz" element={<Calismalarimiz />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;