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
                src="/img/29.png"
                alt="Social Media Marketing"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
             Social Media Marketing
                </h1>
                <p>
                 <strong>Materi:</strong> Pengenalan Social Media Marketing, Strategi & Perencanaan Konten, Pembuatan Konten Kreatif, Manajemen Media Sosial, Social Media Advertising (Iklan Berbayar), Analisis & Optimasi, Strategi Pertumbuhan & Monetisasi, Studi Kasus & Proyek Akhir

                </p>
              </div>
            </div>

            {/* Card 2 */}
             <div style={cardStyle}>
              <img
                src="/img/32.png"
                alt="Content Marketing"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
            Content Marketing
                </h1>
                <p>
                 <strong>Materi:</strong> Pengenalan Content Marketing, Strategi Dasar Content Marketing, Riset & Perencanaan Konten, Jenis & Format Konten, Copywriting & Storytelling, Distribusi & Promosi Konten, SEO & Content Marketing, Content Marketing Tools, Analisis & Optimasi Konten, Proyek Akhir.

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

export default BisnisDigital;
