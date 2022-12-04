import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {

  const inputReference = useRef(null);

  const [clicked, setClicked] = useState(false);
  const [showing, setShowing] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  let modalClassName;
  let menuModalClassName;
  let searchIconStyle;
  let searchInputClassName;
  let searchExitClassName;

  function handleClick(event) {
    if (event.target.matches('img.hamburger-icon') ||
        event.target.matches('button.hamburger-button')) {
      setShowing(true);
      setClicked(true);
    } else if (event.target.matches('a.hamburger-exit') ||
              (event.target.matches('.modal-custom') &&
              !event.target.matches('.menu.modal-custom')) ||
               event.target.matches('a.menu-link')) {
      setClicked(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.matches('button.search-button') ||
        event.target.matches('img.search-icon')) {
      setSearchClicked(true);
    } else if (event.target.matches('a.search-x')) {
      setSearchClicked(false);
    }
  }

  function waitSearchAnimation(event) {
    setShowSearch(true);
  }

  function handleAnimation(event) {
    if (event.target.matches('.modal-custom.brighten')) setShowing(false);
  }

  function handleSearchLosingFocus(event) {
    setSearchClicked(false);
    setShowSearch(false);
  }

  if (clicked) {
    modalClassName = 'modal-custom darken';
    menuModalClassName = 'menu modal-custom slide-right';
  } else {
    modalClassName = 'modal-custom brighten';
    menuModalClassName = 'menu modal-custom slide-left';
  }

  if (!showing) modalClassName = 'modal-custom hidden';

  if (searchClicked) {
    searchIconStyle = {transform: `translateX(-13.5rem)`};
    if (!showSearch) setTimeout(waitSearchAnimation, 400);
  } else {
    searchIconStyle = {transform: `translateX(0)`}
  }

  if (showSearch) {
    searchInputClassName = ''
    searchExitClassName = 'search-x'
  } else {
    searchInputClassName = 'hidden'
    searchExitClassName = 'search-x hidden'
  }

  useEffect(() => {
    if (showSearch) inputReference.current.focus();
  })

  return (
    <div>
      <div>
        <nav className="nav-bar flex row-ud-center row-space-between">
          <button className="hamburger-button" onClick={handleClick}>
            <img className="hamburger-icon" src="/images/hamburger.webp" alt="hamburger menu" />
          </button>
          <form onSubmit={handleSubmit} className="search-container flex row-ud-center">
            <input className={searchInputClassName} ref={inputReference} type="text" name="search" onBlur={handleSearchLosingFocus}/>
            <a className={searchExitClassName}>X</a>
            <button className='search-button'>
              <img className="search-icon" onClick={handleSubmit} src="/images/search.webp" alt="search icon" style={searchIconStyle}/>
            </button>
          </form>
        </nav>
      </div>
      <div onClick={handleClick} onAnimationEnd={handleAnimation} className={modalClassName}>
        <div className={menuModalClassName}>
          <div className="flex">
            <div className="img-container">
              <img src="/images/HCO.webp" alt="HCO logo" />
            </div>
            <div className="hamburger-exit-container">
              <a className="hamburger-exit">X</a>
            </div>
          </div>
          <a onClick={handleClick} className='menu-link' href="#">Home</a>
          <a onClick={handleClick} className='menu-link' href="#inventory">Inventory</a>
          <a onClick={handleClick} className='menu-link' href="#contact">Contact</a>
          <a onClick={handleClick} className='menu-link' href="#about">About</a>
          <a onClick={handleClick} className='menu-link' href="#faq">FAQ</a>
          <a onClick={handleClick} className='menu-link' href="#reviews">Reviews</a>
        </div>
      </div>
    </div>
  )
}
