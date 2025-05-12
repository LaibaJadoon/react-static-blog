import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams(); // Extract postId from URL

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Full Post Title - {postId}</h2>
      <p className="text-gray-700 mb-4">
        This is where the full description of the post will be shown. You can customize this page to show additional details about the post, such as images, tags, etc.
      </p>
      <p className="text-gray-700">
        Here goes the rest of the post content. Add more paragraphs, images, etc., to provide full details to the user.
      </p>
    </div>
  );
};

export default PostDetail;
