import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import TextWithIcon from '../../components/textWithIcon/TextWithIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTruck, faGamepad, faHeadset, faTrophy, faMessage, faQuestion, faPlay, faHeart, faShoppingCart, faUser, faMagnifyingGlass, faGem } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpandedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar__top'>
        <div className='top__left'>
          <img className='navbar__logo' src="src\assets\website-logo.jpg" alt="website-logo" />
          <form className='navbar__search' action="/search" method='get'>
            <label htmlFor="searchTerm"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </label>
            <input type="text" id="searchTerm" name="searchTerm" placeholder="Search games, hardware, news, etc"/>
            <label for="searchTerm">All categories</label>
          </form>
        </div>
        <div className='top__right'>
          <TextWithIcon icon={faQuestion} text={"Support"}/>
          <TextWithIcon icon={faHeart} text={"Wish List"}/>
          <TextWithIcon icon={faShoppingCart} text={"Cart"}/>
          <TextWithIcon icon={faUser} text={"Log in / Sign up"}/>
        </div>
      
      </div>
      <div className='navbar__middle' ref={navbarRef}>
        <TextWithIcon icon={faGamepad} text={"My Game Store"} onClick={() => handleCategoryClick(1)} />
        <TextWithIcon icon={faHeadset} text={"Games"} onClick={() => handleCategoryClick(2)} />
        <TextWithIcon icon={faTrophy} text={"News & Events"} onClick={() => handleCategoryClick(3)} />
        <TextWithIcon icon={faPlay} text={"Play Game"} onClick={() => handleCategoryClick(4)} />
        {expandedCategory ===  1 && (
          <div className='navbar__category-dropdown'>
            <ul>
              <li>Xbox</li>
              <li>PC</li>
              <li>PlayStation</li>
            </ul>
          </div>
        )}
        {expandedCategory ===  2 && (
          <div className='navbar__category-dropdown'>
            <ul>
              <li>Action</li>
              <li>Adventure</li>
              <li>Strategy</li>
            </ul>
          </div>
        )}
        {expandedCategory ===  3 && (
          <div className='navbar__category-dropdown'>
            <ul>
              <li>Latest News</li>
              <li>Upcoming Events</li>
            </ul>
          </div>
        )}
        {expandedCategory ===  4 && (
          <div className='navbar__category-dropdown'>
            <ul>
              <li>Online</li>
              <li>Local</li>
            </ul>
          </div>
        )}
      </div>
      <div className='navbar__bottom'>
        <p className='bottom__text--left'><span className='bolder'> <FontAwesomeIcon className='truck-icon' icon={faTruck}/> Free shipping </span> in orders $50 or more. <span className='underlined'>Restrictions apply</span></p>
        <p className='bottom__text--right'><FontAwesomeIcon className='gem-icon' icon={faGem}/>  Earn <span className='bolder underlined'> My Game Points</span> on digital games</p>
      </div>
    </div>
  )
}

export default Navbar
