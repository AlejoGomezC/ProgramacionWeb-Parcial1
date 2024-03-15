import React from 'react';
import './NavBar.css';
import logo from './carro.png';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>TuSegundazo.com</h1>
      <ul className="navbar-nav">
        <img id ="logo" src={logo} alt="Logo" />;

      </ul>
    </nav>
  );
}

export default Navbar;
