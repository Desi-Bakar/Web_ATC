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
                src="/img/20.png"
                alt="Basic Cisco Networking"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
              Basic Cisco Networking
                </h1>
                <p>
                 <strong>Materi:</strong> perusahaan teknologi global yang bergerak di bidang jaringan komputer. Cisco terkenal karena memproduksi perangkat keras jaringan seperti router, switch, firewall, dan access point, serta perangkat lunak pendukungnya.

Bagi pemula yang belajar jaringan, Cisco menjadi standar karena produknya banyak dipakai di dunia kerja dan juga menyediakan sertifikasi resmi seperti CCNA (Cisco Certified Network Associate).
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ visibility: "hidden" }}>kosong</div>


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
