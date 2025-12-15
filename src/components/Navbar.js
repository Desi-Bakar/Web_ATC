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

  // **Close dropdown when click outside (desktop only)**
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        if (window.innerWidth > 1024) setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // **Lock body scroll when mobile menu opened**
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        body { padding-top: 70px; }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 2000;
        }

        .navbar .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        /* LOGO */
        .navbar-brand img {
          width: 88px;
        }

        /* BURGER BUTTON */
        .navbar-burger {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          padding: 8px;
        }

        .navbar-burger span {
          display: block;
          width: 28px;
          height: 3px;
          background: #004AAD;
          margin: 5px 0;
          border-radius: 3px;
          transition: 0.3s;
        }

        /* ANIMASI BURGER --> X */
        .navbar-burger.is-active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .navbar-burger.is-active span:nth-child(2) {
          opacity: 0;
        }
        .navbar-burger.is-active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* MENU DESKTOP */
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .navbar-item {
          padding: 10px 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .navbar-item:hover {
          color: #004AAD;
        }

        /* DROPDOWN DESKTOP */
        .has-dropdown {
          position: relative;
        }

        .navbar-dropdown {
          position: absolute;
          top: 48px;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
          border-radius: 6px;
          display: none;
          flex-direction: column;
          min-width: 240px;
          z-index: 3000;
        }

        .has-dropdown:hover .navbar-dropdown {
          display: flex;
        }

        /* OVERLAY MOBILE */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.45);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease;
          z-index: 1500;
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* MOBILE ========================== */
        @media (max-width: 1024px) {
          .navbar-burger { display: block; }

          .navbar-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 75%;
            height: 100vh;
            padding-top: 120px;
            background: #fff;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            transform: translateX(100%);
            transition: 0.35s ease;
            box-shadow: -3px 0 18px rgba(0,0,0,0.18);
            overflow-y: auto;
            z-index: 2001;
          }

          .navbar-menu.is-active {
            transform: translateX(0%);
          }

          /* MOBILE DROPDOWN */
          .navbar-dropdown {
            position: relative;
            top: 0;
            box-shadow: none;
            width: 100%;
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: 0.3s ease;
          }

          .has-dropdown.open .navbar-dropdown {
            max-height: 600px;
            opacity: 1;
          }
        }
      `}</style>

      {/* ================= OVERLAY ================= */}
      <div
        className={`menu-overlay ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(false)}
      ></div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="container">

          {/* LOGO */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* BURGER (OPEN + CLOSE) */}
          <button
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span></span><span></span><span></span>
          </button>

          {/* MENU */}
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>

            <Link className="navbar-item" to="/about" onClick={() => setIsActive(false)}>
              About
            </Link>

            {/* DROPDOWN */}
            <div
              className={`navbar-item has-dropdown ${isProductsOpen ? "open" : ""}`}
              ref={dropdownRef}
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
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
              rel="noreferrer"
            >
              Information Campus
            </a>

            <a
              className="navbar-item"
              href="https://api.whatsapp.com/send?phone=6281285234904"
              target="_blank"
              rel="noreferrer"
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
