import React, { useState } from 'react';

function IysCozumleri() {
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
          <h1>İYS Çözümleri</h1>
          <div className="breadcrumb">
            <span>Harkan Yazılım, Medya ve Danışmanlık</span>
            <span className="separator">/</span>
            <span className="active">İYS Çözümleri</span>
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
            İYS Çözümleri
          </h1>
          <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
            İleti Yönetim Sistemi süreçlerinizi profesyonel olarak yönetiyoruz.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  İYS Kayıt ve Yönetim
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  İleti Yönetim Sistemi'ne (İYS) kayıt sürecinizi yönetiyoruz. 
                  Ticari elektronik ileti göndermek için gerekli tüm yasal 
                  gereklilikleri yerine getirmenize yardımcı oluyoruz. Mevcut 
                  izinlerinizin İYS'ye yüklenmesi ve güncel tutulması konusunda 
                  destek sağlıyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/gdpr-concept-illustration_114360-1028.jpg" 
                  alt="İYS Kayıt ve Yönetim" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/data-protection-law-concept-illustration_114360-1029.jpg" 
                  alt="İzin Yönetimi" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  İzin Yönetimi ve Uyum
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  Ticari elektronik ileti izinlerinizi etkin bir şekilde yönetiyoruz. 
                  İzin alma süreçlerinizi optimize ediyor, ret ve şikayet yönetimini 
                  profesyonel olarak ele alıyoruz. KVKK ve ETK uyumluluğu için gerekli 
                  tüm adımları atmanıza yardımcı oluyoruz.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Raporlama ve Analiz
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  İYS verilerinizi düzenli olarak analiz ediyor ve raporluyoruz. 
                  İzin oranları, ret istatistikleri ve şikayet analizleri ile 
                  iletişim stratejinizi güçlendirmenize yardımcı oluyoruz. 
                  Periyodik raporlar ile İYS performansınızı sürekli takip 
                  ediyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1030.jpg" 
                  alt="Raporlama ve Analiz" 
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
                    ? "Bugün danışmanlarımızdan biriyle konuşun ve İYS çözümlerimiz hakkında bilgi alın."
                    : "İYS ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
                  src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-1031.jpg" 
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

export default IysCozumleri; 