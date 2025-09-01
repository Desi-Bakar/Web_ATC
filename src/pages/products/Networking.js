import React from "react";
import Layout from "../../components/Layout";

const Networking = () => {
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
                alt="Linux Networking & Windows Networking"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Linux Networking & Windows Networking
                </h1>
                <p>
                  <strong>Materi:</strong>Konsep TCP/IP, Membuat Router / Gateway Linux, Firewall Linux, DHCP, Proxy, DNS, FTP, Web Server Linux, PDC Windows Server & Backup Linux, Instalasi Client Windows, Teknik Backup.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/21.png"
                alt="Mail Server with Zimbra"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  Mail Server with Zimbra
                </h1>
                <p>
                  <strong>Materi:</strong>  Materi: Konsep & Design Linux Enterprise, DNS, Mail Server Postfix, Imap, POP3, Instalasi, Konfigurasi, Trouble Shooting & Testing Zimbra.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={cardStyle}>
              <img
                src="/img/8.png"
                alt=" Cloud Computing"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                   Cloud Computing
                </h1>
                <p>
                  <strong>Materi:</strong> Pengenal Teknologi Cloud & Proxmox, Hardware Compability, Implementasi VM with KVM, Implementasi VM with OpenVZ, Instalasi FreeNAS for NFS & ISCSI Storage, Konfigurasi NFS & ISCSI, Koneksi, Proxmox Cluster & High Availability Server with DRBD, Backup & Restore.
                </p>
              </div>
            </div>

            {/* Card 4 */}
          

            {/* Card 5 */}
            

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Networking;
