import React, { useState } from 'react';

function DataModeling() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>Veri Modelleme</h1>
          <div className="breadcrumb">
            <span>Harkan Yazılım, Medya ve Danışmanlık</span>
            <span className="separator">/</span>
            <span className="active">Veri Modelleme</span>
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
            Veri Modelleme
          </h1>
          <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
            Verilerinizi anlamlı modellere dönüştürüyoruz.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  İleri Düzey Veri Modelleme
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  Karmaşık veri yapılarınızı anlamlı ve kullanılabilir modellere dönüştürüyoruz. 
                  Makine öğrenmesi ve yapay zeka algoritmaları ile verilerinizi analiz ediyor, 
                  tahmin modelleri oluşturuyor ve iş süreçlerinizi optimize ediyoruz. 
                  Veri odaklı karar verme süreçlerinizi güçlendiriyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1263.jpg" 
                  alt="Veri Modelleme" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-1436.jpg" 
                  alt="Tahminsel Analiz" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Tahminsel Analiz ve Öngörüler
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  Geçmiş verilerinizi kullanarak geleceğe yönelik tahminler yapıyoruz. 
                  Trend analizi, müşteri davranış tahminleri ve pazar analizleri ile 
                  işletmenizin geleceğini şekillendiriyoruz. Veri odaklı stratejik 
                  kararlar almanıza yardımcı oluyoruz.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Özelleştirilmiş Model Çözümleri
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  İşletmenizin ihtiyaçlarına özel veri modelleme çözümleri sunuyoruz. 
                  Sektörünüze özgü modeller geliştiriyor, veri kalitesini artırıyor ve 
                  süreçlerinizi optimize ediyoruz. Modern teknolojiler ve en iyi 
                  uygulamalarla veri modelleme süreçlerinizi güçlendiriyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/data-processing-concept-illustration_114360-1083.jpg" 
                  alt="Model Çözümleri" 
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
                    ? "Bugün danışmanlarımızdan biriyle konuşun ve veri modelleme hizmetlerimiz hakkında bilgi alın."
                    : "Veri modelleme ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
  );
}

export default DataModeling; 