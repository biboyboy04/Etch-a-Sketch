function createGrid(pixels = 16){
    const container = document.querySelector('.square-container');
    let dimensions = 100/pixels;
    for(let k = 0; k<pixels**2; k++){
        const square = document.createElement('div');
        square.style.width = `${dimensions}%`;
        square.style.height = `${dimensions}%`;
        square.style.backgroundColor = "black";
        container.appendChild(square);
    }
    squareHover();
};

function squareHover(){
    const squares = document.querySelectorAll('.square-container div');
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "white";
        })
    );
};

const button = document.querySelector('button');
button.addEventListener('click', setGrid); 

function setGrid(){
    let val = prompt('Pixel Grid: ','');
    let valInt = parseInt(val);
    if(valInt !== null && Number.isInteger(valInt)) {
        removeGrid();
        return createGrid(valInt);
    }
    else return;
}

function removeGrid(){
    const container = document.querySelector('.square-container');
    const squares = document.querySelectorAll('.square-container div');
    squares.forEach(square => container.removeChild(square));
}

createGrid();