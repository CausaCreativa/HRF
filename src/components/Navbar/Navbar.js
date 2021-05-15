import React from "react";
import { Nav } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div class="wrapper">
          <nav class="navbar">
            <a href="#" class="logo">
              Logo
            </a>
            <ul class="navbar__container">
              <a href="/">
                <li class="navbar-item">Inicio</li>
              </a>
              <a href="/aboutus">
                <li class="navbar-item">Nosotros</li>
              </a>
              <a href="/service">
                <li class="navbar-item">Servicios</li>
              </a>
              <a href="/contact">
                <li class="navbar-item">Contacto</li>
              </a>
            </ul>
          </nav>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
