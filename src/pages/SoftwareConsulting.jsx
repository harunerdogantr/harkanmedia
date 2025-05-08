import React, { useState } from 'react';

function SoftwareConsulting() {
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
            Dijital dönüşümünüzü birlikte gerçekleştirelim.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Stratejik Yazılım Danışmanlığı
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  İşletmenizin dijital dönüşüm sürecinde stratejik danışmanlık hizmetleri sunuyoruz. 
                  Mevcut sistemlerinizi analiz ediyor, ihtiyaçlarınıza uygun çözümler öneriyor ve 
                  teknoloji yol haritanızı birlikte oluşturuyoruz. Modern yazılım mimarileri ve 
                  en iyi uygulamalar ile işinizi geleceğe taşıyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/software-development-concept-illustration_114360-2414.jpg" 
                  alt="Yazılım Danışmanlığı" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/team-leader-teamwork-concept-illustration_114360-1203.jpg" 
                  alt="Teknik Danışmanlık" 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Teknik Danışmanlık ve Eğitim
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  Teknik ekibinize özel danışmanlık ve eğitim hizmetleri sunuyoruz. 
                  Modern yazılım geliştirme metodolojileri, araçları ve teknolojileri 
                  konusunda uzman desteği sağlıyor, ekip performansınızı artırıyoruz. 
                  Sürekli gelişim ve öğrenme kültürünü destekliyoruz.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', color: '#333333', marginBottom: '16px' }}>
                  Proje Yönetimi ve Süreç İyileştirme
                </h2>
                <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.6 }}>
                  Yazılım projelerinizin başarıyla tamamlanması için kapsamlı proje yönetimi hizmetleri sunuyoruz. 
                  Agile metodolojileri ile süreçlerinizi iyileştiriyor, verimliliği artırıyoruz. 
                  Risk yönetimi, kaynak planlaması ve kalite kontrol süreçlerinizi optimize ediyoruz.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://img.freepik.com/free-vector/project-management-concept-illustration_114360-1063.jpg" 
                  alt="Proje Yönetimi" 
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
                    ? "Bugün danışmanlarımızdan biriyle konuşun ve yazılım danışmanlık hizmetlerimiz hakkında bilgi alın."
                    : "Yazılım ihtiyaçlarınız hakkında biraz bilgi verin. Bu, size en uygun çözümü belirlememize yardımcı olacaktır."
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
                  src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg" 
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

export default SoftwareConsulting; 