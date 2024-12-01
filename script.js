let questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], correct: 1 },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"], correct: 1 },
    { question: "What is the boiling point of water?", options: ["50°C", "100°C", "200°C", "0°C"], correct: 1 },
    { question: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], correct: 1 },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Silver", "Iron"], correct: 1 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: 1 },
    { question: "Which gas do plants use in photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
    { question: "Which country is known for its maple syrup?", options: ["USA", "Canada", "UK", "Australia"], correct: 1 },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], correct: 1 },
    { question: "Who discovered gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
    { question: "What is the square root of 16?", options: ["2", "4", "8", "6"], correct: 1 },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "Germany", "Italy", "Spain"], correct: 0 },
    { question: "What is the main ingredient in guacamole?", options: ["Tomatoes", "Avocados", "Onions", "Limes"], correct: 1 },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 0 },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correct: 2 },
    { question: "What is the freezing point of water?", options: ["-10°C", "0°C", "32°C", "100°C"], correct: 1 },
    { question: "Which planet is closest to the sun?", options: ["Earth", "Mars", "Mercury", "Venus"], correct: 2 },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "What is the national sport of Canada?", options: ["Hockey", "Lacrosse", "Baseball", "Soccer"], correct: 0 },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], correct: 1 },
    { question: "Which language has the most native speakers?", options: ["English", "Spanish", "Mandarin", "Hindi"], correct: 2 },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"], correct: 0 },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Kilimanjaro", "Everest", "Denali"], correct: 2 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Graphite"], correct: 2 },
    { question: "Which famous ship sank in 1912?", options: ["Titanic", "Olympic", "Britannic", "Queen Mary"], correct: 0 },
    { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], correct: 1 },
    { question: "Who is known as the Father of Computers?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Bill Gates"], correct: 1 },
    { question: "What is the first element on the periodic table?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correct: 2 },
    { question: "How many bones are in the human body?", options: ["206", "210", "208", "212"], correct: 0 },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Atom", "Dioxin Neutral Acid", "None"], correct: 0 },
    { question: "What is the primary color of the sun?", options: ["Yellow", "White", "Orange", "Red"], correct: 1 },
    { question: "How many players are on a soccer team on the field?", options: ["10", "11", "12", "13"], correct: 1 },
    { question: "Which planet is known for its rings?", options: ["Mars", "Venus", "Saturn", "Jupiter"], correct: 2 },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"], correct: 1 },
    { question: "What is the capital of Brazil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], correct: 2 },
    { question: "What is the main language spoken in Spain?", options: ["English", "Spanish", "Portuguese", "French"], correct: 1 },
    { question: "Which war was fought between the North and South regions in the United States?", options: ["World War I", "World War II", "Civil War", "Revolutionary War"], correct: 2 },
    { question: "Who was the first man to step on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correct: 1 },
    { question: "What is the symbol for gold on the periodic table?", options: ["Au", "Ag", "Gd", "Ga"], correct: 0 },
    { question: "How many days are in a leap year?", options: ["365", "366", "367", "368"], correct: 1 },
    { question: "Which continent is known as the birthplace of humanity?", options: ["Asia", "Africa", "Europe", "South America"], correct: 1 }
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
    let shareText = `I scored ${score} out of ${questions.length} in the Quiz Game! Try it yourself: `;
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
