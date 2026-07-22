import React from 'react';
import './FeedPhotosItem.css';
import view from '../../../assets/view.svg';
import Skeleton from '../../../helpers/Skeleton/Skeleton';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function getPhoto() {
    setModalPhoto(photo);
  }

  return (
    <li className="photo" onClick={getPhoto}>
      <Skeleton src={photo.src} alt={photo.title} />
      <span className="photo-views">
        <img src={view} alt="Ícone de visualização" />
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
