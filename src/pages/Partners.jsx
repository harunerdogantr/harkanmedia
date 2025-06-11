import React from 'react';
import { Helmet } from 'react-helmet-async';

function Partners() {
  return (
    <>
      <Helmet>
        <title>Partnerlerimiz - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Harkan Media'nın güçlü partner ağı. Google, Facebook, Instagram ve diğer önde gelen dijital platformlarla stratejik iş birliklerimizle işletmenizi bir adım öne taşıyoruz." />
        <meta name="keywords" content="Harkan Media partnerleri, Google partner, Facebook partner, Instagram partner, dijital pazarlama partnerleri, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/partnerlerimiz" />
        <meta property="og:title" content="Partnerlerimiz - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Harkan Media'nın güçlü partner ağı ile dijital dünyada öne çıkın." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/partnerlerimiz" />
        <meta property="twitter:title" content="Partnerlerimiz - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Harkan Media'nın güçlü partner ağı ile dijital dünyada öne çıkın." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/partnerlerimiz" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Partnerlerimiz</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Partnerlerimiz</span>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <div className="red-bar" style={{ width: '48px', height: '4px', background: '#FF3C22', marginBottom: '24px' }}></div>
            <h1 style={{ 
              fontSize: '48px',
              fontWeight: '900',
              color: '#333333',
              margin: '0 0 16px 0'
            }}>
              Partnerlerimiz
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Birlikte çalıştığımız iş ortaklarımız.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '64px' }}>
              <div style={{ flex: 1, maxWidth: 500, textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#FF3C22', marginBottom: '24px' }}>
                  <img src="/images/google-icon.svg" alt="Google Partner" style={{ width: '48px', height: '48px' }} />
                </div>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Google Partner
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6, textAlign: 'center' }}>
                  Dijital pazarlamaya yaptığınız yatırım önemlidir. Güvenebileceğiniz bir dijital pazarlama ajansı arıyorsanız Google Partner buna erişmenizi sağlıyor. Bizimle çalışmayı tercih ettiğinizde, dijital pazarlama alanında kanıtlanmış uzmanlığa ve yetkinliğe sahip bir ekiple çalışıyorsunuz. Ayrıca size daha iyi sonuçlar sunmak için özel bir Google ekibiyle de yakın iş birliği yapıyoruz.
                </p>
              </div>

              <div style={{ flex: 1, maxWidth: 500, textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#FF3C22', marginBottom: '24px' }}>
                  <img src="/images/facebook-icon.svg" alt="Facebook Business Partner" style={{ width: '48px', height: '48px' }} />
                </div>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Facebook Business Partner
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6, textAlign: 'center' }}>
                  Facebook Business Partner olarak Facebook'un sadece belirli ajanslara sunduğu eğitimlere, programlara ve özel kaynaklara sahibiz. Müşterilerimize, ajansımızın tecrübesinin yanı sıra Facebook'un en iyi uygulamalarını ve uzmanlarının önerilerini de sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;