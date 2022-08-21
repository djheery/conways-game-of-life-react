import React, { useContext } from "react";
import GridContext from "../../store/GridContext";
import GridRow from "./GridRow";
import classes from './Grid.module.css'

const getRowCount = (currentRowCount) =>{
  return currentRowCount++;
}

const Grid = (props) => {
  const gridContext = useContext(GridContext);
  const {cells} = gridContext;

  return (
    <table className={classes['grid-table']}>
      <tbody>
        {
         cells.map((row, idx) => {
          let rowKey = `row-${idx}`
          return (
            <GridRow 
              key={rowKey}
              id={rowKey}
              row={row}
              rowNum={idx}
            />
          )
         }) 
        }
      </tbody>
    </table>
  );
}

export default Grid;