import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

import FearOfGodDropdown from './dropdown/FearOfGod';


const Navigation = () => {
  const dropdown1Ref = useRef(null);
  
  const showDropdown = () => {
    dropdown1Ref.current.classList.remove("custom--hide");
  }
  
  const hideDropdown = () => {
    dropdown1Ref.current.classList.add("custom--hide");
  }

  return (
    <div className="fixed w-full bg-white">
      <div className="border-b grid grid-cols-3 px-10">
        <div className="custom--nav-links flex flex-wrap  gap-7 text-[#555] text-sm font-extralight content-center">
          <Link 
            to="/" 
            id="nav-link1"
            className="custom--nav-link1"
            onMouseOver={showDropdown} 
            onMouseLeave={hideDropdown}
          >
            Fear Of God
          </Link>

          <Link to="/">Athletics</Link>
          <Link to="/">Essentials</Link>
        </div>
        <div className="flex flex-wrap justify-center h-full content-center">
          <Link to="/" className="custom--nav-link2 text-xl text-[#444] font-medium uppercase">Fear of God</Link>
        </div>
        <div className="nav-links flex flex-wrap gap-7 justify-end text-sm text-right text-[#555] font-extralight content-center">
          <Link to="/">Search</Link>
          <Link to="/account/login">Account</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div ref={dropdown1Ref} onMouseOver={showDropdown} onMouseLeave={hideDropdown} className="custom--hide -mt-1">
        {
          <FearOfGodDropdown />
        }
      </div>
      
    </div>
  )
};

export default Navigation;