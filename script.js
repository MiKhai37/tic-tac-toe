class GameBoard {
    constructor() {
        this.array = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
    }
    markField(index, marker) {
        if (index > this.array.length) return;
        this.array[index] = marker;
    }

    getField(index) {
        if (index > this.array.length) return;
        return this.array[index]
    }
    reset() {
        this.array = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
    }
}

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}

class DisplayController {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }
    createGrid() {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        for (let i = 0; i < this.gameBoard.array.length; i ++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.dataset.id = i;
            gridDiv.appendChild(gridItem);
        };
        return gridDiv;
    }
    populateGrid() {
        const gridItems = document.querySelectorAll('.grid-item')
        for (let i = 0; i < gridItems.length; i++){
            console.log(this.gameBoard.array[i]);
            gridItems[i].textContent = this.gameBoard.array[i];
        };
    }
}



player1 = new Player('roger', 'O');
player2 = new Player('robert', 'X');
gameBoard = new GameBoard();
displayController = new DisplayController(gameBoard);

document.body.appendChild(displayController.createGrid());
displayController.populateGrid()