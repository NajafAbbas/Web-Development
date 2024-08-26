const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20; // Size of each box in the grid
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Initial snake and food data
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
    x: Math.floor(Math.random() * (canvasWidth / box)) * box,
    y: Math.floor(Math.random() * (canvasHeight / box)) * box
};

let d; // Direction
let score = 0; // Score

document.addEventListener('keydown', direction);

function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') d = 'LEFT';
    if (event.keyCode === 38 && d !== 'DOWN') d = 'UP';
    if (event.keyCode === 39 && d !== 'LEFT') d = 'RIGHT';
    if (event.keyCode === 40 && d !== 'UP') d = 'DOWN';
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move snake
    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    // Check if snake has eaten the food
    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * (canvasWidth / box)) * box,
            y: Math.floor(Math.random() * (canvasHeight / box)) * box
        };
        score++;
    } else {
        snake.pop();
    }

    // Create new head
    const newHead = {
        x: snakeX,
        y: snakeY
    };

    // Check for collisions with walls or itself
    if (snakeX < 0 || snakeX >= canvasWidth || snakeY < 0 || snakeY >= canvasHeight || collision(newHead, snake)) {
        clearInterval(game);
    }

    snake.unshift(newHead);

    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
}

const game = setInterval(draw, 100);