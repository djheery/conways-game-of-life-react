import React, {useContext} from "react";
import classes from "./Button.module.css"
import GridContext from "../../../store/GridContext";

const Button = (props) => {

  const gridCtx = useContext(GridContext)
  
  const handleClick = () => {
    if(props.id === 'start-btn') {
      handleStart();
    } else if(props.id === 'stop-btn') {
      handleStop();
    } else if(props.id === 'random-btn') {
      handleRandom();
    }
  }

  const handleStop = () => {

  }

  const handleRandom = () => {
    gridCtx.randomize();
  }

  const handleStart = () => {
    gridCtx.generateState();
  }
  const buttonClasses = `${classes.button}`;
  return (
    <button id={props.id} 
            className={buttonClasses} 
            onClick={handleClick}
            >
              {props.buttonName}
            </button>
  )
}

export default Button;