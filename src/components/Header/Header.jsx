import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import dogs from '../../assets/dogs.svg';
import user from '../../assets/user.svg';
import logout from '../../assets/logout.svg';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className="header-bg">
      <nav className="header container">
        <Link className="header-link" to="/">
          <img src={dogs} alt="Logo Dogs" />
        </Link>

        <div className="header-links">
          {data ? (
            <Link className="header-link" to="/perfil">
              {data.nome} <img src={user} alt="Ícone de usuário" />
            </Link>
          ) : (
            <Link className="header-link" to="/login">
              Login / Criar <img src={user} alt="Ícone de usuário" />
            </Link>
          )}

          {data && (
            <button>
              <img src={logout} alt="Ícone de logout" onClick={userLogout} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
