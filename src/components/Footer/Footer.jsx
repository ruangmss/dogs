import React from 'react';
import dogsFooter from '../../assets/dogs-footer.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={dogsFooter} alt="Logo Dogs" />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
