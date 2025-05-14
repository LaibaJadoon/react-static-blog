import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ image, tags, title, description, link }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <div className="flex space-x-2 mb-2 text-xs">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-300 text-black px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2 text-xs">{description}</p>
        <Link to={link}>
          <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
