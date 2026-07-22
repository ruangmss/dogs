import React from 'react';
import './PhotoContent.css';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import photoViews from '../../../assets/view-black.svg';
import { UserContext } from '../../../context/UserContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import Skeleton from '../../../helpers/Skeleton/Skeleton';

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  return (
    <div className={single ? 'photo-single' : 'photo-content'}>
      <div className="photo-content-img">
        <Skeleton src={photo.src} alt={photo.title} />
      </div>

      <div className="photo-content-details">
        <div>
          <div className="photo-content-details-head">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link className="photo-author" to={`/perfil/${photo.author}`}>
                @{photo.author}
              </Link>
            )}

            <span className="photo-content-views">
              <img src={photoViews} alt="Ícone de visualização" />
              {photo.acessos}
            </span>
          </div>

          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className="photo-content-attributes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
