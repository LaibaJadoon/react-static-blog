import React, { useEffect } from 'react';
import PostMain from './PostMain';
import PostSidebar from './PostSidebar';

const PostDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
<div className="flex flex-col md:flex-row justify-center w-full mt-8">
      {/* PostMain: wider and centered on small screens */}
      <PostMain className="w-[95vw] md:w-[90vw] lg:w-[55vw] mx-auto md:mx-0" />

      {/* PostSidebar: appears below PostMain on small screens */}
      <div className="block md:hidden mt-4 w-[95vw] mx-auto">
        <PostSidebar />
      </div>

      {/* PostSidebar: appears to the right on medium and large screens */}
      <div className="hidden md:block md:w-[25vw]">
        <PostSidebar />
      </div>
    </div>
  );
};

export default PostDetail;
