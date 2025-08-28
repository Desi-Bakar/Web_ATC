import React from "react";
import Layout from "../../components/Layout";

const ApplicationOffice = () => {
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
                src="/img/Pertemuan.png"
                alt="MS Office/Open Office "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
              MS Office/Open Office 
                </h1>
                <p>
                 <strong>Materi:</strong>  Pengantar Dasar Office; Membuat Dokumen dengan Word; Membuat Lembar Kerja dengan Excel; Membuat Persentasi dengan -PowerPoint; Latihan & Contoh Kasus.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/Pertemuan.png"
                alt="MS PowerPoint for Business  "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
             MS PowerPoint for Business 
                </h1>
                <p>
                 <strong>Materi:</strong> Penggunaan Dasar & Manajemen File, Pengaturan Bullet & Numbering, Catatan & Komentar, Insert Image, Video, Audio, Table, Multimedia, Link, Persentasi & Internet, Pengaturan Persentasi, dll.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            

            {/* Card 4 */}
            

            {/* Card 5 */}
            

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationOffice;
