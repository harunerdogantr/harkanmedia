import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function SocialMediaAds() {
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
        <title>Sosyal Medya Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Sosyal medya reklamları ile hedef kitlenize ulaşın. Facebook, Instagram, LinkedIn ve diğer platformlarda etkili reklam kampanyaları ile markanızı büyütün." />
        <meta name="keywords" content="sosyal medya reklamları, Facebook Ads, Instagram Ads, LinkedIn Ads, sosyal medya pazarlama, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/sosyal-medya-reklamlari" />
        <meta property="og:title" content="Sosyal Medya Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Sosyal medya reklamları ile hedef kitlenize ulaşın. Facebook, Instagram, LinkedIn ve diğer platformlarda etkili reklam kampanyaları ile markanızı büyütün." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/sosyal-medya-reklamlari" />
        <meta property="twitter:title" content="Sosyal Medya Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Sosyal medya reklamları ile hedef kitlenize ulaşın. Facebook, Instagram, LinkedIn ve diğer platformlarda etkili reklam kampanyaları ile markanızı büyütün." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/sosyal-medya-reklamlari" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Sosyal Medya Reklamları</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Sosyal Medya Reklamları</span>
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
              Sosyal Medya Reklamları
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Tüm sosyal medya platformlarında markanızı büyütüyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kapsamlı Sosyal Medya Yönetimi
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Tüm sosyal medya platformlarında reklamlarınızı profesyonel olarak yönetiyoruz. 
                    Platform özelinde reklam stratejileri, hedef kitle segmentasyonu ve 
                    kampanya optimizasyonu ile sosyal medya varlığınızı güçlendiriyoruz. 
                    Etkili içerikler ve verimli reklam stratejileri ile markanızı 
                    büyütmenize yardımcı oluyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/social-media-marketing-concept-illustration_114360-1244.jpg" 
                    alt="Sosyal Medya Reklamları" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/social-media-strategy-concept-illustration_114360-1245.jpg" 
                    alt="Reklam Optimizasyonu" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Platform Bazlı Optimizasyon
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Her platform için özel optimizasyon stratejileri geliştiriyoruz. 
                    Platform özelliklerine göre reklam formatları ve teklif stratejileri ile 
                    etkileşim oranlarınızı yükseltiyoruz. A/B testleri ve veri analizi ile 
                    reklam harcamalarınızı maksimum verimle kullanmanızı sağlıyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Entegre Sosyal Medya Stratejileri
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Tüm sosyal medya platformlarını entegre eden stratejiler geliştiriyoruz. 
                    Platformlar arası içerik senkronizasyonu, hedef kitle analizi ve 
                    performans takibi ile etkili kampanyalar oluşturuyoruz. Ölçülebilir 
                    sonuçlar ve detaylı raporlama ile reklam performansınızı takip ediyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/social-media-integration-concept-illustration_114360-1246.jpg" 
                    alt="Entegre Stratejiler" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve Sosyal Medya Reklamları hizmetlerimiz hakkında bilgi alın."
                      : "Sosyal Medya Reklamları ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
                    src="https://img.freepik.com/free-vector/social-media-marketing-concept-illustration_114360-1247.jpg" 
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

export default SocialMediaAds; 