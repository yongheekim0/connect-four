/*----- constants -----*/
const COLORS = {
  0: "white",
  1: "orange",
  "-1": "black",
};

/*----- state variables -----*/
const state = {
  board: null,
  turn: null,
  winner: null,
};

/*----- cached elements  -----*/
const elements = {
  message: document.querySelector("h1"),
  playAgain: document.querySelector("button"),
  markers: document.querySelectorAll("#markers > div"),
};

/*----- event listeners -----*/
document.getElementById("markers").addEventListener("click", handleDrop);

/*----- functions -----*/
init();

function init() {
  // To visualize the board, rotate the array 90 degrees anticlockwise
  state.board = [
    [0, 0, 0, 0, 0, 0], // column 0
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0], // column 6
  ];
  state.turn = 1;
  state.winner = null;
  render();
}

function handleDrop(event) {
  console.log("drop detected");
  // TODO: handle the error
  const columnIndex = [...elements.markers].indexOf(event.target);
  const column = state.board[columnIndex];
  const rowIndex = column.indexOf(0);
  column[rowIndex] = state.turn;
  state.turn *= -1; // 1, -1, 1, -1, 1, -1
  // check for a winner?
  render();
  //find the column number
  //find the column data
  //find the first empty slot (0) in that column
  //assign that slot to the current player
  //change to the next player
  //check for a winner?
  //render();
}

function render() {
  renderBoard();
  renderMessage();
  renderControls();
}

function renderBoard() {
  state.board.forEach(function (column, columnIndex) {
    column.forEach(function (piece, rowIndex) {
      const id = `c${columnIndex}r${rowIndex}`;
      const circle = document.getElementById(id);
      circle.style.backgroundColor = COLORS[piece];
    });
  });
}

function renderMessage() {
  console.log("rendering message");
}

function renderControls() {
  console.log("render controls");
}
