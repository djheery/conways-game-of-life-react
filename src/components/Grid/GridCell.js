import React, { useContext } from "react";
import classes from "./GridCell.module.css";

const GridCell = (props) => {


  const deadOrAliveClass = props.deadOrAlive === 1 ? `${classes.alive}` : `${classes.dead}`
  const cellClasses = `${deadOrAliveClass} ${classes.cell}`
  return (
    <td 
        key={props.id}
        id={props.id} 
        value={props.value} 
        className={cellClasses}>    
    </td>
  )
}

export default GridCell;