import React from "react";
import Layout from "../../components/Layout";

const ComputerDesain = () => {
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
                src="/img/25.png"
                alt="Linux Basic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                 Adobe Photoshop
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenalan Dasar Photoshop: Tools, Membuat Tulisan dengan-Menggunakan Efek-efek Tertentu; Memasukkan Gambar/Objek: Copy,-Cut Paste; Mengedit Gambar yang sudah ada; Seleksi: Pewarnaan; Transformasi; Cropping; Duplikasi; Efek Fotografi; Efek Ketajaman &-Smudge; Slice Tool; Menghapus; Penggunaan Efek; Save; Latihan.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/12.png"
                alt="Adobe Ilustrator"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                   Adobe Ilustrator
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenalan Dasar Adobe Ilustrator; Membuat dokumen; Menggambar-& Menyeleksi Objek; Bekerja dengan Pen Tool & Objek; Mengenal Layer -Illustrator; Bekerja dengan Warna & Teks; Mentransformasi & Memodifikasi -Objek; Membuat Gradient & Pattern; Menggunakan Efek - efek Ilustrator; Bekerja dengan Grafik; Bekerja dengan Simbol; Live Paint; Trace & Mencetak; Latihan.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={cardStyle}>
              <img
                src="/img/26.png"
                alt="Networking"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Macromedia Flash
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenalan Dasar Animasi Macromedia Flash; Toolbox(Tools, -View, Colors, Options); Stage; Timeline; ActionScript; Halaman Kerja; Membuat Animasi Tweening; Variable & Tipe Data; Operator; Membuat Animasi Teks; Menambahkan Sound & Video; Publishing.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={cardStyle}>
              <img
                src="/img/Pertemuan.png"
                alt="Linux for Networking Computer -Technic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                AutoCAD Basic
                </h1>
                <p>
                  <strong>Materi:</strong> Membuka dan Menjalankan Program Autocad Membuat Garis Miring dengan Kuadran Kartesian Fillet dan Trim Circle dan Tan, Array, Offset, Layer, Copy, Move, Mirror, Rotate, Block, Mline, Explode, Extend, Hatch, Latihan.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div style={cardStyle}>
              <img
                src="/img/Pertemuan.png"
                alt="Linux Security"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                 AutoCAD Advanced
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenalan 3D, Mengubah Model Gambar 2D ke 3D, Perintah & Modifikasi Gambar 3D, Solid & Surface, Gambar Perspective, Kombinasi Objek 2D & 3D, Rendeing, Aplikasi Ucs & Viewpoint, Latihan.
                </p>
              </div>
            </div>

             <div style={cardStyle}>
              <img
                src="/img/Pertemuan.png"
                alt="Linux Security"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                CorelDRAW
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenalan Dasar CorelDRAW, Toolbox & Fungsinya, Import & Export, Copy Object, Layout Halaman, Teknik Transparasi Gambar, Teknik Penggabungan & Shaping, Memotong Gambar, Fungsi Ruler & Guide Lines, Membuat Half Tone, Membuat Kancing, Membuat Logo, Membuat Kartun, Desain Baju Puzzle Gambar, Kalender; Spanduk, Brosur, Latihan.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerDesain;
