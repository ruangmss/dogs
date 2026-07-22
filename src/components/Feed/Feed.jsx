import React from 'react';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      const documentHeight = document.documentElement.scrollHeight;
      const hasNoScrollbar = documentHeight <= window.innerHeight;
      const isNearBottom = window.scrollY + window.innerHeight >= documentHeight * 0.75;

      if (infinite && (hasNoScrollbar || isNearBottom) && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map((page) => (
        <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}
    </div>
  );
};

export default Feed;
