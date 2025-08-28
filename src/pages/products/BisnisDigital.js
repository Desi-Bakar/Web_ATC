import React from "react";
import Layout from "../../components/Layout";

const BisnisDigital = () => {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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
                alt="Bisnis Digital Pemula: Fondasi Karir dan Usaha di Era Teknologi"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
             Bisnis Digital Pemula: Fondasi Karir dan Usaha di Era Teknologi
                </h1>
                <p>
                 <strong>Materi:</strong> kegiatan usaha yang memanfaatkan teknologi dan internet sebagai alat utama dalam menjalankan operasional, pemasaran, hingga transaksi.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            

            {/* Card 3 */}
            

            {/* Card 4 */}
            

            {/* Card 5 */}
            

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BisnisDigital;
