import React from 'react';
import { Link } from 'react-router-dom';

const TechPost = () => {
  return (
    <div className="flex justify-center my-4">
      <div
        className="bg-cover bg-center px-4 py-4 rounded-lg w-[85vw] max-w-7xl border border-gray-300"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1716436329475-4c55d05383bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Tags */}
        <div className="flex space-x-2 mb-1">
          <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full text-xs">Tech</span>
          <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full text-xs">AI</span>
          <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full text-xs">Innovation</span>
        </div>

        {/* Date */}
        <div className="text-gray-200 text-xs mb-2">May 12, 2025</div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-2 max-w-[70%]">The Future of Artificial Intelligence in Tech</h2>

        {/* Description (2 lines max) */}
        <p className="text-white mb-3 max-w-[70%] line-clamp-2 text-sm">
          Artificial intelligence is revolutionizing the tech industry. From self-driving cars to AI assistants, the future looks promising. Discover how AI is shaping the next generation of technology...
        </p>

        {/* Read More Button (smaller) */}
        <Link
          to="/post/ai-future"
          className="inline-block bg-[#E8BA00] text-black text-sm py-1 px-3 rounded-full hover:bg-yellow-400"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TechPost;
