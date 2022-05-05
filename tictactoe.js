let clicksCounter = -1;
let gameTable = ['', '', '', '', '', '', '', '', ''];

function xOr0(cellNumber) {
  if (document.getElementById(cellNumber).innerHTML == "" && resultMessage.innerHTML == "") {
    ++clicksCounter;
    if (clicksCounter % 2 === 0 || clicksCounter === 0) {
      document.getElementById(cellNumber).innerHTML = "X";
      gameTable[cellNumber] = 'X';
    } else {
      document.getElementById(cellNumber).innerHTML = "0";
      gameTable[cellNumber] = '0';
    }
  }
  winningMessage();
}

function checkingTheWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let winningPlayer = "";
  for (let i = 0; i <= 7; ++i) {
    const playersChoices = winningConditions[i];
    const condition1 = gameTable[playersChoices[0]];
    const condition2 = gameTable[playersChoices[1]];
    const condition3 = gameTable[playersChoices[2]];
    if (condition1 === condition2 && condition2 === condition3 && condition2 !== "") {
      winningPlayer = condition1;
      break;
    }
  }
  return winningPlayer;
}

function winningMessage() {
  if (checkingTheWinner() !== "") {
  	resultMessage.innerHTML = `Player "${checkingTheWinner()}" win! Congratulations!`;
  } else if (!(gameTable.includes(""))) {
  	resultMessage.innerHTML = "It is a draw!";
  }
}
