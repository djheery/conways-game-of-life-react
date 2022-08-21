import React, { useReducer } from "react";
import GridContext from "./GridContext";

const reducerKeys = {
  killCell: 'KILL_CELL',
  birthCell: 'BIRTH_CELL',
  frontierSearch: 'FRONTIER_SEARCH',
  calculateNewState: 'CALCULATE_STATE',
  randomize: 'RANDOMIZE'
}

const visitedNodes = [];


const createGrid = () => {
  const rowsCols = 20;
  const cells = [];
  for(let r = 0; r < rowsCols; r++) {
    cells.push([]);
    for(let c = 0; c < rowsCols; c++) {
      cells[r].push(Math.random() > 0.5 ? 1 : 0);
    }
  }

  return cells;
}


const defaultGridState = {
  cells: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0 ,0 ,0 ,0 ,0 ,0 , 1],
          [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1 ,1 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0, 1 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0 ,1 ,1 ,1 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0 ,0 ,0 ,1 ,0 ,0 , 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 , 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,1 ,1 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,10 ,0 ,0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
          [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 , 0],
         ],
  totalAmount: 0
}
const gridGraph = {}

const isValid = (state, x, y) => {
  const colBoundaries = state.cells[0].length - 1;
  const rowBoundaries = state.cells.length - 1;
  if(x < 0 || y < 0 || x > colBoundaries || y > rowBoundaries) {
    return false;
  }
  
  return true;
}

const addToXY = (state, x, y) => {
  return [x + 1, y + 1];
}

const outOfBoundsX = (state, x) => {
  const colBoundaries = state.cells[0].length;
  if(x > colBoundaries - 1)
    return true;
  else 
    return false;
}

const outOfBoundsY = (state, y) => {
  const rowBoundaries = state.cells.length;
  if(y > rowBoundaries - 1)
    return true;
  else 
    return false;
}

const calculateFrontiers = (state, x, y) => {
  let neighbours = 0;
  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1], 
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
  ]

  operations.forEach(([x1, y1]) => {
    const newI = y + x1;
    const newK = x + y1
    if(isValid(state, newK, newI)) {
      if(x === 1 && y === 1) {
        let value = state.cells[newK][newI];
      } 
      neighbours += parseFloat(state.cells[newI][newK]);
    }
  })

  if(x === 1 && y === 1){
  }
  return neighbours;
}

const gridReducer = (state, action) => {
  if(action.type === reducerKeys.frontierSearch) {

  }

  if(action.type === reducerKeys.calculateNewState) {
    let updatedState = [];

    for(let rows = 0; rows < state.cells.length; rows++) {
      updatedState.push([]);
      for(let cols = 0; cols < state.cells[0].length; cols++) {
        const cell = state.cells[rows][cols];
        const aliveNeighbours = calculateFrontiers(state, cols, rows);
        if(cell === 1){
          if(aliveNeighbours <= 1) {
            updatedState[rows][cols] = 0;
          } else if (aliveNeighbours > 3) {
            updatedState[rows][cols] = 0
          } else {
            updatedState[rows][cols] = 1
          } 
        } else {
          if(aliveNeighbours === 3) {
            updatedState[rows][cols] = 1
          } else {
        
            updatedState[rows][cols] = 0
          } 
        }
      }
    }

    return {
      cells: updatedState,
      totalAmount: 0
    }
  }

  if(action.type === reducerKeys.randomize) {
    let updatedBoard;
    updatedBoard = createGrid();
    console.log('called');
    console.log(updatedBoard)
    return {
      cells: updatedBoard,
      totalAmount: 0
    }
  }


  return defaultGridState;
}

const GridContextProvider = ((props) => {
  const [gridState, dispatchGridAction] = useReducer(gridReducer, defaultGridState);

  const killCell = (id) => {
    dispatchGridAction({type: reducerKeys.killCell, cell: id});
  }

  const birthCell = (id) => {
    dispatchGridAction({type: reducerKeys.birthCell, cell: id});
  }

  const frontierSearch = () => {
    dispatchGridAction({type: reducerKeys.frontierSearch})
  }

  const randomizeBoard = () => {
    dispatchGridAction({type: reducerKeys.randomize})
  }

  const calculateNewState = () => {
    const interval = setInterval(() => {
      dispatchGridAction({type: reducerKeys.calculateNewState});
    }, 100)

    
  }

  const calc = (perm) => {
    if(perm === 0) {
      return perm
    } else {

      return perm;
    }
  }

  const gridContext = {
    cells: gridState.cells,
    totalAlive: gridState.totalAlive,
    removeCell: killCell,
    addCell: birthCell,
    search: frontierSearch,
    generateState: calculateNewState,
    randomize: randomizeBoard
  }

  return (
    <GridContext.Provider value={gridContext}>
      {props.children}
    </GridContext.Provider>
  )
});

export default GridContextProvider;