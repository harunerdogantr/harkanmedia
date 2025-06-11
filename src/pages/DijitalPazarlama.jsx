import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function DijitalPazarlama() {
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
        <title>Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama, içerik pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        <meta name="keywords" content="dijital pazarlama, SEO, sosyal medya pazarlama, içerik pazarlama, dijital reklam, online pazarlama, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/dijital-pazarlama" />
        <meta property="og:title" content="Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/dijital-pazarlama" />
        <meta property="twitter:title" content="Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/dijital-pazarlama" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Dijital Pazarlama</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Dijital Pazarlama</span>
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
              Dijital Pazarlama
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Markanızı dijital dünyada güçlendiriyoruz.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Dijital Strateji Geliştirme
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Markanız için kapsamlı dijital pazarlama stratejileri geliştiriyoruz. 
                    Hedef kitlenizi analiz ediyor, rekabet araştırması yapıyor ve 
                    pazarlama hedeflerinize uygun stratejiler oluşturuyoruz. Tüm dijital 
                    kanalları entegre eden bütüncül bir yaklaşım sunuyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/digital-marketing-strategy-concept-illustration_114360-1637.jpg" 
                    alt="Dijital Strateji" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-1638.jpg" 
                    alt="İçerik Pazarlama" 
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    İçerik Pazarlama
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Hedef kitlenize özel, değer katan içerikler üretiyoruz. Blog yazıları, 
                    sosyal medya içerikleri, video içerikler ve infografikler ile markanızın 
                    hikayesini anlatıyoruz. SEO uyumlu içeriklerle organik trafiğinizi 
                    artırıyor, içerik stratejinizi sürekli optimize ediyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                    Dönüşüm Optimizasyonu
                  </h2>
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                    Web sitenizin ve dijital varlıklarınızın dönüşüm oranlarını 
                    optimize ediyoruz. A/B testleri, kullanıcı deneyimi iyileştirmeleri 
                    ve conversion funnel analizleri ile satışlarınızı artırıyoruz. 
                    Veri odaklı yaklaşımla sürekli iyileştirmeler yapıyoruz.
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <img 
                    src="https://img.freepik.com/free-vector/conversion-rate-optimization-concept-illustration_114360-1639.jpg" 
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
                      ? "Bugün danışmanlarımızdan biriyle konuşun ve dijital pazarlama hizmetlerimiz hakkında bilgi alın."
                      : "Dijital pazarlama ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
                    src="https://img.freepik.com/free-vector/digital-marketing-team-concept-illustration_114360-1640.jpg" 
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

export default DijitalPazarlama; 