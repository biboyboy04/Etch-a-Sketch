const container = document.querySelector('.container');

for(let j = 0; j<16; j++){
    for(let k = 0; k<16; k++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

container.appendChild(testP);