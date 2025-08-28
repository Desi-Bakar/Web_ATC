import React from "react";
import Layout from "../../components/Layout";

const WebDesign = () => {
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
                src="/img/22.png"
                alt="Web Standard (HTML, CSS & JavaScript)"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Web Standard (HTML, CSS & JavaScript)
                </h1>
                <p>
                  <strong>Materi:</strong>  Materi Pengenalan Web & Persiapan, Pengenalan HTML.; Membuat Gambar, Membuat Link; Heading; List; Memahami Tag Div; Form; Tabel; Studi Kasus 1-(Konversi Desaign ke HTML); Semantik; CSS; Box-Model; Typography; CSS-Image; Floating; Positioning; Pseudo-Class; Studi Kasus 2 (Pemberian Style/CSS); Studi Kasus 3-(Slicing); JavaScript.
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

export default WebDesign;
