import React, { forwardRef } from "react";
// Receives a reference so the header can scroll to it
const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-black text-white py-2 mt-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-yellow-400"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-yellow-400"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-yellow-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-yellow-400"
        >
          GitHub
        </a>
      </div>
      <div className="text-center text-xs mt-2"> 
        <p>© 2025 Laiba Jadoon. All Rights Reserved</p>
      </div>
    </div>
  );
});

export default Footer;
