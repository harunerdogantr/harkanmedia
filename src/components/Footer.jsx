import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo ve Şirket Bilgileri */}
        <div className="footer-company">
          <img src="/logo.png" alt="Tork Medya" className="footer-logo" />
          <p className="footer-description">
            Tork Yazılım, Medya ve Danışmanlık
          </p>
          <img 
            src="/drd-logo.png" 
            alt="Dijital Reklamcılar Derneği" 
            className="footer-drd-logo" 
          />
          <p className="footer-drd-text">
            Dijital Reklamcılar Derneği Üyesidir.
          </p>
          <div className="footer-social">
            <a href="#instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#linkedin" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="footer-section">
          <h3 className="footer-title">İletişim</h3>
          <div className="footer-links">
            <a href="tel:08503030493" className="footer-link">
              <i className="fas fa-phone"></i>
              0850 303 04 93
            </a>
            <a href="mailto:info@torkmedya.com" className="footer-link">
              <i className="fas fa-envelope"></i>
              info@torkmedya.com
            </a>
            <a href="#adres" className="footer-link">
              <i className="fas fa-map-marker-alt"></i>
              Adresimiz
            </a>
          </div>
          <button className="footer-contact-btn">
            <i className="fas fa-comments"></i>
            İLETİŞİME GEÇİN
          </button>
        </div>

        {/* Hizmetlerimiz */}
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

        {/* Destek */}
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

      {/* Alt Footer */}
      <div className="footer-bottom">
        <p className="footer-copyright">Tüm Hakları Saklıdır.</p>
        <p className="footer-brand">© 2024 Tork Yazılım, Medya ve Danışmanlık</p>
      </div>
    </footer>
  );
}

export default Footer; 