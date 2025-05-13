import React from 'react';
import RelatedPostCard from './RelatedPostCard';

const PostSidebar = () => {

    const relatedPosts = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence',
      image: 'https://plus.unsplash.com/premium_photo-1714618946021-8fbd6394d1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'The Importance of UX/UI in Modern Apps',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      title: 'The Future of Cloud Computing',
      image: 'https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 4,
      title: 'Building a Successful Startup',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <div className="w-[25vw]">
      <div className="bg-gray-100 p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Related Blogs</h4>
        {relatedPosts.map((post) => (
          <RelatedPostCard key={post.id} image={post.image} title={post.title} />
        ))}
      </div>
    </div>
  );
};

export default PostSidebar;
