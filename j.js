// let first = document.getElementById("first");
// let s = "hii, hello you ,hiiii2";
// let strings = s.split(',');
// let counter = 0;

// setInterval(() => {
//   first.textContent = strings[counter];
//   counter = (counter + 1) % strings.length;
// }, 2000);

const game = document.querySelector('#game');
const info = document.querySelector('#info');

const startCells = [
    "", "", "", "", "", "", "", "", "",
]
// console.log(info);

function createBoard()
{
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        game.append(cellElement);
    });
}
createBoard();