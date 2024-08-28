// Initial count
let count = 0;

// Select elements from the DOM
const valueElement = document.querySelector('.update'); // Element to display the current count
const increaseButton = document.querySelector('.increase'); // Button to increase the count
const decreaseButton = document.querySelector('.decrease'); // Button to decrease the count
const resetButton = document.querySelector('.reset'); // Button to reset the count to zero

// Function to update the displayed count
function updateDisplay() {
    valueElement.textContent = count; // Set the text content of the valueElement to the current count
}

// Event listener for the "Increase" button
increaseButton.addEventListener('click', function() {
    count++; // Increment the count by 1
    updateDisplay(); // Update the displayed count
});

// Event listener for the "Decrease" button
decreaseButton.addEventListener('click', function() {
    count--; // Decrement the count by 1
    updateDisplay(); // Update the displayed count
});

// Event listener for the "Reset" button
resetButton.addEventListener('click', function() {
    count = 0; // Reset the count to 0
    updateDisplay(); // Update the displayed count
});