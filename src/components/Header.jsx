import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>MOTO<span>REPUESTOS</span></h1>
      </div>

      <nav className="header-nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="#modelos">Modelos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;