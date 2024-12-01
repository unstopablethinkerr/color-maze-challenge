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
    { question: "Which continent is known as the birthplace of humanity?", options: ["Asia", "Africa", "Europe", "South America"], correct: 1 },
     { question: "Which is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Pluto"], correct: 0 },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Mary Shelley"], correct: 1 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2 },
    { question: "Which ocean is the deepest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "Io"], correct: 1 },
    { question: "Which famous scientist developed the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"], correct: 0 },
    { question: "What is the national flower of Japan?", options: ["Lotus", "Cherry Blossom", "Rose", "Tulip"], correct: 1 },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["Brazil", "China", "UK", "Japan"], correct: 0 },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Antarctic Desert", "Gobi", "Kalahari"], correct: 1 },
    { question: "What is the main ingredient in hummus?", options: ["Lentils", "Chickpeas", "Beans", "Peas"], correct: 1 },
    { question: "Which organ is responsible for pumping blood?", options: ["Liver", "Lungs", "Heart", "Kidneys"], correct: 2 },
    { question: "What is the capital of Italy?", options: ["Venice", "Florence", "Rome", "Milan"], correct: 2 },
    { question: "What is the freezing point of water in Fahrenheit?", options: ["0°F", "32°F", "100°F", "212°F"], correct: 1 },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
    { question: "Which planet is known as the Evening Star?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: 1 },
    { question: "Who invented the light bulb?", options: ["Thomas Edison", "Alexander Bell", "Nikola Tesla", "Benjamin Franklin"], correct: 0 },
    { question: "Which country is famous for its pyramids?", options: ["Mexico", "Egypt", "Peru", "India"], correct: 1 },
    { question: "What is the most widely spoken language in the world?", options: ["English", "Spanish", "Mandarin", "Hindi"], correct: 2 },
    { question: "Which metal is liquid at room temperature?", options: ["Gold", "Mercury", "Silver", "Copper"], correct: 1 },
    { question: "What is the hardest mineral?", options: ["Quartz", "Topaz", "Diamond", "Ruby"], correct: 2 },
    { question: "Who directed the movie 'Titanic'?", options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"], correct: 1 },
    { question: "Which country has the most volcanoes?", options: ["USA", "Japan", "Indonesia", "Philippines"], correct: 2 },
    { question: "What is the largest island in the world?", options: ["Greenland", "Australia", "Madagascar", "Borneo"], correct: 0 },
    { question: "Which gas is essential for breathing?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Ada Lovelace", "Rosalind Franklin", "Dorothy Hodgkin"], correct: 0 },
    { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Radius", "Patella"], correct: 0 },
    { question: "What is the largest animal in the world?", options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"], correct: 2 },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Hamburg", "Frankfurt"], correct: 0 },
    { question: "Which is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
    { question: "What is the chemical formula for table salt?", options: ["H2O", "NaCl", "CO2", "C6H12O6"], correct: 1 },
    { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"], correct: 0 },
    { question: "Which country is known for the Great Wall?", options: ["China", "India", "Japan", "South Korea"], correct: 0 },
    { question: "What is the main ingredient in chocolate?", options: ["Vanilla", "Cocoa", "Caramel", "Milk"], correct: 1 },
    { question: "Which is the longest river in Africa?", options: ["Congo", "Nile", "Zambezi", "Orange"], correct: 1 },
    { question: "Who was the first female Prime Minister of the UK?", options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"], correct: 0 },
    { question: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Tiger"], correct: 1 },
    { question: "What is the main gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: 1 },
    { question: "Who is the author of 'Harry Potter'?", options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Suzanne Collins"], correct: 0 },
    { question: "Which organ is responsible for detoxifying the body?", options: ["Heart", "Kidney", "Liver", "Lungs"], correct: 2 },
    { question: "What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Peso"], correct: 0 },
    { question: "Who was the first President of the United States?", options: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"], correct: 2 },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], correct: 0 },
    { question: "Which country is known for its fjords?", options: ["Sweden", "Norway", "Denmark", "Finland"], correct: 1 },
    { question: "What is the smallest country in the world?", options: ["Malta", "Monaco", "Vatican City", "San Marino"], correct: 2 },
    { question: "Which fruit is known as the 'king of fruits'?", options: ["Apple", "Durian", "Mango", "Banana"], correct: 2 },
    { question: "Who painted 'The Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"], correct: 1 },
    { question: "Which element is needed for strong bones?", options: ["Iron", "Calcium", "Potassium", "Magnesium"], correct: 1 },
    { question: "Who discovered America?", options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"], correct: 0 },
     { question: "Which company developed the AI model ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Amazon"], correct: 2 },
    { question: "Who won the FIFA World Cup 2022?", options: ["Argentina", "France", "Brazil", "Germany"], correct: 0 },
    { question: "Which city will host the 2024 Olympics?", options: ["Tokyo", "Paris", "Los Angeles", "Rome"], correct: 1 },
    { question: "What is the tallest building in the world?", options: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Eiffel Tower"], correct: 1 },
    { question: "Who is the current CEO of Tesla?", options: ["Elon Musk", "Tim Cook", "Sundar Pichai", "Jeff Bezos"], correct: 0 },
    { question: "What is the primary programming language used in web development?", options: ["Python", "JavaScript", "C++", "Java"], correct: 1 },
    { question: "What is the name of the latest iPhone model launched in 2024?", options: ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"], correct: 2 },
    { question: "Who is the author of the book 'Becoming'?", options: ["Hillary Clinton", "Michelle Obama", "Oprah Winfrey", "Kamala Harris"], correct: 1 },
    { question: "Which streaming platform aired the hit series 'Wednesday'?", options: ["Amazon Prime", "Netflix", "HBO Max", "Disney+"], correct: 1 },
    { question: "Which is the most-followed account on Instagram in 2024?", options: ["Lionel Messi", "Cristiano Ronaldo", "Selena Gomez", "Kim Kardashian"], correct: 1 },
    { question: "Which space agency launched the James Webb Space Telescope?", options: ["NASA", "ESA", "Roscosmos", "ISRO"], correct: 0 },
    { question: "What is the name of India's lunar rover launched in Chandrayaan-3?", options: ["Vikram", "Pragyan", "RoverX", "Gaganyaan"], correct: 1 },
    { question: "Who won the Nobel Prize in Literature 2023?", options: ["Abdulrazak Gurnah", "Annie Ernaux", "Louise Glück", "Jon Fosse"], correct: 3 },
    { question: "Which company introduced the Vision Pro mixed-reality headset?", options: ["Apple", "Meta", "Microsoft", "Samsung"], correct: 0 },
    { question: "What is the main ingredient in sushi?", options: ["Rice", "Noodles", "Bread", "Fish"], correct: 0 },
    { question: "What is the currency of South Korea?", options: ["Yuan", "Yen", "Won", "Rupee"], correct: 2 },
    { question: "Which artist released the album 'Midnights'?", options: ["Taylor Swift", "Adele", "Beyoncé", "Billie Eilish"], correct: 0 },
    { question: "Which country has the highest population in 2024?", options: ["India", "China", "USA", "Indonesia"], correct: 0 },
    { question: "What is the first element on the periodic table?", options: ["Oxygen", "Hydrogen", "Helium", "Carbon"], correct: 1 },
    { question: "Which company owns the social media platform Threads?", options: ["Twitter", "Meta", "Snapchat", "Reddit"], correct: 1 },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
    { question: "Who directed the movie 'Oppenheimer'?", options: ["Christopher Nolan", "Quentin Tarantino", "James Cameron", "Martin Scorsese"], correct: 0 },
    { question: "Which mammal is known to have the most powerful bite?", options: ["Lion", "Crocodile", "Hippopotamus", "Shark"], correct: 2 },
    { question: "Which element is represented by the symbol 'Au'?", options: ["Silver", "Iron", "Gold", "Copper"], correct: 2 },
    { question: "What is the most streamed song on Spotify as of 2024?", options: ["Blinding Lights", "Shape of You", "Despacito", "Flowers"], correct: 0 },
    { question: "Which country is famous for the tulip festival?", options: ["Germany", "Netherlands", "France", "Denmark"], correct: 1 },
    { question: "What is the name of the first AI robot citizen?", options: ["Sophia", "Alexa", "Eva", "Tesla Bot"], correct: 0 },
    { question: "Which is the largest rainforest in the world?", options: ["Amazon", "Congo", "Sundarbans", "Daintree"], correct: 0 },
    { question: "What is the hardest natural substance?", options: ["Gold", "Diamond", "Iron", "Graphene"], correct: 1 },
    { question: "Which continent has the most countries?", options: ["Africa", "Asia", "Europe", "South America"], correct: 0 },
    { question: "What year was the first iPhone released?", options: ["2005", "2007", "2009", "2010"], correct: 1 },
    { question: "What is the fastest animal in the air?", options: ["Peregrine Falcon", "Eagle", "Bat", "Sparrow"], correct: 0 },
    { question: "Which gaming console released the PS5?", options: ["Xbox", "Nintendo", "Sony", "Atari"], correct: 2 },
    { question: "Who is the founder of Amazon?", options: ["Elon Musk", "Jeff Bezos", "Larry Page", "Bill Gates"], correct: 1 },
    { question: "Which programming language is known as the backbone of Android development?", options: ["Kotlin", "Swift", "Ruby", "Java"], correct: 0 },
    { question: "Which video game franchise includes 'Breath of the Wild'?", options: ["Elder Scrolls", "Final Fantasy", "Zelda", "Pokemon"], correct: 2 },
    { question: "What is the national animal of Scotland?", options: ["Lion", "Eagle", "Unicorn", "Horse"], correct: 2 },
    { question: "Who is the current Secretary-General of the United Nations?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Dag Hammarskjöld"], correct: 0 },
    { question: "What is the capital of Qatar?", options: ["Abu Dhabi", "Dubai", "Doha", "Riyadh"], correct: 2 },
    { question: "What is the largest type of shark?", options: ["Great White", "Hammerhead", "Whale Shark", "Tiger Shark"], correct: 2 },
    { question: "What is the nickname of the US state of California?", options: ["The Sunshine State", "The Empire State", "The Golden State", "The Lone Star State"], correct: 2 },
    { question: "Which car company makes the Mustang?", options: ["Chevrolet", "Ford", "Tesla", "BMW"], correct: 1 },
    { question: "What is the name of NASA's Mars rover that landed in 2021?", options: ["Spirit", "Curiosity", "Perseverance", "Opportunity"], correct: 2 },
    { question: "Which artist painted the Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 0 },
    { question: "Which team won the NBA Championship in 2023?", options: ["Golden State Warriors", "Los Angeles Lakers", "Denver Nuggets", "Boston Celtics"], correct: 2 },
    { question: "What is the most consumed drink in the world after water?", options: ["Tea", "Coffee", "Milk", "Juice"], correct: 0 },
    { question: "Who was the first person to step on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], correct: 2 },
    { question: "Which city is known as the Big Apple?", options: ["Chicago", "Los Angeles", "New York City", "San Francisco"], correct: 2 },
    { question: "Which is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Pluto"], correct: 0 },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Mary Shelley"], correct: 1 },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"], correct: 1 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], correct: 0 },
    { question: "What is the boiling point of water in Celsius?", options: ["0°C", "50°C", "100°C", "150°C"], correct: 2 },
    { question: "Who composed the 'Four Seasons'?", options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Johann Sebastian Bach"], correct: 2 },
    { question: "What is the square root of 64?", options: ["4", "8", "16", "32"], correct: 1 },
    { question: "Which is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1 },
    { question: "What is the closest planet to the Sun?", options: ["Earth", "Mercury", "Venus", "Mars"], correct: 1 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], correct: 1 },
    { question: "What is the smallest unit of life?", options: ["Cell", "Atom", "Molecule", "Organelle"], correct: 0 },
    { question: "What is the formula for the area of a circle?", options: ["πr²", "2πr", "πd", "r²"], correct: 0 },
    { question: "If today is Tuesday, what day will it be in 49 days?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 0 },
    { question: "What is the next number in the sequence: 2, 4, 8, 16, ...?", options: ["20", "24", "32", "64"], correct: 2 },
    { question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
    { question: "What is the primary function of the heart?", options: ["Digestion", "Respiration", "Circulation", "Excretion"], correct: 2 },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let username;

function startQuiz() {
    username = document.getElementById('username').value;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    selectRandomQuestions();
    loadQuestion();
}

function selectRandomQuestions() {
    let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffledQuestions.slice(0, 15);
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }

    let question = selectedQuestions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of 15`;
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
    let question = selectedQuestions[currentQuestionIndex];
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
    document.getElementById('result-message').innerText = `Congratulations, ${username}! You scored ${score} out of 15.`;
}

function shareResults() {
    let shareText = `I scored ${score} out of 15 in the Quiz Game! Try it yourself: `;
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
