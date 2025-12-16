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

  /* CLICK OUTSIDE DROPDOWN */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* LOCK BODY SCROLL (MENU TETAP BISA SCROLL) */
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
  }, [isActive]);

  return (
    <>
      <style>{`
        body { padding-top: 88px; }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,.1);
          z-index: 2000;
        }

        .navbar .container {
          max-width: 1240px;
          margin: auto;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 88px;
        }

        .navbar-brand img {
          height: 52px;
          width: 130px;
          object-fit: contain;
        }

        .navbar-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .navbar-burger span {
          display: block;
          width: 28px;
          height: 3px;
          background: #004AAD;
          margin: 5px 0;
          transition: .3s;
        }

        .navbar-burger.is-active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .navbar-burger.is-active span:nth-child(2) { opacity: 0; }
        .navbar-burger.is-active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .navbar-item {
          padding: 10px 8px;
          font-weight: 500;
        }

        .has-dropdown {
          position: relative;
        }

        .navbar-dropdown {
          position: absolute;
          top: 52px;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 18px rgba(0,0,0,.12);
          border-radius: 8px;
          display: none;
          flex-direction: column;
          min-width: 260px;
          z-index: 3000;
        }

        .has-dropdown.open .navbar-dropdown {
          display: flex;
        }

        .menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.45);
          opacity: 0;
          visibility: hidden;
          transition: .3s;
          z-index: 1500;
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* ================= MOBILE ONLY ================= */
        @media (max-width: 1024px) {
          .navbar-burger {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 78%;
            max-width: 360px;
            height: 100dvh;
            background: #fff;

            display: flex;
            flex-direction: column;
            padding: 96px 16px 24px;

            transform: translateX(100%);
            transition: transform .35s ease;
            z-index: 2001;

            overflow-y: auto;
          }

          .navbar-menu.is-active {
            transform: translateX(0);
          }

          .navbar-item {
            font-size: 16px;
            padding: 12px 6px;
            border-bottom: 1px solid #eee;
          }

          /* PRODUCTS DROPDOWN MOBILE */
          .has-dropdown {
            width: 100%;
          }

          .has-dropdown > span {
            display: block;
            padding: 12px 6px;
            font-weight: 600;
          }

          .navbar-dropdown {
            position: relative;
            width: 100%;
            box-shadow: none;
            background: #f9fafb;

            max-height: 0;
            overflow-y: auto;
            transition: max-height .3s ease;
          }

          .has-dropdown.open .navbar-dropdown {
            max-height: 55vh; /* ✅ SCROLLABLE */
          }

          .navbar-dropdown .navbar-item {
            padding: 10px 14px;
            font-size: 15px;
            border-bottom: 1px solid #e5e7eb;
          }
        }
      `}</style>

      <div
        className={`menu-overlay ${isActive ? "active" : ""}`}
        onClick={() => {
          setIsActive(false);
          setIsProductsOpen(false);
        }}
      />

      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo Areta" />
          </Link>

          <button
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span /><span /><span />
          </button>

          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <Link className="navbar-item" to="/about">About</Link>

            <div
              className={`navbar-item has-dropdown ${isProductsOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <span onClick={() => setIsProductsOpen(!isProductsOpen)}>
                Products
              </span>

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

            <Link className="navbar-item" to="/blog">Blog</Link>
            <Link className="navbar-item" to="/contact">Contact</Link>

            <a
              className="navbar-item"
              href="https://pmb.aretacollege.com/"
              target="_blank"
              rel="noreferrer"
            >
              Informasi Kampus
            </a>

            <a
              className="navbar-item"
              href="https://api.whatsapp.com/send?phone=6281285234904"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="wa" style={{ width: 26 }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
