import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function GoogleAds() {
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
        <title>Google Ads Optimizasyonu - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Google Ads reklamlarınızı profesyonel olarak yönetiyoruz. Arama reklamları, görüntülü reklamlar ve video reklamları ile hedef kitlenize ulaşın. ROI odaklı Google Ads yönetimi." />
        <meta name="keywords" content="Google Ads, Google reklamları, arama reklamları, görüntülü reklamlar, video reklamları, Google Ads optimizasyonu, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/google-ads-optimizasyonu" />
        <meta property="og:title" content="Google Ads Optimizasyonu - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Google Ads reklamlarınızı profesyonel olarak yönetiyoruz. ROI odaklı Google Ads yönetimi ile hedef kitlenize ulaşın." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/google-ads-optimizasyonu" />
        <meta property="twitter:title" content="Google Ads Optimizasyonu - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Google Ads reklamlarınızı profesyonel olarak yönetiyoruz. ROI odaklı Google Ads yönetimi ile hedef kitlenize ulaşın." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/google-ads-optimizasyonu" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Google Reklamları</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Google Reklamları</span>
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
              Google Reklamları
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Google'da görünürlüğünüzü artırıyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kapsamlı Google Ads Yönetimi
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Google Ads kampanyalarınızı profesyonel olarak yönetiyoruz. 
                    Arama, görüntülü, video ve alışveriş reklamları ile hedef 
                    kitlenize ulaşmanızı sağlıyoruz. Optimize edilmiş kampanyalar 
                    ile reklam bütçenizi verimli kullanmanıza yardımcı oluyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/google-ads-concept-illustration_114360-1234.jpg" 
                    alt="Google Ads" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-1235.jpg" 
                    alt="Reklam Optimizasyonu" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Reklam Optimizasyonu
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Kampanyalarınızı sürekli optimize ediyor, performansı artırıyoruz. 
                    Anahtar kelime analizi, teklif stratejileri ve reklam metinleri 
                    optimizasyonu ile dönüşüm oranlarınızı yükseltiyoruz. Veri odaklı 
                    yaklaşımla reklam harcamalarınızı maksimum verimle kullanmanızı sağlıyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Özelleştirilmiş Reklam Stratejileri
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    İşletmenizin ihtiyaçlarına özel reklam stratejileri geliştiriyoruz. 
                    Hedef kitle analizi, rekabet araştırması ve pazar trendleri ile 
                    etkili kampanyalar oluşturuyoruz. Ölçülebilir sonuçlar ve detaylı 
                    raporlama ile reklam performansınızı takip ediyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-1236.jpg" 
                    alt="Reklam Stratejileri" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve Google Ads hizmetlerimiz hakkında bilgi alın."
                      : "Google Ads ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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

export default GoogleAds; 