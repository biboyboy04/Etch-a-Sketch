
function createGrid(pixels = 16){
    const container = document.querySelector('.square-container');
    // dimensions let the grid Divs fit in a container
    // 100 = full size of parent container
    let dimensions = 100/pixels;
    for(let k = 0; k<pixels**2; k++){
        const square = document.createElement('div');
        square.style.width = `${dimensions}%`;
        square.style.height = `${dimensions}%`;
        square.style.backgroundColor = "black";
        container.appendChild(square);
    }
    // After creating the grid Divs, apply hover effect
    squareHover();
    squareShade();
};

function squareHover(){
    const squares = document.querySelectorAll('.square-container div');
    squares.forEach(square => square.addEventListener('mouseenter', () => {
        let r = rngHex();
        let g = rngHex();
        let b = rngHex();
        console.log(r, g, b);
        square.style.backgroundColor = `rgb(${r},${g},${b})`;
        }));
};


const button = document.querySelector('button');
button.addEventListener('click', setGrid); 

function setGrid(){
    let val = prompt('Pixel Grid: ','');

    // the loose equality operator treats null and undefined as the same
    if (val == null) {
        return alert('Error: Null/Undefined value!');
    } 

    let valInt = parseInt(val); // returns NaN if the parsed value is not a Number
    if (!Number.isInteger(valInt)){
        return alert('Error: Not an Integer value!');
    }
    
    if (valInt > 100){
        return alert('Error: Grid Size is above the limit(100)!')
    }
    
    removeGrid(); // remove the old grid Divs
    createGrid(valInt); // create new grid Divs based on user input
}

function removeGrid(){
    const container = document.querySelector('.square-container');
    const squares = document.querySelectorAll('.square-container div');
    squares.forEach(square => container.removeChild(square));
}

function rngHex(){
    return Math.floor(Math.random() * 256);
}


createGrid();