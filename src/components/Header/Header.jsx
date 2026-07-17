import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import dogs from '../../assets/dogs.svg';
import user from '../../assets/user.svg';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header container">
        <Link className="header-link" to="/">
          <img src={dogs} alt="Logo Dogs" />
        </Link>

        {data ? (
          <Link className="header-link" to="/perfil">
            {data.nome} <img src={user} alt="Ícone de usuário" />
          </Link>
        ) : (
          <Link className="header-link" to="/login">
            Login / Criar <img src={user} alt="Ícone de usuário" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
