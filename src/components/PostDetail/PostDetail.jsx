import React, { useEffect } from 'react';
import PostMain from './PostMain';
import PostSidebar from './PostSidebar';

const PostDetail = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center w-full px-4 mt-8">
      <PostMain className="w-full sm:w-[60vw] lg:w-[55vw]" />
      <PostSidebar className="w-full sm:w-[30vw] lg:w-[25vw]" />
    </div>
  );
};

export default PostDetail;
