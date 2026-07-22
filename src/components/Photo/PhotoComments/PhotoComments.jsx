import React from 'react';
import './PhotoComments.css';
import { UserContext } from '../../../context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments || []);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    setComments(props.comments || []);
  }, [props.comments]);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul className="comments" ref={commentsSection}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
