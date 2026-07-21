import React from 'react';
import './FeedPhotos.css';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../api/api';
import Error from '../../Form/Error/Error';
import Loading from '../../Loading/Loading';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET(1, 3, 0);
      const { response, json } = await request(url, options);
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
