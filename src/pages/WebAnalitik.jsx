import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function WebAnalitik() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  return (
    <>
      <Helmet>
        <title>Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları, dönüşüm oranları ve trafik analizi ile dijital stratejilerinizi optimize edin." />
        <meta name="keywords" content="web analitiği, Google Analytics, kullanıcı davranışları, dönüşüm oranları, trafik analizi, web performansı, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/web-analitik" />
        <meta property="og:title" content="Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları ve dönüşüm oranları ile dijital stratejilerinizi optimize edin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/web-analitik" />
        <meta property="twitter:title" content="Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları ve dönüşüm oranları ile dijital stratejilerinizi optimize edin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/web-analitik" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Web Analitiği</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Web Analitiği</span>
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
              Web Analitiği
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Web sitenizin performansını detaylı olarak analiz ediyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Veri Toplama ve Analiz
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Google Analytics ve diğer analitik araçlarını profesyonel olarak 
                    kuruyoruz. Kullanıcı davranışlarını, trafik kaynaklarını ve site 
                    performansını detaylı olarak takip ediyoruz. Özelleştirilmiş 
                    raporlar ve dashboard'lar ile verilerinizi anlamlı bilgilere 
                    dönüştürüyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1721.jpg" 
                    alt="Veri Analizi" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/data-visualization-concept-illustration_114360-1722.jpg" 
                    alt="Kullanıcı Davranışları" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kullanıcı Davranış Analizi
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Kullanıcılarınızın site içi davranışlarını derinlemesine analiz 
                    ediyoruz. Isı haritaları, sayfa kaydırma analizleri ve tıklama 
                    takibi ile kullanıcı deneyimini optimize ediyoruz. Bounce rate 
                    ve exit page analizleri ile sorunlu noktaları tespit ediyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Dönüşüm Takibi ve Optimizasyon
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Hedef ve dönüşüm takibini profesyonel olarak yapılandırıyoruz. 
                    E-ticaret tracking, form takibi ve özel event'ler ile tüm önemli 
                    aksiyonları ölçümlüyoruz. Dönüşüm hunisi analizi ve mikro 
                    dönüşümlerin takibi ile satış sürecinizi optimize ediyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/conversion-optimization-concept-illustration_114360-1723.jpg" 
                    alt="Dönüşüm Optimizasyonu" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>
            </div>

            {/* Hadi Konuşalım Bölümü */}
            <div className="contact-section" style={{ marginTop: '96px' }}>
              <div className="contact-container">
                <div className="contact-content">
                  <div className="contact-title-bar" />
                  <h2 className="contact-title">
                    {currentStep === 1 ? "Hadi Konuşalım ?" : "Hazır Mısınız ?"}
                  </h2>
                  <p className="contact-subtitle">
                    {currentStep === 1 
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve web analitiği hizmetlerimiz hakkında bilgi alın."
                      : "Web analitiği ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
                    }
                  </p>

                  <div className="contact-steps">
                    <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
                      <div className="step-number">1</div>
                      <div className="step-text">Kişisel Bilgiler</div>
                    </div>
                    <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
                      <div className="step-number">2</div>
                      <div className="step-text">Hizmet Bilgisi Kurulumu</div>
                    </div>
                  </div>

                  {currentStep === 1 ? (
                    <form className="contact-form">
                      <input
                        type="email"
                        placeholder="E-Posta"
                        className="contact-input"
                      />
                      <input
                        type="text"
                        placeholder="İsim"
                        className="contact-input"
                      />
                      <input
                        type="tel"
                        placeholder="Telefon"
                        className="contact-input"
                      />
                      <div className="contact-buttons">
                        <div className="button-spacer"></div>
                        <button type="button" className="contact-button" onClick={handleNextStep}>
                          SIRADAKI ADIM
                          <span className="button-arrow">→</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form className="contact-form">
                      <textarea
                        placeholder="Mesajınız"
                        className="contact-textarea"
                        rows={6}
                      />
                      <div className="contact-checkbox">
                        <input type="checkbox" id="privacy" />
                        <label htmlFor="privacy">
                          Gizlilik Politikası'nı okudum ve kabul ediyorum.
                        </label>
                      </div>
                      <div className="contact-buttons">
                        <button type="button" className="contact-button secondary" onClick={handlePrevStep}>
                          <span className="button-arrow">←</span>
                          ÖNCEKİ ADIM
                        </button>
                        <button type="button" className="contact-button">
                          SIRADAKI ADIM
                          <span className="button-arrow">→</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                <div className="contact-image">
                  <img 
                    src="https://img.freepik.com/free-vector/web-analytics-team-concept-illustration_114360-1724.jpg" 
                    alt="Contact Hero"
                    style={{ maxWidth: '400px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebAnalitik; 