// make a board
let board;
let turn;  

function init() {  //initialize a new session for the game
  turn = "X"; //initial marker "X" for player1
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  //indexing and marking all boxes in array(board)
  // function render() {
  //   board.forEach(function(mark, index) {
  //     console.log(mark, index);
  //   });
  // }
}

function handlePlay(event) { 
  let indexClick = squares.indexOf(event.target);
  board[indexClick] = turn;
  //update DOM after click
  squares[indexClick].textContent = turn;
  console.log(board);
  (turn === "X") ? turn = "O" : turn = "X";
}

function resetBoard() {
  init();
  squares.forEach(square => {square.textContent = "";});
}
init();

const squares = Array.from(document.querySelectorAll(".board div"));
document.querySelector(".board").addEventListener('click', handlePlay);
document.querySelector("button[type=reset]").addEventListener("click", resetBoard);