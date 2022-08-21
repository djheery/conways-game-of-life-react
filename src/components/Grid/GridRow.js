import React from "react";
import {v4 as uuid} from 'uuid';
import GridCell from "./GridCell";

const GridRow = (props) => {
  const { row } = props;
  return (
    <tr key={props.id} id={props.id}>
      {row.map((cell, idx) => {
        const cellId = uuid();
        return <GridCell
          key={cellId}
          id={cellId}
          deadOrAlive={cell}
          x={idx}
          y={props.rowNum}
        />
      })}
    </tr>
  )
};

export default GridRow;