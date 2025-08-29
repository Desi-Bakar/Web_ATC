import React from "react";
import Layout from "../../components/Layout";

const Mikrotik= () => {
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const contentStyle = {
    padding: "1.5rem",
    lineHeight: "1.6",
  };

  // grid dengan max 3 kolom
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    justifyContent: "center",
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
                  <strong>Materi:</strong> Pengantar Mikrotik & TCP/IP, Instalasi Mikrotik, Paket Instalasi Mikrotik, Dasar - dasar Perintah Mikrotik, Konfigurasi Mikrotik, Studi Kasus.
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
                  <strong>Materi:</strong> Konsep Dasar Routing & Firewall, Winbox, Konfigurasi Router, Firewall, Studi Kasus.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ visibility: "hidden" }}>kosong</div>


            {/* Card 4 */}
           

            {/* Card 5 */}
            

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mikrotik;
