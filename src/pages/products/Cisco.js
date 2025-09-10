import React from "react";
import Layout from "../../components/Layout";

const CiscoBasic = () => {
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
                src="/img/28.png"
                alt="CISCO Basic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
              CISCO Basic
                </h1>
                <p>
                 <strong>Materi:</strong> Pendahuluan Jaringan & Cisco, Perangkat Jaringan Cisco, Konsep Jaringan Dasar, Switching & VLAN, Routing Fundamental, Teknologi Wireless Cisco (Dasar), Keamanan Jaringan Dasar, Cisco Packet Tracer (Simulasi), Praktikum & Studi Kasus, Evaluasi & Sertifikasi Internal

                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/31.png"
                alt="CISCO Advanced"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
             CISCO Advanced
                </h1>
                <p>
                 <strong>Materi:</strong>Advanced Routing Protocols, Advanced Switching, Network Security (Cisco Security Fundamentals), QoS (Quality of Service), MPLS (Multiprotocol Label Switching), Troubleshooting & Monitoring

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

export default CiscoBasic;
