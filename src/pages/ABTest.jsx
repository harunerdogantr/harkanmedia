import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function ABTest() {
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
        <title>A/B Testi - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="A/B testi ile dijital varlığınızı optimize edin. Harkan Media'nın veri odaklı yaklaşımı ile web sitenizin performansını artırın ve dönüşüm oranlarınızı yükseltin." />
        <meta name="keywords" content="A/B testi, kullanıcı deneyimi, UX testi, dönüşüm optimizasyonu, web sitesi optimizasyonu, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/ab-testi" />
        <meta property="og:title" content="A/B Testi - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="A/B testi ile dijital varlığınızı optimize edin. Veri odaklı yaklaşımımızla dönüşüm oranlarınızı yükseltin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/ab-testi" />
        <meta property="twitter:title" content="A/B Testi - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="A/B testi ile dijital varlığınızı optimize edin. Veri odaklı yaklaşımımızla dönüşüm oranlarınızı yükseltin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/ab-testi" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>A/B Testi</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">A/B Testi</span>
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
              A/B Testi
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Veri odaklı kararlarla dijital varlığınızı optimize ediyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kapsamlı A/B Test Çözümleri
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Web sitenizin performansını artırmak için kapsamlı A/B test çözümleri sunuyoruz. 
                    Farklı tasarım, içerik ve kullanıcı deneyimi varyasyonlarını test ederek, 
                    en etkili kombinasyonu belirliyoruz. Veri odaklı optimizasyon ile dönüşüm 
                    oranlarınızı artırıyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/ab-testing-concept-illustration_114360-1234.jpg" 
                    alt="A/B Testi" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1263.jpg" 
                    alt="Veri Analizi" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Detaylı Analiz ve Raporlama
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Test sonuçlarınızı detaylı olarak analiz ediyor, anlaşılır raporlar sunuyoruz. 
                    Kullanıcı davranışlarını, dönüşüm oranlarını ve diğer önemli metrikleri 
                    takip ederek, test sonuçlarınızı yorumluyoruz. Veri odaklı önerilerle 
                    sürekli iyileştirme sağlıyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Özelleştirilmiş Test Stratejileri
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    İşletmenizin ihtiyaçlarına özel test stratejileri geliştiriyoruz. 
                    Hedef kitlenize ve sektörünüze uygun test senaryoları oluşturuyor, 
                    en etkili sonuçları elde etmenizi sağlıyoruz. Sürekli optimizasyon 
                    ile dijital varlığınızı güçlendiriyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/business-strategy-concept-illustration_114360-1506.jpg" 
                    alt="Test Stratejileri" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve A/B testi hizmetlerimiz hakkında bilgi alın."
                      : "A/B testi ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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

export default ABTest; 