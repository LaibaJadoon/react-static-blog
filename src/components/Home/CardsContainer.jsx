import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CardsContainer = () => {
  return (
    <div className="flex justify-center my-2 w-full px-2">
      {/* Center the CardsContainer with equal space on both sides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[85vw]">
        {/* Container with responsive grid, max 4 items per row */}

        {/* Card 1 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1714618946021-8fbd6394d1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fDB8fHww"
            alt="Tech Image"
            className="w-full h-40 object-cover" // Reduced height
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Tech
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                AI
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Innovation
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              The Future of Artificial Intelligence
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              AI is shaping the future of tech. From self-driving cars to voice
              assistants, the possibilities are endless...
            </p>
            <Link to="/post/1">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Design Image"
            className="w-full h-40 object-cover" // Reduced height
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Design
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                UX
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                UI
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              The Imp. of UX/UI in Modern Apps
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              Good UX/UI design can make or break your application. It's
              essential to focus on user experience to stand out...
            </p>
            <Link to="/post/2">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D"
            alt="Business Image"
            className="w-full h-40 object-cover" // Reduced height
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Business
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Startup
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Growth
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              Scaling Your Startup with Innovation
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              Scaling a business in the tech world requires not only hard work
              but a focus on innovation. Learn how to accelerate growth...
            </p>
            <Link to="/post/3">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Cloud Computing Image"
            className="w-full h-40 object-cover" // Matching height
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Cloud
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Computing
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Tech
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              The Future of Cloud Computing
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              Cloud computing is transforming the way businesses manage data and
              applications. Explore the latest advancements in cloud tech...
            </p>
            <Link to="/post/4">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Entrepreneurship Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Business
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Entrepreneurship
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              Building a Successful Startup
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              Entrepreneurship is about more than just ideas; it's about execution and grit...
            </p>
            <Link to="/post/5">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1334575820/photo/business-woman-using-mobile-smartphone-on-global-network-connection-and-data-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=exzeKDLNUYiXd3bJi5wibch3oJcKy6GKQM508so1Ams="
            alt="Innovation Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <div className="flex space-x-2 mb-2 text-xs">
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Innovation
              </span>
              <span className="bg-gray-300 text-black px-2 py-0.5 rounded-full">
                Technology
              </span>
            </div>
            <h3 className="text-sm font-bold mb-2">
              Innovating for the Future of Tech
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-2 text-xs">
              Innovation drives progress. Let’s explore what the future holds for the tech world...
            </p>
            <Link to="/post/6">
              <button className="bg-[#E8BA00] text-black py-1 px-2 rounded-full hover:bg-yellow-400 text-xs">
                Read More
              </button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default CardsContainer;
