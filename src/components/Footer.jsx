import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-company">
          <div className="footer-branding">
            <img src="/images/harkan-logo.png" alt="Harkan Medya" className="footer-logo" />
            <p className="footer-description">
              Harkan Yazılım, Medya ve Danışmanlık
            </p>
          </div>
          
          <div className="footer-certifications">
            <p className="footer-drd-text">
              Dijital Reklamcılar Derneği Üyesidir.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-title">İletişim</h3>
          <div className="footer-links">
            <a href="tel:08503030493" className="footer-link">0850 303 04 93</a>
            <a href="mailto:info@harkanmedya.com" className="footer-link">info@harkanmedya.com</a>
            <a href="#adres" className="footer-link">Adresimiz</a>
          </div>
          <button className="footer-contact-btn">İLETİŞİME GEÇİN</button>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-title">Hizmetlerimiz</h3>
          <div className="footer-links">
            <a href="#google-ads" className="footer-link">Google Reklamları</a>
            <a href="#seo" className="footer-link">SEO</a>
            <a href="#digital-marketing" className="footer-link">Dijital Pazarlama</a>
            <a href="#mobile-analytics" className="footer-link">Mobil Analitiği</a>
            <a href="#all-services" className="footer-link">Tüm Hizmetlerimiz</a>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3 className="footer-title">Destek</h3>
          <div className="footer-links">
            <a href="#outlook" className="footer-link">Outlook Mail Kurulum</a>
            <a href="#android" className="footer-link">Android Kurulum Ayarları</a>
            <a href="#ios" className="footer-link">İOS Kurulum Ayarları</a>
            <a href="#privacy" className="footer-link">Gizlilik Politikası</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        
        <p className="footer-copyright">© 2025 Harkan Yazılım, Medya ve Danışmanlık</p>
        <p className="footer-rights">Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer; 