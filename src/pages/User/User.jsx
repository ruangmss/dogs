import React from 'react';
import UserHeader from '../../components/UserHeader/UserHeader';
import { Routes, Route } from 'react-router-dom';
import UserPhotoPost from '../../components/UserPhotoPost/UserPhotoPost';
import UserStats from '../../components/UserStats/UserStats';
import Feed from '../../components/Feed/Feed';
import { UserContext } from '../../context/UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
