import React from "react";
import Layout from "../../components/Layout";

const DatabaseAdministrator= () => {
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
                src="/img/4.png"
                alt="MySQL Database Administrator "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                 MySQL Database Administrator 
                </h1>
                <p>
                  <strong>Materi:</strong>  Pengenalan Database; Instalasi, Konektivitas, Perintah dasar-Database, Management Table, Perintah SQL.; Operator, View & Rule; Index, Transaksi, Fungsi.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>
              <img
                src="/img/18.png"
                alt="PostgreSQL Database -Administrator "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                  PostgreSQL Database -Administrator 
                </h1>
                <p>
                  <strong>Materi:</strong> Pengantar PostgreSQL (Konsep & Kapabilitas); Mendefinisikan Tabel & Relasi (Create, Constraint & Serial); Menambah & Mengubah data (Insert, Update, Delete & Transction); Query (Select, Self Join, Cross join, Inner Join, Outer Join & Subquery); Pemrograman User Defined Function dengan PL/PostgreSQL; Administrasi Database PostgreSQL; Merancang Database.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={cardStyle}>
              <img
                src="/img/5.png"
                alt="Oracle Database "
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 className="title" style={{ marginBottom: "1rem" }}>
                   Oracle Database 
                </h1>
                <p>
                  <strong>Materi:</strong> Pengantar Oracle Database, Create The Database, Managing Tablespaces & Datafiles; Create New Table; Bigfile Tablespace To Extend & To Decrease The Size of Tablespace, Making, Renaming & Dropping Tablespaces, Procedure for Tablespaces, Managing Redo Logfiles, Control Files & The Undo Tablespaces; SQL. Loader, Export & Import, Data Pump Utility, Flash Back Features: Log Miner, Backup & Recovery.
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

export default DatabaseAdministrator;
