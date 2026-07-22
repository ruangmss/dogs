import React from 'react';
import Feed from '../../components/Feed/Feed';
import Loading from '../../components/Loading/Loading';
import useHead from '../../hooks/useHead';

const Home = () => {
  useHead('Home | Dogs', 'Explore as fotos mais recentes compartilhadas pela comunidade Dogs.');

  return (
    <section className="container main-container bg">
      <Feed />
    </section>
  );
};

export default Home;
