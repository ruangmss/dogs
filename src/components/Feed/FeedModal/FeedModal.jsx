import React from 'react';
import './FeedModal.css';
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../api/api';
import Error from '../../Form/Error/Error';
import Loading from '../../Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo.id]);

  function closeModal(event) {
    // O modal pega a tela toda, a lógica se baseia nisso
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className="photo-modal" onClick={closeModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
