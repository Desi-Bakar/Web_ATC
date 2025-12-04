import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/Training.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #fff;
          z-index: 1100;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .navbar-link::after {
          display: none !important;
        }

        body { padding-top: 70px; }

        .navbar .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand img {
          width: 88px;
        }

        /* ---------- BURGER BUTTON ---------- */
        .navbar-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 2000;
        }
        .navbar-burger span {
          display: block;
          width: 28px;
          height: 3px;
          background: #004AAD;
          margin: 6px 0;
          border-radius: 2px;
          transition: 0.3s;
        }

        .navbar-burger.is-active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .navbar-burger.is-active span:nth-child(2) { opacity: 0; }
        .navbar-burger.is-active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .navbar-item {
          font-size: 16px;
          padding: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .navbar-item:hover { color: #004AAD; }

        .has-dropdown { position: relative; }

        .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border-radius: 6px;
          border: 1px solid #eee;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: 0.25s;
          display: none;
        }

        /* === DESKTOP HOVER === */
        @media (min-width: 1025px) {
          .has-dropdown:hover .navbar-dropdown {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
            display: block !important;
          }
        }

        /* === MOBILE FIX === */
        @media (max-width: 1024px) {

          .navbar-burger {
            display: block;
            position: absolute;
            right: 20px;
          }

          .navbar-menu {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 78%;
            background: #fff;
            flex-direction: column;
            align-items: center;
            padding-top: 120px;
            gap: 20px;
            opacity: 0;
            pointer-events: none;
            transform: translateX(100%);
            transition: 0.3s ease;
            box-shadow: -3px 0 15px rgba(0,0,0,0.15);
          }

          .navbar-menu.is-active {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0);
          }

          .navbar-item {
            width: 100%;
            text-align: center;
            font-size: 20px;
            padding: 14px 0;
          }

          /* === FIX dropdown di mobile === */
          .navbar-dropdown {
            position: static !important;
            width: 100%;
            text-align: center;
            box-shadow: none !important;
            border: none !important;
            margin-top: 4px;

            max-height: 0;
            overflow: hidden;
            opacity: 1 !important;
            visibility: visible !important;
            transition: max-height 0.3s ease;
            display: block !important; /* FIX PENTING */
          }

          .has-dropdown.open .navbar-dropdown {
            max-height: 900px;
          }

          /* Matikan hover desktop biar tidak ganggu mobile */
          .has-dropdown:hover .navbar-dropdown {
            display: none !important;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Logo" />
            </Link>

            <button 
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>

          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>

            <Link className="navbar-item" to="/about" onClick={() => setIsActive(false)}>
              About
            </Link>

            <div
              className={`navbar-item has-dropdown ${isProductsOpen ? "open" : ""}`}
              ref={dropdownRef}
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setIsProductsOpen(!isProductsOpen);
                }
              }}
            >
              <span className="navbar-link">Products</span>

              <div className="navbar-dropdown">
                {products.map((item, i) => (
                  <Link
                    key={i}
                    className="navbar-item"
                    to={item.path}
                    onClick={() => {
                      setIsActive(false);
                      setIsProductsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link className="navbar-item" to="/blog" onClick={() => setIsActive(false)}>Blog</Link>
            <Link className="navbar-item" to="/contact" onClick={() => setIsActive(false)}>Contact</Link>

            <a 
              className="navbar-item"
              href="https://pmb.aretacollege.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsActive(false)}
            >
              Information Campus
            </a>

            <a 
              className="navbar-item"
              href="https://api.whatsapp.com/send?phone=6281285234904"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsActive(false)}
            >
              <img src={whatsapp} alt="wa" style={{ width: "26px" }} />
            </a>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
