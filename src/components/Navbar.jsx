import { useState, useRef } from 'react';

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
      <div className="logo-area">
        <div className="logo-text">
          <span className="logo-title">HARKAN MEDYA</span>
          <span className="logo-subtitle">YAZILIM & DANIŞMANLIK</span>
        </div>
      </div>
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
            <a href="#about">Bizi Tanıyın {downArrowSVG}</a>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#hakkimizda">Hakkımızda</a>
              <a href="#partnerlerimiz">Partnerlerimiz</a>
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
            <a href="#what-we-do">Neler Yapıyoruz ? {downArrowSVG}</a>
          </div>
          {whatWeDoOpen && (
            <div className="dropdown-menu">
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setOptimizasyonOpen(true)}
                onMouseLeave={() => setOptimizasyonOpen(false)}
              >
                <a href="#optimizasyon">
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
                </a>
                {optimizasyonOpen && (
                  <div className="dropdown-menu right">
                    <a href="#facebook">Facebook Reklamları Optimizasyonu</a>
                    <a href="#google">Google Ads Optimizasyonu</a>
                  </div>
                )}
              </div>
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setVeriAnaliziOpen(true)}
                onMouseLeave={() => setVeriAnaliziOpen(false)}
              >
                <a href="#veri-analizi">
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
                </a>
                {veriAnaliziOpen && (
                  <div className="dropdown-menu right">
                    <a href="#ab-testi">A / B Testi</a>
                    <a href="#veri-analizi-2">Veri Analizi</a>
                    <a href="#tahminleme">Tahminleme Modelleri</a>
                  </div>
                )}
              </div>
              <a href="#domain-hosting">Domain & Hosting Yönetimi</a>
              <a href="#yazilim-danismanligi">Yazılım Danışmanlığı</a>
              <a href="#raporlama">Raporlama</a>
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
            <a href="#services">Hizmetlerimiz {downArrowSVG}</a>
          </div>
          {hizmetlerimizOpen && (
            <div className="dropdown-menu">
              <a href="#seo">Arama Motoru Optimizasyonu</a>
              <div 
                className="dropdown-submenu"
                onMouseEnter={() => setGoogleReklamOpen(true)}
                onMouseLeave={() => setGoogleReklamOpen(false)}
              >
                <a href="#google-reklam">
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
                </a>
                {googleReklamOpen && (
                  <div className="dropdown-menu right">
                    <a href="#facebook-reklam">Facebook Reklamları</a>
                    <a href="#instagram-reklam">Instagram Reklamları</a>
                    <a href="#linkedin-reklam">Linkedin Reklamları</a>
                  </div>
                )}
              </div>
              <a href="#sosyal-medya">Sosyal Medya Reklamları</a>
              <a href="#local-seo">Google Local SEO</a>
              <a href="#iys">İYS Çözümleri</a>
              <a href="#dijital-pazarlama">Dijital Pazarlama</a>
              <a href="#web-analitik">Web Analitiği</a>
              <a href="#mobil-analitik">Mobil Analitiği</a>
              <a href="#tum-hizmetler">Tüm Hizmetlerimiz</a>
            </div>
          )}
        </div>

        <a href="#portfolio">Çalışmalarımız</a>
        <a href="#contact">İletişim</a>
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