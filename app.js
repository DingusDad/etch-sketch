const grid = document.querySelector('.grid');
const button = document.querySelector('.reset-button')

button.addEventListener("click", resetGrid);

//set initial grid


function setGridSize(size) {
    for (let i = 0; i < (size * size); i++) {
    const box = document.createElement(`div`);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.appendChild(box);
    box.classList.add(`box`);
    }
}

function resetGrid() {
    let newSize = prompt("What Size Grid Do You Want? (1-64)")
    if (newSize === null || newSize > 64 || newSize < 1 || isNaN(newSize)) {
        alert("Pick a number between 1-64 please");
    } else {
        reset();
        setGridSize(newSize);
        const boxes = grid.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black';
        }))
    }
}

function reset() {
    const boxes = grid.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    })
}

window.onload = () => {
    setGridSize(16);
    const boxes = grid.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'black';
    }))
}
