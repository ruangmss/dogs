import React from 'react';
import useHead from '../../hooks/useHead';

const NotFound = () => {
  useHead(
    '404 | Dogs',
    'A página que você procura não foi encontrada. Volte para a página inicial e continue explorando o Dogs.',
  );

  return (
    <div className="container main-container">
      <h1 className="title">404</h1>
      <p>Página não encontrada.</p>
    </div>
  );
};

export default NotFound;
