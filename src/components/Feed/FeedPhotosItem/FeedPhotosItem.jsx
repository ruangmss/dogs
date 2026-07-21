import React from 'react';
import './FeedPhotosItem.css';
import view from '../../../assets/view.svg';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className="photo">
      <img src={photo.src} alt={photo.title} />
      <span className="photo-views">
        <img src={view} alt="Ícone de visualização" />
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
