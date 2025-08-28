import React from "react";
import Layout from "../../components/Layout";

const Mikrotik = () => {
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    maxWidth: "320px", // biar ukuran card gak melebar
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const contentStyle = {
    padding: "1.5rem",
    lineHeight: "1.6",
  };

  // grid fix 2 kolom dan center
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.25rem",           // Semakin kecil, jarak semakin rapat
  margin: "0 auto",
  maxWidth: "700px",        // Ukuran grid lebih kecil untuk merapatkan
  alignItems: "stretch",
  justifyContent: "center", // Untuk memastikan grid tetap di tengah
};



  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div style={gridStyle}>
            
            {/* Card 1 */}
            <div style={cardStyle}>
              <img
                src="/img/7.png"
                alt="Mikrotik & Networking Basic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Mikrotik & Networking Basic 
                </h1>
                <p>
                  <strong>Materi:</strong> Pengantar Mikrotik & TCP/IP,
                  Instalasi Mikrotik, Paket Instalasi Mikrotik, Dasar - dasar
                  Perintah Mikrotik, Konfigurasi Mikrotik, Studi Kasus.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/6.png"
                alt="Mikrotik & Firewall Advanced"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Mikrotik & Firewall Advanced
                </h1>
                <p>
                  <strong>Materi:</strong> Konsep Dasar Routing & Firewall,
                  Winbox, Konfigurasi Router, Firewall, Studi Kasus.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mikrotik;
