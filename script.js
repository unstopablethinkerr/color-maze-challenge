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
    let playerPosition = { x: 0, y: 0 };
    let endPosition = { x: 9, y: 9 };

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
            tile.dataset.index = i;
            maze.appendChild(tile);
        }
        maze.children[0].classList.add('player');
        maze.children[99].classList.add('end');
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
        playerPosition = { x: 0, y: 0 };
    }

    function showHint() {
        alert('Hint: Look for patterns in the colors!');
    }

    function playCollectSound() {
        collectSound.play();
    }

    function movePlayer(direction) {
        const currentTile = maze.children[playerPosition.y * 10 + playerPosition.x];
        currentTile.classList.remove('player');

        switch (direction) {
            case 'up':
                if (playerPosition.y > 0) playerPosition.y--;
                break;
            case 'down':
                if (playerPosition.y < 9) playerPosition.y++;
                break;
            case 'left':
                if (playerPosition.x > 0) playerPosition.x--;
                break;
            case 'right':
                if (playerPosition.x < 9) playerPosition.x++;
                break;
        }

        const newTile = maze.children[playerPosition.y * 10 + playerPosition.x];
        newTile.classList.add('player');

        if (newTile.dataset.color === 'yellow') {
            playCollectSound();
            updateScore(10);
        }

        if (playerPosition.x === endPosition.x && playerPosition.y === endPosition.y) {
            alert('You win!');
            resetGame();
        }
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                movePlayer('up');
                break;
            case 'ArrowDown':
                movePlayer('down');
                break;
            case 'ArrowLeft':
                movePlayer('left');
                break;
            case 'ArrowRight':
                movePlayer('right');
                break;
        }
    });

    maze.addEventListener('click', (event) => {
        if (event.target.classList.contains('tile')) {
            const tileIndex = event.target.dataset.index;
            const x = tileIndex % 10;
            const y = Math.floor(tileIndex / 10);
            if (x === playerPosition.x && y === playerPosition.y - 1) movePlayer('up');
            if (x === playerPosition.x && y === playerPosition.y + 1) movePlayer('down');
            if (x === playerPosition.x - 1 && y === playerPosition.y) movePlayer('left');
            if (x === playerPosition.x + 1 && y === playerPosition.y) movePlayer('right');
        }
    });

    resetButton.addEventListener('click', resetGame);
    hintButton.addEventListener('click', showHint);

    backgroundMusic.play();

    createMaze();
    startTimer();
});
