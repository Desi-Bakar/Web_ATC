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
    { name: "Digital Marketing", path: "/products/BisnisDigital" },
  ];

  return (
    <>
      {/* ✅ CSS diinject aman tanpa warning */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          .navbar {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1100;
            background: #fff;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }
          body { padding-top: 70px; }

          .navbar .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

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

          .navbar-start { display: flex; align-items: center; }
          .navbar-end { display: flex; align-items: center; }

          .navbar-item:hover { color: #004AAD; }

          .navbar-item.products .navbar-link {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 14px;
            font-weight: 500;
          }

          @media (max-width: 1024px) {
            .navbar-burger { display: block; }
            .navbar-menu {
              position: fixed;
              top: 0; left: 0; right: 0; bottom: 0;
              background: #fff;
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
            .navbar-item.products.open .navbar-dropdown { display: flex; }
          }

          .navbar-item.products.has-dropdown {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          .navbar-item.products .navbar-dropdown {
            position: absolute;
            top: 100%; left: 0;
            background: white;
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

          @media (max-width: 1024px) {
            .navbar-brand {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
            }
            .navbar-brand .navbar-item img { margin-left: 0; }
            .navbar-burger { margin-left: auto; }
          }
        `,
        }}
      />

      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          {/* Logo */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Areta Training Center logo" width="88" height="auto" />
            </Link>

            {/* Burger button */}
            <button
              type="button"
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Menu */}
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link to="/about" className="navbar-item" onClick={() => setIsActive(false)}>
                About
              </Link>

              <div
                className={`navbar-item products has-dropdown ${isProductsOpen ? "open" : ""}`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsProductsOpen(!isProductsOpen)}
              >
                <span className="navbar-link">Products</span>
                <div className="navbar-dropdown">
                  {products.map((product, index) => (
                    <Link
                      key={product.path + index}
                      to={product.path}
                      className="navbar-item"
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

              <Link to="/blog" className="navbar-item" onClick={() => setIsActive(false)}>
                Blog
              </Link>
              <Link to="/contact" className="navbar-item" onClick={() => setIsActive(false)}>
                Contact
              </Link>
              <a
                href="https://pmb.aretacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
                onClick={() => setIsActive(false)}
              >
                Information Campus
              </a>
            </div>

            {/* WhatsApp */}
            <div className="navbar-end">
              <a
                href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
                onClick={() => setIsActive(false)}
              >
                <img src={whatsapp} alt="Chat via WhatsApp" width="22" height="22" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
