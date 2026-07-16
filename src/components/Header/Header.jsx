import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import dogs from '../../assets/dogs.svg';
import user from '../../assets/user.svg';

const Header = () => {
  return (
    <header className="header-bg">
      <nav className="header container">
        <Link className="header-link" to="/">
          <img src={dogs} alt="Logo Dogs" />
        </Link>

        <Link className="header-link" to="/login">
          Login / Criar <img src={user} alt="Ícone de usuário" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
