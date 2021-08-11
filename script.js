// Use module pattern to create the unique gameboard
const gameBoard = (() => {
    gbArr = [['', '', ''],['', '', ''],['', '', '']];
})();

const displayController = (() => {
    controller = "";
})();

// Use factory function to define the players
const player = (name, score=0) => {
    return {name, score};
};

gameBoard.gbArr = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']]

function render() {
    gridItems = document.querySelectorAll('.grid-item')
    
}