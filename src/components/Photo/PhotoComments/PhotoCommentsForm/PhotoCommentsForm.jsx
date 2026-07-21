import React from 'react';
import send from '../../../../assets/send.svg';
import useFetch from '../../../../hooks/useFetch';
import { COMMENT_POST } from '../../../../api/api';
import Error from '../../../Form/Error/Error';
import './PhotoCommentsForm.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function submitForm(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={submitForm} className="comments-form">
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        id="comment"
        label="comment"
        placeholder="Comente..."
      />

      <button>
        <img src={send} alt="Ícone de envio" />
      </button>

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
