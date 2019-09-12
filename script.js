let board;
let turn;  
let winner = "";
let tieChecker;

function init() {  //initialize a new session for the game
  turn = "X"; //initial marker "X" for player1
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
}

function handlePlay(event) { 
  let indexClick = squares.indexOf(event.target);
  if (board[indexClick] === "") {
    function switchTurn() {
      (turn === "X") ? turn = "O" : turn = "X";
    }
    board[indexClick] = turn;
    squares[indexClick].textContent = turn;
    winner = checkWinner();
    (winner !== undefined) ? 
    (winner.turn === "T") ? resultPanel.textContent = "Its a Tie!" : 
    resultPanel.textContent = `${winner.turn} wins!` : switchTurn();
  }
}

function checkWinner() {
  let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let combo of winningCombos) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]]
      && board[combo[0]] === board[combo[2]]) {
        return {turn};
      }
    }
  tieChecker = board.every(box => {return box !== ""});
  if (tieChecker) {
    turn = "T";
    return {turn};
  }
}

function resetBoard() {
  init();
  squares.forEach(square => {square.textContent = "";});
  resultPanel.textContent = "result will be shown here";
}

init();

const squares = Array.from(document.querySelectorAll(".board div"));
const resultPanel = document.querySelector(".result");
document.querySelector(".board").addEventListener('click', handlePlay);
document.querySelector("button[type=reset]").addEventListener("click", resetBoard);