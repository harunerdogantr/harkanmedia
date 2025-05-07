import React from 'react';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>Hakkımızda</h1>
          <div className="breadcrumb">
            <span>Harkan Yazılım, Medya ve Danışmanlık</span>
            <span className="separator">/</span>
            <span className="active">Hakkımızda</span>
          </div>
        </div>

        <div className="about-content-wrapper">
          <div className="about-left-content">
            <div className="red-bar"></div>
            <h2>Harkan Medya - Online Fırsatlar Yaratır</h2>
            <p>
              Harkan Yazılım, Medya ve Danışmanlık, İnternet' in iş yaşamında yeni bir
              kanal haline gelmesi ile kurumların e-iş modellerine geçişlerini
              İnternet ortamında, kolay, hızlı ve güvenilir yöntemlerle iş ve ticaret
              yapmalarını sağlayacak çözümler üretmek amacıyla kurulmuştur.
            </p>

            <p>
              Pazarlama süreçlerine bir ölçümleme mekanizması kurar. Verilere
              kulak verir ve pazarlama süreçlerine 360 derece yaklaşır.
            </p>

            <p>
              Harkan Yazılım, Medya ve Danışmanlık bünyesinde Google Analytics,
              Adwords, Veri Analizi, Pazarlama Otomasyonu,
            </p>

            <p>
              Sosyal Medya Reklamları, Facebook Reklamları, Programatik, Arama
              Motoru Optimizasyonu (SEO), Yazılım, Hosting hizmetleri verilmektedir.
            </p>

            <p>
              Genç, dinamik ve konusunda uzman bir ekip olan Harkan Medya ekibi,
              her türlü yeni teknolojiye yakın durarak estetik ve işlevselliği bir arada
              tutar. Her biri kendi alanında uzman elemanlarıyla tam bir takım
              çalışması ile projeleri zamanında ve tam istediğiniz ve hayal ettiğiniz
              şekilde teslim eder.
            </p>
          </div>
          <div className="about-right-content">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Harkan Medya Ekibi Çalışırken" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 