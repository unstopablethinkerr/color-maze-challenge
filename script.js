// script.js
document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const resetButton = document.getElementById('reset-button');
    const hintButton = document.getElementById('hint-button');
    const backgroundMusic = document.getElementById('background-music');
    const collectSound = document.getElementById('collect-sound');

    let timer = 0;
    let score = 0;
    let timerInterval;

    const colors = {
        red: 'jump-two',
        blue: 'reverse',
        green: 'rotate',
        yellow: 'collectible'
    };

    function createMaze() {
        const colorsArray = Object.keys(colors);
        for (let i = 0; i < 100; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
            tile.dataset.color = randomColor;
            tile.style.backgroundColor = randomColor;
            maze.appendChild(tile);
        }
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timer++;
            timerElement.textContent = `Time: ${timer}s`;
        }, 1000);
    }

    function updateScore(points) {
        score += points;
        scoreElement.textContent = `Score: ${score}`;
    }

    function resetGame() {
        clearInterval(timerInterval);
        timer = 0;
        score = 0;
        timerElement.textContent = `Time: 0s`;
        scoreElement.textContent = `Score: 0`;
        maze.innerHTML = '';
        createMaze();
        startTimer();
    }

    function showHint() {
        alert('Hint: Look for patterns in the colors!');
    }

    function playCollectSound() {
        collectSound.play();
    }

    resetButton.addEventListener('click', resetGame);
    hintButton.addEventListener('click', showHint);

    backgroundMusic.play();

    createMaze();
    startTimer();
});
