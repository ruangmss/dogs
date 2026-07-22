import React from 'react';
import './Photo.css';
import useFetch from '../../hooks/useFetch';
import { PHOTO_PAGE_GET } from '../../api/api';
import Error from '../Form/Error/Error';
import PhotoContent from './PhotoContent/PhotoContent';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_PAGE_GET(id);
    request(url, options);
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <section className="container main-container">
        <PhotoContent single={true} data={data} />
      </section>
    );
  }

  return null;
};

export default Photo;
