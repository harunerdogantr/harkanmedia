import React from 'react';

function Partners() {
  return (
    <section className="partners-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafafa' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#ff3c22', margin: 0, textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
        Partnerlerimiz
      </h1>
      <div style={{ marginTop: 24, marginBottom: 8, color: '#888', fontSize: 16, textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
        Harkan Yazılım, Medya ve Danışmanlık <span style={{ color: '#bbb', margin: '0 8px' }}>/</span>
        <span style={{ color: '#ff3c22' }}>Partnerlerimiz</span>
      </div>
      <div style={{ width: 4, height: 80, background: '#ff3c22', margin: '32px auto 0 auto', borderRadius: 2 }} />
      <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 64 }}>
        {/* Örnek: <img src="GORSENIZIN_URLSI" alt="Partner Adı" style={{ width: 180, height: 'auto' }} /> */}
      </div>
    </section>
  );
}

export default Partners; 