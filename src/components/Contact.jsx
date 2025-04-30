import React, { useState } from 'react';

function Contact() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-title-bar" />
          <h2 className="contact-title">
            {currentStep === 1 ? "Hadi Konuşalım ?" : "Hazır Mısınız ?"}
          </h2>
          <p className="contact-subtitle">
            {currentStep === 1 
              ? "Bugün danışmanlarımızdan biriyle konuşun ve işinizden nasıl yararlanmaya başlayacağınızı öğrenin."
              : "Oluşturmanız gereken isteğinizden biraz bahsedin. Bu, sizi ideal ekibe yönlendirebilmemiz için değerlidir."
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
            src="https://img.freepik.com/free-vector/superhero-businessman-concept_1284-4811.jpg" 
            alt="Contact Hero"
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact; 