import React from 'react';
import './FeedPhotos.css';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../api/api';
import Error from '../../Form/Error/Error';
import Loading from '../../Loading/Loading';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;

      const { url, options } = PHOTOS_GET(page, total, user);
      const { response, json } = await request(url, options);

      // Se o tamanho do array for menor do que o total de itens a carregar, quer dizer que não deve mais ocorrer scroll, pois a quantidade de páginas chegou ao fim
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <ul className="feed">
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  }

  return null;
};

export default FeedPhotos;
