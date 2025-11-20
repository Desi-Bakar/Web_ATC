import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/Training.png";
import facebook from "../img/social/facebook-app-symbol.png";
import instagram from "../img/social/instagram.svg";
import tiktok from "../img/social/tik-tok.png";

const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    marginBottom: "0.5rem",
    display: "block",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
  };

  return (
    <footer style={{ backgroundColor: "#004aad", padding: "3rem 1.5rem" }}>
      <style>{`
        .footer-title {
          color: #ffd700;
          margin-bottom: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }

        .footer a:hover {
          color: #ffd700;
          transform: translateY(-2px);
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #ffffff;
          transform: scale(1.15);
        }
        .social-icon img {
          width: 20px;
          height: 20px;
          filter: brightness(0) invert(1);
        }
        .social-icon:hover img {
          filter: none;
        }

        .logo-box {
          background: #ffffff;
          padding: 0.4rem 0.7rem;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        .logo-box img {
          max-width: 160px;
          height: auto;
          display: block;
        }

        .top-section {
          text-align: center;
          max-width: 500px;
          margin: 0 auto 2.5rem auto;
        }

        /* BAWAH JADI 3 KOLOM */
        .bottom-section {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .link-col {
          text-align: center;
        }

        .socials {
          display: flex;
          gap: 15px;
          margin-top: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .bottom-section {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="container" style={{ color: "#ffffff" }}>

        {/* TOP */}
        <div className="top-section">
          <div className="logo-box">
            <img src={logo} alt="Logo Areta" />
          </div>
          <p style={{ margin: "1rem auto 0", lineHeight: "1.6", color: "#ffffff" }}>
            Areta Training Center menyediakan pelatihan berbasis praktek untuk
            mengembangkan potensi generasi muda di bidang IT & industri kreatif.
          </p>
        </div>

        {/* BOTTOM 3 KOLOM */}
        <div className="bottom-section">

          {/* Peta Situs */}
          <div className="link-col">
            <h4 className="footer-title">Peta Situs</h4>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/blog" style={linkStyle}>Blog</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Jadwal (Tengah) */}
          <div className="link-col">
            <h4 className="footer-title">Jadwal</h4>
            <p style={{ margin: "0.3rem 0" }}>Senin – Jumat</p>
            <p style={{ margin: "0.3rem 0" }}>08:00 – 10.00 WIB   |  14.00 – 16:00 WIB</p>
            <p style={{ margin: "0.3rem 0" }}>10.00 – 12:00 WIB   |  16.00 – 18:00 WIB</p>
            <p style={{ margin: "0.3rem 0" }}>12.00 – 14:00 WIB   |  19.00 – 21:00 WIB</p>
          </div>

          {/* Hubungi Kami */}
          <div className="link-col">
            <h4 className="footer-title">Hubungi Kami</h4>
            <div className="socials">
              <a href="https://www.facebook.com/AretaCollege/" className="social-icon">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.tiktok.com/@areta_informaticscollege" className="social-icon">
                <img src={tiktok} alt="TikTok" />
              </a>
              <a href="https://instagram.com/areta_informaticscollege/" className="social-icon">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            marginTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "1rem",
            fontSize: "0.9rem",
            color: "#ddd",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Areta Training Center. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
