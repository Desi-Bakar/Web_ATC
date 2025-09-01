import React from "react";
import Layout from "../../components/Layout";

const LinuxBasic = () => {
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
                src="/img/1.png"
                alt="Linux Basic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Linux Basic
                </h1>
                <p>
                  <strong>Materi:</strong> Cara memulai Linux, Instalasi Linux, Perintah Dasar,
                  Monitoring Jaringan, Pembuatan Direktori & Manajemen File, Teks Editor,
                  Alur Direktori, Pemanfaatan Perintah bantuan, Teknik Berkomunikasi,
                  X-Window (Bekerja di Lingkungan Desktop & File Manager Linux.)
                </p>
              </div>
            </div>

            {/* Card 2 */}
           <div style={cardStyle}>
              <img
                src="/img/16.png"
                alt="Linux Security"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Linux Security
                </h1>
                <p>
                  <strong>Materi:</strong> APengantar Keamanan, Boot Security, General Linux Security, Cryptography, Root Jail, Server Security, VPN, Firewall, IDS.
                </p>
              </div>
            </div>


            {/* Card 3 */}
            <div style={cardStyle}>
              <img
                src="/img/3.png"
                alt="Networking"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Linux Networking
                </h1>
                <p>
                  <strong>Materi:</strong> Konsep Dasar TCP/IP, Routing, Subnetting, DNS server,
                  Mail Server, Web Server, NFS, FTP Server, Proxy & Firewalling,
                  serta teknik koneksi ke Internet.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={cardStyle}>
              <img
                src="/img/15.png"
                alt="Linux for Networking Computer -Technic"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                 Linux for Networking Computer -Technic
                </h1>
                <p>
                  <strong>Materi:</strong> TCP/IP. Cabling, Instalasi PC Router Debian & PC-
        Server-Debian, Instalasi PC Client Windows, Instalasi Jaringan, Konfigurasi-Wireless Access Point, Konfigurasi PC Router, Konfigurasi Firewall, Setup DNS Server, Setup HTTP Server, Setup Mail Server & Webmail Server, Setup FTP Server, Proxy Server & NTP, Trouble-Shooting Networking.
                </p>
              </div>
            </div>

            {/* Card 5 */}
           <div style={cardStyle}>
              <img
                src="/img/2.png"
                alt="Linux System Administrator "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Linux System Administrator 
                </h1>
                <p>
                  <strong>Materi:</strong> Karnel Linux, Konfigurasi Hardware, Otomatisasi System,
                  File System, Troubleshooting Linux, System File & Printer (NFS, Samba),
                  Instalasi Server Linux, Manajemen User & Group, Paket Managemen
                  (Install, Uninstall, Upgrade).
                </p>
              </div>
            </div>

             

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LinuxBasic;
