import React from 'react';
import { Link } from 'react-router-dom';

const FearOfGodDropdown = ({setIsShowing}) => {

  const mouseOverHandler = () => {
    document.getElementById('nav-link1').classList.add('hovering');
  }

  const mouseLeaveHandler = () => {
    document.getElementById('nav-link1').classList.remove('hovering');
  }

  return (
    <div 
      className="custom--dropdown1 px-10 py-4 absolute bg-white border-b w-full font-extralight" 
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="grid grid-cols-3 w-3/5">
        <div className="custom--dropdown-links flex flex-col">
          <span className="custom--dropdown-top-link"><Link to='/'>New Releases</Link></span>
          <Link to='/'>Tops</Link>
          <Link to='/'>Bottoms </Link>
          <Link to='/'>Knitwear</Link>
          <Link to='/'>Outerwear</Link>
          <Link to='/'>Suiting</Link>
          <Link to='/'>Footwear</Link>
          <Link to='/'>Accessories</Link>
          <span className="custom--dropdown-bottom-link"><Link to='/'>Shop All</Link></span>
        </div>
        <div className="custom--dropdown-links flex flex-col">
          <span className="custom--dropdown-top-link"><Link to='/'>Collection 8</Link></span>
          <Link to='/'>Shop</Link>
          <Link to='/'>Overview </Link>
          <Link to='/'>Campaign</Link>
          <Link to='/'>Looks</Link>
          <Link to='/'>Behind the Vision</Link>
          <Link to='/'>Runway</Link>
          <Link to='/'>A closer look</Link>
          <span className="custom--dropdown-bottom-link"><Link to='/'>Shop All</Link></span>
        </div>
        <div className="custom--dropdown-links flex flex-col">
          <span className="custom--dropdown-top-link"><Link to='/'>Fear of God Loungewear</Link></span>
          <Link to='/'>Shop</Link>
          <Link to='/'>Overview </Link>
          <Link to='/'>Campaign</Link>
          <Link to='/'>Lookbook</Link>
          <Link to='/'>Film</Link>
        </div>
      </div>
    </div>
  )
}

export default FearOfGodDropdown;