"use strict"

const canvas = document.querySelector('#canvas');

// Create (size x size) grid of div in canvas container
function createGrid(size = 16) {

    if (size < 1 || size > 100 || size === NaN) {
        alert("Size should be in range of [1, 100]");
        return;
    }

    const gridElementSize = canvas.clientHeight / size;

    for (let i = 0; i < size; i++) {

        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.cssText = `width: ${gridElementSize}px; 
                                 height: ${gridElementSize}px; flex: 0 0 1;`;

            div.setAttribute('id', 'grid-element');
            row.appendChild(div);
        }
        canvas.appendChild(row);
    }
}

let isMousedown = false;
canvas.addEventListener('mousedown', e => {
    e.preventDefault();
    isMousedown = true;
    e.target.style.backgroundColor = 'black'; // Start drawing as soon as the mouse is pressed
});

canvas.addEventListener('mouseover', e => {
    if (isMousedown) {
        e.target.style.backgroundColor = 'black'; // Only draw when the mouse button is down
    }
});

canvas.addEventListener('mouseup', e => {
    isMousedown = false;
});

const tools = document.querySelector('#tools');

let active = document.querySelector('#black');
active.setAttribute('class', 'active');

tools.addEventListener('click', e => {
    const target = e.target;
    active.classList.remove('active');

    switch (target.id) {
        case 'black':
            active = document.querySelector('#black');
            target.classList.add('active');
            break;

        case 'rainbow':
            active = document.querySelector('#rainbow');
            target.classList.add('active');
            break;

        case 'erase':
            active = document.querySelector('#erase');
            target.classList.add('active');
            break;
    }
});

createGrid(16);

const size = document.querySelector('#size');

size.onclick = function () {
    canvas.textContent = '';
    createGrid(Number(prompt("Enter number in range [1, 100]")));
}
