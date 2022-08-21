# Game of Life in React 

This is a project to make the Game of life in React. 
It is created to further my understanding of React, and also to better my programming ability.

I will likely need to use the context API to acheive this task as the state of all cells will be affected by the generation of a new game grid on every evolution. 

## To Do List 

1. Create the Components
  - This includes all of the Components in the UI
  - The game grid 
  - The cells in the game grid
  - The data structure that defines which cells start as alive, and which as dead 
2. Implement the logic 
  - Frontier searching for alive cells 
  - Removing Dead Cells 
  - Producing new Alive cells 
  - Optimizing the Process so that it is not slow 

## Rules of the Game of life 

I have included a link to where I am taking the rules for the game of life from: 

https://robertheaton.com/2018/07/20/project-2-game-of-life/

Introduction (Copied from the above site): 

The game of life is not really a game. There's no winning or losing or destroying your opponent mentally and spiritually. 
Life is a "cellular  atuomation". A system of cells that live on a grid, where they live, die and evolve according to the rules that goven their world. 

Life's simple, elegant rules give rise to astonishingly complex emergent behavior. It is played on a 2-D grid. Each square in the gird contains a cell, and each cell starts the game as either "alive" or "dead". 

Play then proceeds in rounds. 
During each round, each cell looks at its 8 immediate neighbbors and counts up the number of them that are currently alive. 

The cell then updates its own liveness according to 4 rules: 

1. Any live cell with 0 or 1 live neighbors becomes dead. 
2. Any live cell with 2 or 3 live neighbors becomes alive (just right)
3. Any live cell with more than 3 lives negbbors becomes dead. (over population)
4. any dead cell with exactly 3 live neighbors becomes alive. (By reproduction)

A neighbor can be any cell horizontally, vertically or diagonally. 
A matrix traversal algorithm should be used to achieve this. 


