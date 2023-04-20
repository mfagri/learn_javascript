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
let go = "circle";
info.textContent = "Circle goes first";
function createBoard()
{
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click',addGo)
        game.append(cellElement);
    });
}
createBoard();

function addGo(e)
{
     const d = document.createElement('div')
     d.classList.add(go)
     e.target.append(d) ;
     go = go == "circle" ? "cross" : "circle"
     info.textContent = "it is now " + go + "'s go."
     e.target.removeEventListener("click",addGo)
     checkwin()
}
function checkwin()
{
    const alld = document.querySelectorAll(".square")
    // console.log(alld)
    const winc = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    winc.forEach(array =>{
        const c = array.every(cell => alld[cell].firstChild?.classList.contains('circle'))
        if(c)
        {
            info.textContent = "Circle win!"
            alld.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
        const dd = array.every(cell => alld[cell].firstChild?.classList.contains('cross'))
        if(dd)
        {
            info.textContent = "Cross win!"
            alld.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })
}