import React from 'react';
import './PhotoDelete.css';
import { PHOTO_DELETE } from '../../../api/api';
import useFetch from '../../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function removePhoto() {
    const confirm = window.confirm('Você realmente deseja deletar o post?');

    if (confirm) {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }

      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <div>
      {loading ? (
        <button className="photo-delete-button" disabled={true}>
          Excluindo...
        </button>
      ) : (
        <button className="photo-delete-button" onClick={removePhoto}>
          Excluir
        </button>
      )}
    </div>
  );
};

export default PhotoDelete;
