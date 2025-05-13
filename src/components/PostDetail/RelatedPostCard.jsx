import React from 'react';

const RelatedPostCard = ({ image, title }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded mr-4"
      />
      <div>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 underline hover:underline-offset-2 transition duration-200 font-medium"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default RelatedPostCard;
