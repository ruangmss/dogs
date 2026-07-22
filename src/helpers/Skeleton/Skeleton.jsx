import React from 'react';
import './Skeleton.css';

const Skeleton = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function removeSkeleton({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="skeleton-wrapper">
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={removeSkeleton} className="skeleton-image" alt={alt} {...props} />
    </div>
  );
};

export default Skeleton;
