import React, { useState } from "react";
import { Link } from "gatsby";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/TrainingCenter.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
    { name: "Cisco", path: "/products/Cisco" },
    { name: "Digital Marketing", path: "/products/BisnisDigital" }
  ];

  return (
    <>
      <style>{`
        /* Navbar fixed di atas */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1100;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        body {
          padding-top: 70px; /* biar konten ga ketiban */
        }

        /* Container */
        .navbar .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Burger button */
        .navbar-burger {
          display: none;
          cursor: pointer;
          background: none;
          border: none;
          z-index: 1101;
        }
        .navbar-burger span {
          display: block;
          height: 3px;
          width: 24px;
          background: #004AAD;
          margin: 5px auto;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar-burger.is-active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-burger.is-active span:nth-child(2) {
          opacity: 0;
        }
        .navbar-burger.is-active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Default menu (desktop) */
        .navbar-menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
        }

        .navbar-start .navbar-item,
        .navbar-end .navbar-item {
          padding: 0 14px;
          font-size: 16px;
          font-weight: 500;
        }
        .navbar-start {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .navbar-end {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .navbar-item:hover {
          color: #004AAD;
        }

        /* Khusus Products link */
        .navbar-item.products .navbar-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          font-weight: 500;
        }

        /* Mobile overlay menu */
        @media (max-width: 1024px) {
          .navbar-burger {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #ffffff;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;

            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: all 0.4s ease;
            z-index: 1100;
          }
          .navbar-menu.is-active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .navbar-start, .navbar-end {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .navbar-item {
            font-size: 18px;
            margin: 6px 0;
            display: flex;
            justify-content: center;
            width: 100%;
            transition: color 0.2s ease;
          }
          .navbar-item:hover {
            color: #004AAD;
          }

          .navbar-item.products .navbar-dropdown {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 6px;
            align-items: center;
          }
          .navbar-item.products.open .navbar-dropdown {
            display: flex;
          }
          .navbar-item.products .navbar-dropdown .navbar-item {
            justify-content: center;
          }
        }

        /* Dropdown Products (desktop) */
        .navbar-item.products.has-dropdown {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .navbar-item.products .navbar-link::after {
          display: none !important;
        }
        .navbar-item.products .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          display: flex;
          flex-direction: column;
          min-width: 220px;
          padding: 6px 0;
          border-radius: 6px;
          border: 1px solid #eee;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .navbar-item.products.open .navbar-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .navbar-item.products .navbar-dropdown .navbar-item {
          padding: 10px 16px;
          font-size: 15px;
          transition: background 0.2s ease;
        }
        .navbar-item.products .navbar-dropdown .navbar-item:hover {
          background: #f5f7ff;
          color: #004AAD;
        }

        /* === FIX: Logo khusus HP/tablet ke kiri === */
        @media (max-width: 1024px) {
          .navbar-brand {
            display: flex;
            justify-content: flex-start; /* logo di kiri */
            align-items: center;
            width: 100%;
          }

          .navbar-brand .navbar-item img {
            margin-left: 0; /* rapetin logo */
          }

          .navbar-burger {
            margin-left: auto; /* burger tetap di kanan */
          }
        }
      `}</style>

      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          {/* Logo */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" style={{ width: "88px" }} />
            </Link>

            {/* Burger button */}
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

          {/* Menu */}
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/about" onClick={() => setIsActive(false)}>
                About
              </Link>

              {/* Products dropdown */}
              <div
                className={`navbar-item products has-dropdown ${isProductsOpen ? "open" : ""}`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span className="navbar-link">Products</span>
                <div className="navbar-dropdown">
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      className="navbar-item"
                      to={product.path}
                      onClick={() => {
                        setIsActive(false);
                        setIsProductsOpen(false);
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

            {/* WhatsApp button */}
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsActive(false)}
              >
                <span className="icon whatsapp">
                  <img src={whatsapp} alt="whatsapp" style={{ width: "22px" }} />
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


