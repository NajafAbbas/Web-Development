// const colors = ['green', 'red', 'blue', 'orange', 'rgba(133,122,200'];
// const btn = document.querySelector('.btn.btn-outline-secondary');
const color = document.querySelector('.color')

// btn.addEventListener('click', function() {
//     const randomColor = Math.floor(Math.random() * colors.length);
//     // const randomColor = 3;
//     color.textContent = colors[randomColor]
//     document.body.style.backgroundColor = colors[randomColor];
// });
// function getRandomHexColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Get the button element
// const btn = document.querySelector('.btn btn-outline-secondary');

// // Add event listener to change background color on button click
// btn.addEventListener('click', function() {
//     document.body.style.backgroundColor = getRandomHexColor();
// });
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the button and color display elements
const btn = document.querySelector('.btn.btn-outline-secondary');
const colorDisplay = document.querySelector('.color');

// Add event listener to change background color and display color code on button click
btn.addEventListener('click', function() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = `Current Color: ${newColor}`;
});