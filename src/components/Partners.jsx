import React from 'react';

function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <div className="partners-title-bar" />
        <h2 className="partners-title">Partnerlerimiz</h2>
        <p className="partners-subtitle">Birlikte çalıştığımız iş ortaklarımız.</p>
      </div>
      <div className="partners-logos">
        <img
          src="https://torkmedya.com/wp-content/uploads/2024/09/google-partner_tork-medya.png"
          alt="Google Partner"
          className="partner-logo google-partner"
        />
        <div className="partner-logo meta-partner">
          <img
            src="https://torkmedya.com/wp-content/uploads/2024/09/tork-medya-partner-meta-logo.webp"
            alt="Meta"
            className="meta-icon"
          />
          <div className="meta-text">
            <span className="meta-title">Meta</span>
            <span className="meta-subtitle">Business Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners; 