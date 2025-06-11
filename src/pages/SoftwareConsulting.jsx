import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function SoftwareConsulting() {
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
        <title>Yazılım Danışmanlığı - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Yazılım danışmanlığı ile işletmenizi dijital dünyaya taşıyın. Özel yazılım çözümleri, sistem entegrasyonu ve teknoloji danışmanlığı ile dijital dönüşümünüzü gerçekleştirin." />
        <meta name="keywords" content="yazılım danışmanlığı, dijital dönüşüm, sistem entegrasyonu, özel yazılım, teknoloji danışmanlığı, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/yazilim-danismanligi" />
        <meta property="og:title" content="Yazılım Danışmanlığı - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Yazılım danışmanlığı ile işletmenizi dijital dünyaya taşıyın. Özel yazılım çözümleri ve teknoloji danışmanlığı ile dijital dönüşümünüzü gerçekleştirin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/yazilim-danismanligi" />
        <meta property="twitter:title" content="Yazılım Danışmanlığı - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Yazılım danışmanlığı ile işletmenizi dijital dünyaya taşıyın. Özel yazılım çözümleri ve teknoloji danışmanlığı ile dijital dönüşümünüzü gerçekleştirin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/yazilim-danismanligi" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Yazılım Danışmanlığı</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Yazılım Danışmanlığı</span>
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
              Yazılım Danışmanlığı
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Dijital dönüşümünüzü birlikte gerçekleştiriyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Kapsamlı Yazılım Danışmanlığı
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    İşletmenizin ihtiyaçlarına özel yazılım çözümleri sunuyoruz. 
                    Mevcut sistemlerinizi analiz ediyor, modern teknolojiler ile 
                    entegre ediyor ve verimliliğinizi artırıyoruz. Dijital dönüşüm 
                    sürecinizde size rehberlik ediyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/software-development-concept-illustration_114360-1234.jpg" 
                    alt="Yazılım Danışmanlığı" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/software-development-concept-illustration_114360-1235.jpg" 
                    alt="Teknoloji Danışmanlığı" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Teknoloji Danışmanlığı
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    En son teknolojileri işletmenize entegre ediyoruz. 
                    Bulut çözümleri, yapay zeka ve otomasyon sistemleri ile 
                    iş süreçlerinizi optimize ediyoruz. Teknoloji altyapınızı 
                    güçlendirerek rekabet avantajı elde etmenizi sağlıyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Özelleştirilmiş Çözümler
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    İşletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz. 
                    Sektörünüze özgü iş süreçlerinizi analiz ediyor, verimliliğinizi 
                    artıracak sistemler tasarlıyoruz. Modern teknolojiler ve en iyi 
                    uygulamalarla dijital dönüşümünüzü gerçekleştiriyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/software-development-concept-illustration_114360-1236.jpg" 
                    alt="Özelleştirilmiş Çözümler" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve yazılım danışmanlığı hizmetlerimiz hakkında bilgi alın."
                      : "Yazılım danışmanlığı ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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

export default SoftwareConsulting; 