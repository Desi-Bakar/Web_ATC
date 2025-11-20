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

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 1024;

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

        .navbar-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .navbar-burger span {
          display: block;
          width: 25px;
          height: 3px;
          background: #004AAD;
          margin: 5px 0;
          transition: 0.3s;
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
          gap: 14px;
        }

        .navbar-item {
          font-size: 16px;
          padding: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .navbar-item:hover { color: #004AAD; }

        /* Dropdown desktop */
        .has-dropdown {
          position: relative;
        }
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
        }
        .has-dropdown.open .navbar-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Mobile */
        @media (max-width:1024px){
          .navbar-burger { display: block; }
          .navbar-menu {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #fff;
            flex-direction: column;
            padding-top: 100px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-20px);
            transition: 0.3s;
          }
          .navbar-menu.is-active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }
          .navbar-item {
            width: 100%;
            text-align: center;
            font-size: 18px;
          }
          .navbar-dropdown {
            position: relative;
            width: 100%;
            border: none;
            box-shadow: none;
          }
        }
      `}</style>

      <nav className="navbar" role="navigation">
        <div className="container">

          {/* Logo */}
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

          {/* Menu */}
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <Link className="navbar-item" to="/about" onClick={() => setIsActive(false)}>
              About
            </Link>

            {/* PRODUCTS */}
            <div 
              className={`navbar-item has-dropdown ${isProductsOpen ? "open" : ""}`}
              ref={dropdownRef}
              onClick={() => isMobile && setIsProductsOpen(!isProductsOpen)}
              onMouseEnter={() => !isMobile && setIsProductsOpen(true)}
              onMouseLeave={() => !isMobile && setIsProductsOpen(false)}
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
              rel="noopener noreferrer"
              onClick={() => setIsActive(false)}
            >
              Information Campus
            </a>

            <a 
              className="navbar-item"
              href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsActive(false)}
            >
              <img src={whatsapp} alt="whatsapp" style={{ width: "24px" }} />
            </a>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
