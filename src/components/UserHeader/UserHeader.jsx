import React from 'react';
import UserHeaderNav from './UserHeaderNav/UserHeaderNav';
import './UserHeader.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname.includes('estatisticas')) {
      setTitle('Estatísticas');
    } else if (pathname.includes('postar')) {
      setTitle('Postar Foto');
    } else {
      setTitle('Minha Conta');
    }
  }, [pathname]);

  return (
    <header className="user-header">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
