import React, { useState } from "react";
import { Link } from "gatsby";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/TrainingCenter.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // ✅ tambahan

  // Data array untuk products
  const products = [
    { name: "Networking & Administrator", path: "/products/NetworkingAdministrator" },
    { name: "Mikrotik", path: "/products/Mikrotik" },
    { name: "Web Design", path: "/products/WebDesign" },
    { name: "Networking", path: "/products/Networking" },
    { name: "Programing", path: "/products/Programing" },
    { name: "Computer Desain", path: "/products/ComputerDesain" },
    { name: "Hacking", path: "/products/Hacking" },
    { name: "Application Office", path: "/products/ApplicationOffice" },
    { name: "Database Administrator", path: "/products/DatabaseAdministrator" },
    { name: "Training Cisco", path: "/products/Cisco" },
    { name: "Training Digital Marketing", path: "/products/BisnisDigital" }
  ];

  return (
    <>
      <style>{`
        /* Dropdown Products */
        .navbar-item.products.has-dropdown {
          position: relative;
        }
        .navbar-item.products.has-dropdown .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          display: flex;
          flex-direction: column;
          min-width: 200px;
          padding: 0.5rem 0;
          border: 1px solid #ddd;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .navbar-item.products.has-dropdown:hover .navbar-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .navbar-item.products.has-dropdown .navbar-dropdown .navbar-item {
          padding: 10px 16px;
          white-space: nowrap;
        }
        .navbar-item.products.has-dropdown .navbar-dropdown .navbar-item:hover {
          background: #f5f5f5;
        }

        /* ✅ Burger cobalt blue */
        .navbar-burger {
          display: none; /* default disembunyikan */
          cursor: pointer;
        }
        .navbar-burger span {
          display: block;
          height: 2px;
          width: 20px;
          background: #004AAD; /* cobalt blue */
          margin: 4px auto;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar-burger:hover span {
          background: #0056D2; /* lebih terang saat hover */
        }
        .navbar-burger.is-active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
          background: #004AAD;
        }
        .navbar-burger.is-active span:nth-child(2) {
          opacity: 0;
        }
        .navbar-burger.is-active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
          background: #004AAD;
        }

        /* ✅ Tampilkan burger hanya di tablet & HP */
        @media (max-width: 1024px) {
          .navbar-burger {
            display: block;
          }
          .navbar-item.products.has-dropdown .navbar-dropdown {
            position: static; /* biar inline di mobile */
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            display: ${isProductsOpen ? "flex" : "none"}; /* ✅ kontrol buka/tutup */
          }
        }
      `}</style>

      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" style={{ width: "88px" }} />
            </Link>

            {/* ✅ Burger Button */}
            <button
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="navMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>

              {/* ✅ Dropdown Products pakai array */}
              <div
                className={`navbar-item products has-dropdown ${isProductsOpen ? "is-active" : ""}`}
              >
                <span
                  className="navbar-link"
                  onClick={() => setIsProductsOpen(!isProductsOpen)} // ✅ toggle di mobile
                  role="button"
                >
                  Products
                </span>
                <div className="navbar-dropdown">
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      className="navbar-item"
                      to={product.path}
                      onClick={() => {
                        setIsActive(false); // ✅ close navbar setelah klik link
                        setIsProductsOpen(false); // ✅ tutup dropdown
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link className="navbar-item" to="/blog" onClick={() => setIsActive(false)}>
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" onClick={() => setIsActive(false)}>
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://pmb.aretacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsActive(false)}
              >
                Information Campus
              </a>
            </div>

            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsActive(false)}
              >
                <span className="icon whatsapp">
                  <img src={whatsapp} alt="whatsapp" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
