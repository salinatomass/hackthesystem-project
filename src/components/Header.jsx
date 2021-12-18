import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <Link to="/">
        <h1 className="Header-logo">ZAP</h1>
      </Link>
      <Link to="/auth/register">Registrate</Link>
    </nav>
  );
};

export default Header;
