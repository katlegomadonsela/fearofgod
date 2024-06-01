import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className="-mt-[52px]">
      <div className="custom--splash-index flex flex-col justify-center mb-6">
        <div className="text-gray-200 flex flex-col w-1/2 m-auto text-center mb-40">
          <span className="text-8xl uppercase tracking-[.25em]">Athletics</span>
          <Link className="text-white text-lg underline hover:text-gray-200" to="/collections/athletics">Shop</Link>
        </div>
      </div>

      <div className="grid grid-cols-3 space-x-6 mx-6 mb-8">
        <div className="bg-gray-50 h-[650px] bg-[url('./assets/splash-card.jpeg')] bg-cover text-center flex flex-col justify-center">
          <Link className="text-white text-5xl uppercase hover:text-gray-200" to="/collections/fearofgod">Fear of God</Link>
        </div>
        <div className="bg-gray-50 h-[650px] bg-[url('./assets/splash-card1.jpeg')] bg-cover text-center flex flex-col justify-center">
          <Link className="text-white text-5xl uppercase hover:text-gray-200" to="/collections/essentials">Essentials</Link>
        </div>
        <div className="bg-gray-50 h-[650px] bg-[url('./assets/splash-card4.jpeg')] bg-cover text-center flex flex-col justify-center">
          <Link className="text-white text-5xl uppercase hover:text-gray-200" to="/collections/athletics">Athletics</Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage;