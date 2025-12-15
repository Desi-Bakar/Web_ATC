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

  /* CLICK OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* LOCK SCROLL MOBILE */
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
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

        /* LOGO */
        .navbar-brand {
          display: flex;
          align-items: center;
          padding: 6px 0;
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
          cursor: pointer;
          font-weight: 500;
        }

        /* HIGHLIGHT MENU */
        .nav-campus {
          background: ;
          
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 600;
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

        @media (max-width: 1024px) {
          .navbar-burger {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 75%;
            height: 100vh;
            background: #fff;
            flex-direction: column;
            padding-top: 120px;
            transform: translateX(100%);
            transition: .35s;
            z-index: 2001;

            /* ⬇️ INI KUNCI */
            align-items: center;
            text-align: center;
          }

          .navbar-menu.is-active {
            transform: translateX(0);
          }

          /* SEMUA ITEM MENU */
          .navbar-item {
            width: 100%;
            text-align: center;
            font-size: 18px;
          }

          /* DROPDOWN */
          .has-dropdown {
            width: 100%;
          }

          .navbar-dropdown {
            position: relative;
            top: 0;
            box-shadow: none;
            width: 100%;
            align-items: center;
          }

          .navbar-dropdown .navbar-item {
            text-align: center;
            padding: 12px 0;
          }

          /* INFORMASI KAMPUS */
          .nav-campus {
            margin-top: 16px;
            text-align: center;
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
            <span></span><span></span><span></span>
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

            {/* INFORMASI KAMPUS */}
            <a
              href="https://pmb.aretacollege.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-campus"
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
