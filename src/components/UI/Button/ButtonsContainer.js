import React from 'react';
import classes from './ButtonsContainer.module.css'
import Button from './Button';

const ButtonContainer = (props) => {
  const containerClasses = `${classes['button-container']}`

  return (
    <div className={containerClasses}>{props.children}</div>
  )
}

export default ButtonContainer;