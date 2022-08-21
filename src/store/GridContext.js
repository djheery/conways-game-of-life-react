import React from "react";

const GridContext = React.createContext({
  cells: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
   ],
  totalAlive: 0,
  removeCell: (id) => {},
  addCell: (id) => {}
});

export default GridContext;