import React from 'react';

const useHead = (title, description) => {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      const meta = document.querySelector('meta[name="description"]');

      if (meta) {
        meta.setAttribute('content', description);
      }
    }
  }, [title, description]);
};

export default useHead;
