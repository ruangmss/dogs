import React from 'react';
import send from '../../../../assets/send.svg';
import useFetch from '../../../../hooks/useFetch';
import { COMMENT_POST } from '../../../../api/api';
import Error from '../../../Form/Error/Error';
import './PhotoCommentsForm.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error, loading } = useFetch();

  async function submitForm(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const trimmedComment = comment.trim();

    if (!token || !trimmedComment || loading) {
      return;
    }

    const { url, options } = COMMENT_POST(id, { comment: trimmedComment }, token);
    const { response, json } = await request(url, options);

    if (response?.ok && json) {
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
        aria-label="Comentário"
        placeholder="Comente..."
        required
      />

      <button type="submit" disabled={loading || !comment.trim()} aria-label="Enviar comentário">
        <img src={send} alt="Ícone de envio" />
      </button>

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
