import React from 'react';
import './navbar.scss';

const NavBar = () => {
  return(
    <div className='nav-bar'>
      <a href='home'>Home</a>
      <a href='about'>About</a>
      <a href='championships'>Championships</a>
      <a href='players'>Player</a>
      <a href='news'>News</a>
    </div>
  )
}

export default NavBar;