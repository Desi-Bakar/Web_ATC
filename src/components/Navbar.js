import React, { useState } from "react";
import { Link } from "gatsby";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/TrainingCenter.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

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
    { name: "Cisco", path: "/products/Cisco" },              // ✅ diperbaiki path & koma
    { name: "Bisnis Digital", path: "/products/BisnisDigital" } // ✅ path konsisten
  ];

  return (
    <>
      <style>{`
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
      `}</style>

      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" style={{ width: "88px" }} />
            </Link>
          </div>

          <div id="navMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>

              {/* Dropdown Products pakai array */}
              <div className="navbar-item products has-dropdown">
                <span className="navbar-link">Products</span>
                <div className="navbar-dropdown">
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      className="navbar-item"
                      to={product.path}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://pmb.aretacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
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
