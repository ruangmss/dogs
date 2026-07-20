import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import add from '../../../assets/add.svg';
import feed from '../../../assets/feed.svg';
import statistics from '../../../assets/statistics.svg';
import logout from '../../../assets/logout.svg';
import './UserHeaderNav.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className="user-header-nav">
      <NavLink to="/conta" end>
        <img src={feed} alt="Ícone de feed" />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/postar">
        <img src={add} alt="Ícone de adicionar postagem" />
        {mobile && 'Adicionar Post'}
      </NavLink>

      <NavLink to="/conta/estatisticas" alt="Ícone de estatísticas">
        <img src={statistics} />
        {mobile && 'Estatísticas'}
      </NavLink>

      <button onClick={userLogout}>
        <img src={logout} alt="Ícone de logout" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
