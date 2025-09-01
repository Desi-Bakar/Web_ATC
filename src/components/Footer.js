import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/Training.png";
import facebook from "../img/social/facebook-app-symbol.png";
import instagram from "../img/social/instagram.svg";
import tiktok from "../img/social/tik-tok.png";

const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    background: "transparent",
    boxShadow: "none",
    display: "block",
    marginBottom: "0.5rem",
    transition: "transform 0.2s ease, color 0.2s ease",
  };

  return (
    <footer
      className="footer has-text-white-ter"
      style={{ backgroundColor: "#004aad", padding: "3rem 1.5rem" }}
    >
      <style>
        {`
          .footer a {
            color: #ffffff;
            text-decoration: none;
            transition: transform 0.2s ease, color 0.2s ease;
            display: block;
            margin-bottom: 0.5rem;
          }

       
         

          /* Hover efek */
          .footer a:hover {
            transform: translateY(-2px);
          }

          /* Klik (active) efek ditekan */
          .footer a:active {
            transform: translateY(3px) scale(0.96);
          }
        `}
      </style>

      <div className="container">
        <div className="columns is-variable is-8 is-multiline">
          {/* Menu Navigasi */}
          <div className="column is-4">
            <div>
              <Link
                to="/"
                style={linkStyle}
                activeClassName="active-footer-link"
              >
                Home
              </Link>
              <Link
                to="/about"
                style={linkStyle}
                activeClassName="active-footer-link"
              >
                About
              </Link>
              <Link
                to="/blog"
                style={linkStyle}
                activeClassName="active-footer-link"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                style={linkStyle}
                activeClassName="active-footer-link"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Logo & Deskripsi */}
          <div className="column is-4 has-text-centered">
            <div
              className="card"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                padding: "0.5rem",
                borderRadius: "5px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-image">
                <figure className="image" style={{ margin: 0 }}>
                  <img
                    src={logo}
                    alt="Logo Areta"
                    style={{
                      maxWidth: "150px",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </figure>
              </div>
            </div>

            <p
              style={{
                maxWidth: "300px",
                margin: "1rem auto 0",
                color: "#ffffff",
              }}
            >
              Areta Training Center menyediakan pelatihan berbasis praktek untuk
              mengembangkan potensi generasi muda di bidang IT & industri kreatif.
            </p>
          </div>

          {/* Sosial Media */}
          <div className="column is-4" style={{ textAlign: "right" }}>
            <h4 className="title is-5" style={{ color: "#ffffff" }}>
              Ikuti Kami
            </h4>

            <div style={{ display: "inline-flex", gap: "15px", marginTop: "0.5rem" }}>
              <a
                href="https://www.facebook.com/AretaCollege/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
              <a
                href="https://www.tiktok.com/@areta_informaticscollege"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tiktok}
                  alt="TikTok"
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
              <a
                href="https://instagram.com/areta_informaticscollege/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="content has-text-centered"
          style={{
            marginTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "1rem",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Areta Training Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
