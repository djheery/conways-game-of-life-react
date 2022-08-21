import React from 'react';
import Container from './Container';
import classes from './Header.module.css';

const Header = (props) => {
  const topHeadingClasses = `${classes['text-center']} ${classes['text-capital']}`
  
  return (
      <header>
        <h1 className={topHeadingClasses}>The Game of Life (React)</h1>
        <p className={classes['text-center']}>This is a coding project for the Game of Life Created in React</p>
      </header>
  )
}

export default Header;