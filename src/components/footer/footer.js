import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8485E6] py-8 text-[#ffffff]">
      <div className="w-full px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 justify-center items-center">
          
          {/* Product Section */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Speech-to-Text</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Real-Time Streaming</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Speech-to-text</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Audio Intelligence</li>
            </ul>
          </div>

          {/* Use cases Section */}
          <div>
            <h3 className="font-semibold mb-4">Use cases</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Customer experience</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Sales enablement</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Meeting assistants</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Media</li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Playground</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Documentation</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Discord</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">About us</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Careers</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">Terms & conditions</li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
