import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function LinkedInAds() {
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
        <title>LinkedIn Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="LinkedIn reklamları ile B2B hedef kitlenize ulaşın. Profesyonel reklam kampanyaları, lead generation ve LinkedIn reklam optimizasyonu ile işletmenizi büyütün." />
        <meta name="keywords" content="LinkedIn reklamları, LinkedIn Ads, B2B pazarlama, lead generation, profesyonel reklamlar, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/linkedin-reklam-optimizasyonu" />
        <meta property="og:title" content="LinkedIn Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="LinkedIn reklamları ile B2B hedef kitlenize ulaşın. Profesyonel reklam kampanyaları ve lead generation ile işletmenizi büyütün." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/linkedin-reklam-optimizasyonu" />
        <meta property="twitter:title" content="LinkedIn Reklamları - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="LinkedIn reklamları ile B2B hedef kitlenize ulaşın. Profesyonel reklam kampanyaları ve lead generation ile işletmenizi büyütün." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/linkedin-reklam-optimizasyonu" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>LinkedIn Reklamları</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">LinkedIn Reklamları</span>
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
              LinkedIn Reklamları
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              LinkedIn'de profesyonel ağınızı genişletiyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kapsamlı LinkedIn Ads Yönetimi
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    LinkedIn reklamlarınızı profesyonel olarak yönetiyoruz. 
                    B2B odaklı reklam stratejileri, hedef kitle segmentasyonu ve 
                    kampanya optimizasyonu ile profesyonel ağınızı güçlendiriyoruz. 
                    Etkili içerikler ve verimli reklam stratejileri ile işletmenizi 
                    büyütmenize yardımcı oluyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/linkedin-ads-concept-illustration_114360-1241.jpg" 
                    alt="LinkedIn Ads" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/linkedin-marketing-concept-illustration_114360-1242.jpg" 
                    alt="Reklam Optimizasyonu" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    B2B Reklam Optimizasyonu
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Kampanyalarınızı sürekli optimize ediyor, profesyonel performansı artırıyoruz. 
                    Hedef kitle analizi, reklam formatları ve teklif stratejileri ile 
                    dönüşüm oranlarınızı yükseltiyoruz. A/B testleri ve veri analizi ile 
                    reklam harcamalarınızı maksimum verimle kullanmanızı sağlıyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Özelleştirilmiş B2B Stratejileri
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    İşletmenizin ihtiyaçlarına özel B2B stratejileri geliştiriyoruz. 
                    Hedef kitle araştırması, sektör analizi ve profesyonel içerik planlaması ile 
                    etkili kampanyalar oluşturuyoruz. Ölçülebilir sonuçlar ve detaylı 
                    raporlama ile reklam performansınızı takip ediyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/linkedin-content-concept-illustration_114360-1243.jpg" 
                    alt="B2B Stratejileri" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve LinkedIn Ads hizmetlerimiz hakkında bilgi alın."
                      : "LinkedIn Ads ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
                    src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" 
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

export default LinkedInAds; 