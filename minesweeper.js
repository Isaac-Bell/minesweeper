
document.addEventListener('DOMContentLoaded', startGame)


// Define your `board` object here!
function isMine () {
  var isMine = Math.random() >= 0.75
  return isMine
} 

let hidden = true

function makeBoard16 () { 
  var colls= []  
 for (var i=0; i<4; i++) {
          for  (var j=0; j<4; j++) {
            colls.push({
              row: i,
              col: j,
              isMine: isMine(),
              hidden: hidden
              })
              }
        }       
    return colls
}

console.log(makeBoard16())

var board = {cells: makeBoard16()}
  // cells: [
  //   {row:0, col:0, isMine:true, hidden:true}, {row:0, col:1, isMine:false, hidden}, {row:0, col:2, isMine:false, hidden}, {row:0, col:3, isMine:false, hidden},
  //   {row:1, col:0, isMine:false, hidden}, {row:1, col:1, isMine:false, hidden}, {row:1, col:2, isMine:false, hidden}, {row:1, col:3, isMine:false, hidden},
  //   {row:2, col:0, isMine:false, hidden}, {row:2, col:1, isMine:false, hidden}, {row:2, col:2, isMine:false, hidden}, {row:2, col:3, isMine:false, hidden},
  //   {row:3, col:0, isMine: true, hidden}, {row:3, col:1, isMine:false, hidden}, {row:3, col:2, isMine:false, hidden}, {row:3, col:3, isMine:false, hidden}

  // ]




function startGame () {
  
  for (var i = 0 ; i < board.cells.length; i++) {
    var cell = board.cells[i]
    cell.surroundingMines = countSurroundingMines(cell)

  }

  lib.initBoard()
}

document.onclick = checkForWin
window.oncontextmenu = checkForWin



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
 
  var wonGame = true

  for (var i = 0 ; i < board.cells.length; i++) { 
    var cell = board.cells[i]
    if (cell.isMine && !cell.isMarked )
        wonGame = false 
  }

  if (wonGame)
   lib.displayMessage('You win!')

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) { 
  var count = 0 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var i = 0; i < surrounding.length; i++) {
    var cell = surrounding[i]

    if (cell.isMine) {
      count++ 
    }
  }
  return count 
}



// function generateArr () { 
// var arr = [];
// var len = oFullResponse.results.length;
// for (var i = 0; i < 32; i++) {
//     arr.push({
//         key: oFullResponse.results[i].label,
//         sortable: true,
//         resizeable: true
//     });
// }

// console.log(arr)

// }

// generateArr()