import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container main-container">
      <h1 className="title">{user.charAt(0).toUpperCase() + user.slice(1)}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
