import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed/Feed';
import useHead from '../../hooks/useHead';

const UserProfile = () => {
  const { user } = useParams();
  const profileName = user.charAt(0).toUpperCase() + user.slice(1);
  const headTitle = profileName.trim().split(/\s+/)[0];

  useHead(`${headTitle} | Dogs`, `Veja as fotos e publicações compartilhadas por ${user}.`);

  return (
    <section className="container main-container">
      <h1 className="title">{profileName}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
