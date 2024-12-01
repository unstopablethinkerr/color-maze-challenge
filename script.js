let questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let username;

function startQuiz() {
    username = document.getElementById('username').value;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    let question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    let optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        let button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 20;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    let question = questions[currentQuestionIndex];
    let buttons = document.querySelectorAll('#options button');
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('result-message').innerText = `Congratulations, ${username}! You scored ${score} out of ${questions.length}.`;
}

function shareResults() {
    let shareText = `I scored ${score} out of ${questions.length} in the Quiz Game! Try it yourself: [Game URL]`;
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Game Results',
            text: shareText,
            url: window.location.href
        }).catch(err => console.error(err));
    } else {
        alert('Share not supported on this browser. Copy the link and share manually: ' + shareText);
    }
}
