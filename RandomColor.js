document.getElementById('generate-color').addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Set the background color of the color-box
    document.getElementById('color-box').style.backgroundColor = randomColor;

    // Display the color code
    document.getElementById('color-code').textContent = 'Color Code: ' + randomColor;
});