import readline from 'readline';
import chalk from 'chalk';

// Game Variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;

// Setup the terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Disable automatic printing of keypresses
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Function to generate random position for food
const generateFood = () => {
  food = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
};

// Function to render the game board
const renderGame = () => {
  console.clear();
  for (let y = 0; y < gridSize; y++) {
    let row = '';
    for (let x = 0; x < gridSize; x++) {
      const isSnake = snake.some(segment => segment.x === x && segment.y === y);
      const isFood = food.x === x && food.y === y;

      row += isSnake ? chalk.green('O') : isFood ? chalk.red('X') : '·';
    }
    console.log(row);
  }
  console.log(`Score: ${score}`);
};

// Function to update snake position
const updateSnake = () => {
  const newHead = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y,
  };

  // Check if snake hits the wall
  if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize) {
    console.log(chalk.red('Game Over! You hit the wall.'));
    process.exit();
  }

  // Check if snake eats food
  if (newHead.x === food.x && newHead.y === food.y) {
    score++;
    snake = [newHead, ...snake]; // Add new head (snake grows)
    generateFood();
  } else {
    snake = [newHead, ...snake.slice(0, -1)]; // Move snake without growing
  }

  // Check if snake collides with itself
  const selfCollision = snake.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y);
  if (selfCollision) {
    console.log(chalk.red('Game Over! You bit yourself.'));
    process.exit();
  }
};

// Function to handle keypresses
process.stdin.on('keypress', (str, key) => {
  if (key.name === 'q') {
    console.log(chalk.yellow('Game exited.'));
    process.exit();
  }

  // Update direction based on arrow keys, ensuring no reverse movement
  if (key.name === 'up' && direction.y === 0) direction = { x: 0, y: -1 };
  if (key.name === 'down' && direction.y === 0) direction = { x: 0, y: 1 };
  if (key.name === 'left' && direction.x === 0) direction = { x: -1, y: 0 };
  if (key.name === 'right' && direction.x === 0) direction = { x: 1, y: 0 };
});

// Game loop
const gameLoop = () => {
  updateSnake();
  renderGame();
  setTimeout(gameLoop, 200); // Speed of the snake
};

// Start the game
generateFood();
gameLoop();
