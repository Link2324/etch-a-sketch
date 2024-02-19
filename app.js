"use strict"

const canvas = document.querySelector('#canvas');

// Create (size x size) grid of div in canvas container
function createGrid(size = 16) {

    if (size < 1 || size > 100) {
        alert("Size should be in range of [1, 100]");
        return;
    }

    const gridElementSize = canvas.clientHeight / size;

    for (let i = 0; i < size; i++) {

        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.cssText = `border: 1px solid lightgrey; 
                                 width: ${gridElementSize}px; 
                                 height: ${gridElementSize}px; flex: 0 0 1;
                                 `;
            row.appendChild(div);
        }
        canvas.appendChild(row);
    }
}

createGrid(16);

canvas.addEventListener('mouseover', e => {
    const target = e.target;
    target.style['background-color'] = 'lightblue';
})

canvas.addEventListener('mouseout', e => {
    const target = e.target;
    target.style['background-color'] = 'white';
})
