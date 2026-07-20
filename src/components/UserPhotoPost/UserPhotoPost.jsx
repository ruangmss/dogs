import React from 'react';
import './UserPhotoPost.css';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api/api';
import Error from '../Form/Error/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const idade = useForm('number');
  const peso = useForm('number');

  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function submitPost(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);
    formData.append('img', img.raw);

    const token = localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function imgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className="photo-post">
      <form onSubmit={submitPost}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input className="file" type="file" name="img" id="img" onChange={imgChange} />

        {loading ? <Button label="Enviando..." disabled={true} /> : <Button label="Enviar" />}
        <Error error={error} />
      </form>

      <div className="photo-preview">{img.preview && <img src={img.preview} />}</div>
    </section>
  );
};

export default UserPhotoPost;
