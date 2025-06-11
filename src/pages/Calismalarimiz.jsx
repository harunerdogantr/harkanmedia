import React from 'react';
import { Helmet } from 'react-helmet-async';

function Calismalarimiz() {
  // Sample projects data - you can replace these with your actual projects
  const projects = [
    {
      name: "ABC Şirketi",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg",
      description: "E-ticaret Analitik Çözümleri"
    },
    {
      name: "XYZ Holding",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo-2_53876-120502.jpg",
      description: "Dijital Pazarlama Kampanyaları"
    },
    {
      name: "123 Teknoloji",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo-3_53876-120503.jpg",
      description: "Mobil Uygulama Analizi"
    },
    {
      name: "Beta Digital",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo-4_53876-120504.jpg",
      description: "SEO Optimizasyonu"
    },
    {
      name: "Gamma Solutions",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo-5_53876-120505.jpg",
      description: "Sosyal Medya Yönetimi"
    },
    {
      name: "Delta Group",
      logo: "https://img.freepik.com/free-vector/abstract-company-logo-6_53876-120506.jpg",
      description: "Google Ads Kampanyaları"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        <meta name="keywords" content="dijital pazarlama projeleri, yazılım projeleri, başarılı çalışmalar, referanslar, dijital dönüşüm, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/calismalarimiz" />
        <meta property="og:title" content="Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/calismalarimiz" />
        <meta property="twitter:title" content="Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/calismalarimiz" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>Çalışmalarımız</h1>
            <div className="breadcrumb">
              <span>Harkan Yazılım, Medya ve Danışmanlık</span>
              <span className="separator">/</span>
              <span className="active">Çalışmalarımız</span>
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
              Başarı Hikayelerimiz
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', margin: '0 0 64px 0' }}>
              Müşterilerimizle birlikte başardığımız projeler ve çalışmalar
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '32px',
              padding: '0 0 64px 0'
            }}>
              {projects.map((project, index) => (
                <div key={index} style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <div style={{
                    background: '#F8F9FA',
                    padding: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px'
                  }}>
                    <img 
                      src={project.logo} 
                      alt={`${project.name} Logo`}
                      style={{
                        maxWidth: '80%',
                        maxHeight: '80%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#333333',
                      marginBottom: '8px'
                    }}>
                      {project.name}
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#666666',
                      margin: '0'
                    }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calismalarimiz; 