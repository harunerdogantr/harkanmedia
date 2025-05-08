import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [optimizasyonOpen, setOptimizasyonOpen] = useState(false);
  const [veriAnaliziOpen, setVeriAnaliziOpen] = useState(false);
  const [hizmetlerimizOpen, setHizmetlerimizOpen] = useState(false);
  const [googleReklamOpen, setGoogleReklamOpen] = useState(false);

  // UseRef for dropdown timeouts
  const dropdownTimeout = useRef();
  const whatWeDoTimeout = useRef();
  const hizmetlerimizTimeout = useRef();

  const downArrowSVG = (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo-area" style={{ textDecoration: 'none' }}>
        <div className="logo-text">
          <span className="logo-title">HARKAN MEDYA</span>
          <span className="logo-subtitle">YAZILIM & DANIŞMANLIK</span>
        </div>
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <div
          className="nav-item-dropdown-wrapper"
          onMouseEnter={() => {
            clearTimeout(dropdownTimeout.current);
            setDropdownOpen(true);
          }}
          onMouseLeave={() => {
            dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
          }}
        >
          <div className="nav-item">
            <Link to="/hakkimizda">Bizi Tanıyın {downArrowSVG}</Link>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/hakkimizda">Hakkımızda</Link>
              <Link to="/partnerlerimiz">Partnerlerimiz</Link>
            </div>
          )}
        </div>

        <div
          className="nav-item-dropdown-wrapper"
          onMouseEnter={() => {
            clearTimeout(whatWeDoTimeout.current);
            setWhatWeDoOpen(true);
          }}
          onMouseLeave={() => {
            whatWeDoTimeout.current = setTimeout(() => {
              setWhatWeDoOpen(false);
              setOptimizasyonOpen(false);
              setVeriAnaliziOpen(false);
            }, 200);
          }}
        >
          <div className="nav-item">
            <Link to="/#what-we-do">Neler Yapıyoruz ? {downArrowSVG}</Link>
          </div>
          {whatWeDoOpen && (
            <div className="dropdown-menu">
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setOptimizasyonOpen(true)}
                onMouseLeave={() => setOptimizasyonOpen(false)}
              >
                <Link to="/#optimizasyon">
                  Optimizasyon
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }}
                  >
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {optimizasyonOpen && (
                  <div className="dropdown-menu right">
                    <Link to="/facebook-reklam-optimizasyonu">Facebook Reklamları Optimizasyonu</Link>
                    <Link to="/google-ads-optimizasyonu">Google Ads Optimizasyonu</Link>
                  </div>
                )}
              </div>
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setVeriAnaliziOpen(true)}
                onMouseLeave={() => setVeriAnaliziOpen(false)}
              >
                <Link to="/#veri-analizi">
                  Veri Analizi
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }}
                  >
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {veriAnaliziOpen && (
                  <div className="dropdown-menu right">
                    <Link to="/veri-analizi">Veri Analizi</Link>
                    <Link to="/ab-testi">A / B Testi</Link>
                    <Link to="/veri-modelleme">Veri Modelleme</Link>
                  </div>
                )}
              </div>
              <Link to="/domain-hosting">Domain & Hosting Yönetimi</Link>
              <Link to="/yazilim-danismanligi">Yazılım Danışmanlığı</Link>
              <Link to="/raporlama">Raporlama</Link>
            </div>
          )}
        </div>

        <div
          className="nav-item-dropdown-wrapper"
          onMouseEnter={() => {
            clearTimeout(hizmetlerimizTimeout.current);
            setHizmetlerimizOpen(true);
          }}
          onMouseLeave={() => {
            hizmetlerimizTimeout.current = setTimeout(() => {
              setHizmetlerimizOpen(false);
              setGoogleReklamOpen(false);
            }, 200);
          }}
        >
          <div className="nav-item">
            <Link to="/#services">Hizmetlerimiz {downArrowSVG}</Link>
          </div>
          {hizmetlerimizOpen && (
            <div className="dropdown-menu">
              <Link to="/arama-optimizasyonu">Arama Motoru Optimizasyonu</Link>
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setGoogleReklamOpen(true)}
                onMouseLeave={() => setGoogleReklamOpen(false)}
              >
                <Link to="/#google-reklam">
                  Google Reklamları
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }}
                  >
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {googleReklamOpen && (
                  <div className="dropdown-menu right">
                    <Link to="/facebook-reklam-optimizasyonu">Facebook Reklamları</Link>
                    <Link to="/instagram-reklam-optimizasyonu">Instagram Reklamları</Link>
                    <Link to="/linkedin-reklam-optimizasyonu">LinkedIn Reklamları</Link>
                  </div>
                )}
              </div>
              <Link to="/sosyal-medya-reklamlari">Sosyal Medya Reklamları</Link>
              <Link to="/#local-seo">Google Local SEO</Link>
              <Link to="/#iys">İYS Çözümleri</Link>
              <Link to="/#dijital-pazarlama">Dijital Pazarlama</Link>
              <Link to="/#web-analitik">Web Analitiği</Link>
              <Link to="/#mobil-analitik">Mobil Analitiği</Link>
              <Link to="/#tum-hizmetler">Tüm Hizmetlerimiz</Link>
            </div>
          )}
        </div>

        <Link to="/#portfolio">Çalışmalarımız</Link>
        <Link to="/#contact">İletişim</Link>
      </div>

      <button className="offer-btn">
        <span className="offer-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M22 2L11 13"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
          </svg>
        </span>
        TEKLİF İSTE
      </button>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar; 