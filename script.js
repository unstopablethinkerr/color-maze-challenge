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
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 },
     { "question": "Who invented the light bulb?", "options": ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "James Watt"], "correct": 2 },
    { "question": "What is the capital of France?", "options": ["Madrid", "Berlin", "Paris", "Rome"], "correct": 2 },
    { "question": "Who discovered penicillin?", "options": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"], "correct": 1 },
    { "question": "Who was the first president of the United States?", "options": ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], "correct": 1 },
    { "question": "What is the largest planet in the Solar System?", "options": ["Earth", "Saturn", "Jupiter", "Mars"], "correct": 2 },
    { "question": "Who painted the Mona Lisa?", "options": ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Raphael"], "correct": 0 },
    { "question": "Who is the author of *Harry Potter*?", "options": ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"], "correct": 1 },
    { "question": "What is the boiling point of water?", "options": ["100°C", "50°C", "212°F", "120°C"], "correct": 0 },
    { "question": "Who developed the theory of relativity?", "options": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"], "correct": 1 },
    { "question": "What is the smallest country in the world?", "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], "correct": 1 },
    { "question": "Who wrote *Romeo and Juliet*?", "options": ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], "correct": 2 },
    { "question": "Who discovered gravity?", "options": ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Johannes Kepler"], "correct": 2 },
    { "question": "Who was known as the Iron Lady?", "options": ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"], "correct": 1 },
    { "question": "What is the chemical symbol for gold?", "options": ["Au", "Ag", "Fe", "Pt"], "correct": 0 },
    { "question": "Who is the founder of Microsoft?", "options": ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], "correct": 1 },
    { "question": "What is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "correct": 1 },
    { "question": "Who invented the telephone?", "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], "correct": 0 },
    { "question": "Who is the author of *The Origin of Species*?", "options": ["Charles Darwin", "Gregor Mendel", "Carl Linnaeus", "Jean-Baptiste Lamarck"], "correct": 0 },
    { "question": "What is the hardest natural substance?", "options": ["Gold", "Diamond", "Platinum", "Quartz"], "correct": 1 },
    { "question": "Who discovered radioactivity?", "options": ["Marie Curie", "Henri Becquerel", "Pierre Curie", "Ernest Rutherford"], "correct": 1 },
    { "question": "What is the capital of Japan?", "options": ["Beijing", "Tokyo", "Seoul", "Bangkok"], "correct": 1 },
    { "question": "Who is known as the Father of Computers?", "options": ["Alan Turing", "Charles Babbage", "John von Neumann", "Blaise Pascal"], "correct": 1 },
    { "question": "What is the tallest mountain in the world?", "options": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], "correct": 1 },
    { "question": "Who developed the polio vaccine?", "options": ["Louis Pasteur", "Jonas Salk", "Edward Jenner", "Alexander Fleming"], "correct": 1 },
    { "question": "What is the chemical symbol for water?", "options": ["H2O", "HO2", "O2H", "HHO"], "correct": 0 },
    { "question": "Who painted the Sistine Chapel ceiling?", "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], "correct": 0 },
    { "question": "Who invented the World Wide Web?", "options": ["Tim Berners-Lee", "Vint Cerf", "Alan Turing", "Steve Jobs"], "correct": 0 },
    { "question": "Who wrote *Pride and Prejudice*?", "options": ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "George Eliot"], "correct": 1 },
    { "question": "What is the speed of light?", "options": ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], "correct": 0 },
    { "question": "Who discovered the structure of DNA?", "options": ["James Watson & Francis Crick", "Gregor Mendel", "Rosalind Franklin", "Linus Pauling"], "correct": 0 },
    { "question": "Who was the first man on the moon?", "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"], "correct": 1 },
    { "question": "What is the capital of Australia?", "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"], "correct": 2 },
    { "question": "Who wrote *The Great Gatsby*?", "options": ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck"], "correct": 1 },
    { "question": "Who is the founder of SpaceX?", "options": ["Jeff Bezos", "Richard Branson", "Elon Musk", "Larry Page"], "correct": 2 },
    { "question": "What is the square root of 64?", "options": ["6", "8", "10", "12"], "correct": 1 },
    { "question": "Who invented the printing press?", "options": ["Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison", "Galileo Galilei"], "correct": 0 },
    { "question": "What is the capital of Italy?", "options": ["Venice", "Florence", "Milan", "Rome"], "correct": 3 },
    { "question": "Who discovered electricity?", "options": ["Michael Faraday", "Benjamin Franklin", "Nikola Tesla", "Thomas Edison"], "correct": 1 },
    { "question": "What is the largest desert in the world?", "options": ["Gobi", "Sahara", "Antarctic", "Arctic"], "correct": 2 },
    { "question": "Who painted *Starry Night*?", "options": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Paul Cézanne"], "correct": 2 },
    { "question": "Who is the author of *1984*?", "options": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"], "correct": 1 },
    { "question": "What is the chemical symbol for oxygen?", "options": ["O", "Ox", "O2", "Om"], "correct": 0 },
    { "question": "Who was the first woman to win a Nobel Prize?", "options": ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Ada Lovelace"], "correct": 0 },
    { "question": "What is the main gas in Earth's atmosphere?", "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], "correct": 2 },
    { "question": "Who invented the airplane?", "options": ["Henry Ford", "The Wright Brothers", "Leonardo da Vinci", "Alexander Graham Bell"], "correct": 1 },
    { "question": "Who was the first emperor of Rome?", "options": ["Julius Caesar", "Augustus", "Nero", "Tiberius"], "correct": 1 },
    { "question": "Who is known as the Father of Genetics?", "options": ["Charles Darwin", "Gregor Mendel", "Francis Crick", "James Watson"], "correct": 1 },
    { "question": "Who developed the first vaccine?", "options": ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Jonas Salk"], "correct": 0 },
    { "question": "What is the freezing point of water?", "options": ["0°C", "32°C", "100°C", "10°C"], "correct": 0 },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2 },
    { question: "What is the capital of Germany?", options: ["Munich", "Hamburg", "Berlin", "Frankfurt"], correct: 2 },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Bangalore", "Chennai"], correct: 1 },
    { question: "What is the capital of Japan?", options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], correct: 2 },
    { question: "What is the capital of Russia?", options: ["Saint Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg"], correct: 1 },
    { question: "What is the capital of South Africa?", options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"], correct: 2 },
    { question: "What is the capital of Spain?", options: ["Barcelona", "Valencia", "Madrid", "Seville"], correct: 2 },
    { question: "What is the capital of the United States?", options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"], correct: 2 },

    // Famous Inventions
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], correct: 1 },
    { question: "Who invented the light bulb?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], correct: 0 },
    { question: "Who invented the airplane?", options: ["Wright Brothers", "Leonardo da Vinci", "Charles Lindbergh", "Amelia Earhart"], correct: 0 },
    { question: "Who invented the printing press?", options: ["Johannes Gutenberg", "Benjamin Franklin", "William Caxton", "Johann Fust"], correct: 0 },
    { question: "Who invented the steam engine?", options: ["James Watt", "Thomas Newcomen", "George Stephenson", "Richard Trevithick"], correct: 0 },
    { question: "Who invented the radio?", options: ["Guglielmo Marconi", "Nikola Tesla", "Alexander Graham Bell", "Thomas Edison"], correct: 0 },
    { question: "Who invented the television?", options: ["John Logie Baird", "Philo Farnsworth", "Vladimir Zworykin", "Charles Jenkins"], correct: 0 },
    { question: "Who invented the computer?", options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Herman Hollerith"], correct: 0 },
    { question: "Who invented the internet?", options: ["Vint Cerf", "Tim Berners-Lee", "Robert Kahn", "Leonard Kleinrock"], correct: 1 },
    { question: "Who invented the electric car?", options: ["Nikola Tesla", "Thomas Edison", "Henry Ford", "Ferdinand Porsche"], correct: 3 },

    // Scientific Discoveries
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"], correct: 0 },
    { question: "Who discovered the structure of DNA?", options: ["James Watson and Francis Crick", "Rosalind Franklin", "Maurice Wilkins", "Linus Pauling"], correct: 0 },
    { question: "Who discovered the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], correct: 0 },
    { question: "Who discovered the laws of motion?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "René Descartes"], correct: 0 },
    { question: "Who discovered the periodic table?", options: ["Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton", "Jöns Jacob Berzelius"], correct: 0 },
    { question: "Who discovered the electron?", options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "Robert Millikan"], correct: 0 },
    { question: "Who discovered the double helix structure of DNA?", options: ["James Watson and Francis Crick", "Rosalind Franklin", "Maurice Wilkins", "Linus Pauling"], correct: 0 },
    { question: "Who discovered the law of universal gravitation?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "René Descartes"], correct: 0 },
    { question: "Who discovered the theory of evolution by natural selection?", options: ["Charles Darwin", "Alfred Russel Wallace", "Gregor Mendel", "Jean-Baptiste Lamarck"], correct: 0 },
    { question: "Who discovered the theory of plate tectonics?", options: ["Alfred Wegener", "Harry Hess", "Robert S. Dietz", "J. Tuzo Wilson"], correct: 0 },

    // Famous Personalities
    { question: "Who was the first person to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], correct: 0 },
    { question: "Who wrote the play 'Hamlet'?", options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"], correct: 0 },
    { question: "Who was the leader of the Indian independence movement?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"], correct: 0 },
    { question: "Who was the first female pharaoh of Ancient Egypt?", options: ["Hatshepsut", "Cleopatra", "Nefertiti", "Ankhesenamun"], correct: 0 },
    { question: "Who was the founder of Microsoft?", options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"], correct: 0 },
    { question: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"], correct: 0 },
    { question: "Who was the author of 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"], correct: 0 },
    { question: "Who was the leader of the Russian Revolution?", options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikolai Bukharin"], correct: 0 },
    { question: "Who was the founder of Apple Inc.?", options: ["Steve Jobs", "Steve Wozniak", "Ronald Wayne", "Tim Cook"], correct: 0 },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Barbara McClintock"], correct: 0 },

    // Literature and Authors
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], correct: 0 },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"], correct: 0 },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], correct: 0 },
    { question: "Who wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "John Steinbeck", "William Golding", "Joseph Heller"], correct: 0 },
    { question: "Who wrote 'The Hobbit'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"], correct: 0 },
    { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"], correct: 0 },
    { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Ovid", "Hesiod"], correct: 0 },
    { question: "Who wrote 'The Divine Comedy'?", options: ["Dante Alighieri", "Geoffrey Chaucer", "Giovanni Boccaccio", "Petrarch"], correct: 0 },
    { question: "Who wrote 'The Canterbury Tales'?", options: ["Geoffrey Chaucer", "William Langland", "John Gower", "Thomas Malory"], correct: 0 },
    { question: "Who wrote 'The Iliad'?", options: ["Homer", "Virgil", "Ovid", "Hesiod"], correct: 0 },

    // Historical Events
    { question: "When did the French Revolution begin?", options: ["1789", "1799", "1804", "1815"], correct: 0 },
    { question: "When was the Magna Carta signed?", options: ["1215", "1258", "1300", "1350"], correct: 0 },
    { question: "When did the American Civil War end?", options: ["1865", "1870", "1875", "1880"], correct: 0 },
    { question: "When was the Declaration of Independence adopted?", options: ["1776", "1783", "1789", "1800"], correct: 0 },
    { question: "When did the Battle of Hastings take place?", options: ["1066", "1100", "1150", "1200"], correct: 0 },
    { question: "When was the Treaty of Versailles signed?", options: ["1919", "1925", "1930", "1935"], correct: 0 },
    { question: "When did the Berlin Wall fall?", options: ["1989", "1990", "1995", "2000"], correct: 0 },
    { question: "When was the United Nations established?", options: ["1945", "1950", "1955", "1960"], correct: 0 },
    { question: "When did the Cuban Missile Crisis occur?", options: ["1962", "1965", "1970", "1975"], correct: 0 },
    { question: "When was the Constitution of the United States ratified?", options: ["1788", "1790", "1795", "1800"], correct: 0 },

    // Geography (Rivers, Mountains, Deserts)
    { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], correct: 0 },
    { question: "What is the highest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], correct: 0 },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Antarctic Desert", "Arctic Desert", "Gobi Desert"], correct: 1 },
    { question: "What is the longest river in South America?", options: ["Amazon", "Paraná", "Orinoco", "Río de la Plata"], correct: 0 },
    { question: "What is the highest mountain in Africa?", options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Mount Meru"], correct: 0 },
    { question: "What is the largest lake in the world by volume?", options: ["Lake Baikal", "Lake Superior", "Lake Tanganyika", "Great Bear Lake"], correct: 0 },
    { question: "What is the longest river in Asia?", options: ["Yangtze", "Yellow River", "Mekong", "Indus"], correct: 0 },
    { question: "What is the highest mountain in Europe?", options: ["Mount Elbrus", "Mont Blanc", "Mount Shkhara", "Dykh-Tau"], correct: 0 },
    { question: "What is the largest desert in Africa?", options: ["Sahara", "Kalahari", "Namib", "Danakil"], correct: 0 },
    { question: "What is the longest river in Australia?", options: ["Murray River", "Darling River", "Murrumbidgee River", "Lachlan River"], correct: 0 },

    // Chemistry (Elements, Symbols)
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 },
    { question: "What is the atomic number of oxygen?", options: ["8", "6", "7", "9"], correct: 0 },
    { question: "What is the chemical symbol for sodium?", options: ["Na", "K", "Li", "Rb"], correct: 0 },
    { question: "What is the chemical symbol for carbon?", options: ["C", "N", "O", "P"], correct: 0 },
    { question: "What is the chemical symbol for hydrogen?", options: ["H", "He", "Li", "Be"], correct: 0 },
    { question: "What is the chemical symbol for nitrogen?", options: ["N", "O", "F", "Ne"], correct: 0 },
    { question: "What is the chemical symbol for helium?", options: ["He", "H", "Li", "Be"], correct: 0 },
    { question: "What is the chemical symbol for iron?", options: ["Fe", "Cu", "Ag", "Au"], correct: 0 },
    { question: "What is the chemical symbol for silver?", options: ["Ag", "Au", "Pt", "Pd"], correct: 0 },

    // Physics (Theories, Scientists)
    { question: "Who proposed the theory of general relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], correct: 0 },
    { question: "Who is known for the three laws of motion?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "René Descartes"], correct: 0 },
    { question: "Who discovered the photoelectric effect?", options: ["Albert Einstein", "Max Planck", "Niels Bohr", "Ernest Rutherford"], correct: 0 },
    { question: "Who proposed the theory of quantum mechanics?", options: ["Max Planck", "Niels Bohr", "Erwin Schrödinger", "Werner Heisenberg"], correct: 0 },
    { question: "Who is known for the theory of electromagnetism?", options: ["James Clerk Maxwell", "Michael Faraday", "André-Marie Ampère", "Heinrich Hertz"], correct: 0 },
    { question: "Who proposed the uncertainty principle?", options: ["Werner Heisenberg", "Erwin Schrödinger", "Niels Bohr", "Max Born"], correct: 0 },
    { question: "Who is known for the theory of special relativity?", options: ["Albert Einstein", "Hendrik Lorentz", "Henri Poincaré", "Hermann Minkowski"], correct: 0 },
    { question: "Who discovered the law of universal gravitation?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "René Descartes"], correct: 0 },
    { question: "Who proposed the wave-particle duality of light?", options: ["Louis de Broglie", "Albert Einstein", "Niels Bohr", "Erwin Schrödinger"], correct: 0 },
    { question: "Who is known for the theory of the atom?", options: ["Democritus", "John Dalton", "Ernest Rutherford", "Niels Bohr"], correct: 2 },

    // Biology (Discoveries, Scientists)
    { question: "Who discovered the structure of DNA?", options: ["James Watson and Francis Crick", "Rosalind Franklin", "Maurice Wilkins", "Linus Pauling"], correct: 0 },
    { question: "Who proposed the theory of evolution by natural selection?", options: ["Charles Darwin", "Alfred Russel Wallace", "Gregor Mendel", "Jean-Baptiste Lamarck"], correct: 0 },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"], correct: 0 },
    { question: "Who is known for the discovery of the cell?", options: ["Robert Hooke", "Antonie van Leeuwenhoek", "Matthias Schleiden", "Theodor Schwann"], correct: 0 },
    { question: "Who proposed the germ theory of disease?", options: ["Louis Pasteur", "Robert Koch", "Ignaz Semmelweis", "Edward Jenner"], correct: 0 },
    { question: "Who discovered the role of DNA in heredity?", options: ["Oswald Avery", "Frederick Griffith", "Colin MacLeod", "Maclyn McCarty"], correct: 0 },
    { question: "Who is known for the discovery of the Golgi apparatus?", options: ["Camillo Golgi", "Santiago Ramón y Cajal", "Rudolf Virchow", "Theodor Schwann"], correct: 0 },
    { question: "Who proposed the theory of endosymbiosis?", options: ["Lynn Margulis", "Carl Woese", "Robert Whittaker", "Ernst Haeckel"], correct: 0 },
    { question: "Who discovered the CRISPR-Cas9 system?", options: ["Emmanuelle Charpentier and Jennifer Doudna", "Feng Zhang", "George Church", "Craig Venter"], correct: 0 },
    { question: "Who is known for the discovery of the mitochondrion?", options: ["Albert von Kölliker", "Richard Altmann", "Carl Benda", "Leonor Michaelis"], correct: 0 },

    // Space Exploration
    { question: "Who was the first person to orbit the Earth?", options: ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Neil Armstrong"], correct: 0 },
    { question: "Who was the first person to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], correct: 0 },
    { question: "What was the first artificial satellite launched into space?", options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"], correct: 0 },
    { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 0 },
    { question: "What is the closest planet to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0 },
    { question: "What is the largest moon in our solar system?", options: ["Ganymede", "Titan", "Callisto", "Io"], correct: 0 },
    { question: "What is the first spacecraft to leave the solar system?", options: ["Voyager 1", "Pioneer 10", "Pioneer 11", "Voyager 2"], correct: 0 },
    { question: "What is the first spacecraft to orbit another planet?", options: ["Mariner 9", "Viking 1", "Magellan", "Galileo"], correct: 0 },
    { question: "What is the first spacecraft to land on Mars?", options: ["Viking 1", "Mars 3", "Pathfinder", "Opportunity"], correct: 0 },
    { question: "What is the first spacecraft to orbit the Moon?", options: ["Luna 10", "Luna 1", "Luna 2", "Luna 3"], correct: 0 },

    // Math (Formulas, Numbers)
    { question: "What is the value of π (pi) to two decimal places?", options: ["3.14", "3.15", "3.16", "3.17"], correct: 0 },
    { question: "What is the square root of 81?", options: ["9", "8", "7", "6"], correct: 0 },
    { question: "What is the formula for the area of a circle?", options: ["πr²", "2πr", "πd", "r²"], correct: 0 },
    { question: "What is the formula for the area of a rectangle?", options: ["length × width", "length + width", "length - width", "length ÷ width"], correct: 0 },
    { question: "What is the formula for the area of a triangle?", options: ["(base × height) / 2", "base × height", "base + height", "base - height"], correct: 0 },
    { question: "What is the value of e (Euler's number) to two decimal places?", options: ["2.71", "2.72", "2.73", "2.74"], correct: 0 },
    { question: "What is the sum of the angles in a triangle?", options: ["180 degrees", "90 degrees", "360 degrees", "270 degrees"], correct: 0 },
    { question: "What is the formula for the volume of a sphere?", options: ["(4/3)πr³", "4πr²", "πr³", "(2/3)πr³"], correct: 0 },
    { question: "What is the formula for the volume of a cylinder?", options: ["πr²h", "2πrh", "πr³", "2πr²"], correct: 0 },
    { question: "What is the next number in the Fibonacci sequence after 8 and 13?", options: ["21", "22", "23", "24"], correct: 0 },

    // Art and Artists
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], correct: 0 },
    { question: "Who painted The Starry Night?", options: ["Vincent van Gogh", "Claude Monet", "Edvard Munch", "Paul Cézanne"], correct: 0 },
    { question: "Who painted The Scream?", options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Paul Gauguin"], correct: 0 },
    { question: "Who painted The Birth of Venus?", options: ["Sandro Botticelli", "Leonardo da Vinci", "Michelangelo", "Raphael"], correct: 0 },
    { question: "Who painted The Persistence of Memory?", options: ["Salvador Dalí", "Pablo Picasso", "René Magritte", "Joan Miró"], correct: 0 },
    { question: "Who painted The Girl with a Pearl Earring?", options: ["Johannes Vermeer", "Rembrandt", "Frans Hals", "Pieter de Hooch"], correct: 0 },
    { question: "Who painted The Creation of Adam?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Sandro Botticelli"], correct: 0 },
    { question: "Who painted The Night Watch?", options: ["Rembrandt", "Johannes Vermeer", "Frans Hals", "Pieter de Hooch"], correct: 0 },
    { question: "Who painted The Last Supper?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Sandro Botticelli"], correct: 0 },
    { question: "Who painted The Guernica?", options: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco Goya"], correct: 0 },

    // Technology (Innovators, Companies)
    { question: "Who is the founder of Apple Inc.?", options: ["Steve Jobs", "Steve Wozniak", "Ronald Wayne", "Tim Cook"], correct: 0 },
    { question: "Who is the founder of Microsoft?", options: ["Bill Gates", "Paul Allen", "Steve Ballmer", "Satya Nadella"], correct: 0 },
    { question: "Who is the founder of Amazon?", options: ["Jeff Bezos", "Andy Jassy", "Jeff Wilke", "Brian Olsavsky"], correct: 0 },
    { question: "Who is the founder of Facebook?", options: ["Mark Zuckerberg", "Eduardo Saverin", "Dustin Moskovitz", "Chris Hughes"], correct: 0 },
    { question: "Who is the founder of Google?", options: ["Larry Page", "Sergey Brin", "Eric Schmidt", "Sundar Pichai"], correct: 0 },
    { question: "Who is the founder of Tesla?", options: ["Elon Musk", "Martin Eberhard", "Marc Tarpenning", "JB Straubel"], correct: 0 },
    { question: "Who is the founder of SpaceX?", options: ["Elon Musk", "Gwynne Shotwell", "Tom Mueller", "Hans Koenigsmann"], correct: 0 },
    { question: "Who is the founder of Netflix?", options: ["Reed Hastings", "Marc Randolph", "Ted Sarandos", "Greg Peters"], correct: 0 },
    { question: "Who is the founder of Twitter?", options: ["Jack Dorsey", "Evan Williams", "Biz Stone", "Noah Glass"], correct: 0 },
    { question: "Who is the founder of Uber?", options: ["Travis Kalanick", "Garrett Camp", "Ryan Graves", "Dara Khosrowshahi"], correct: 0 },

    // World Records
    { question: "Who holds the world record for the fastest marathon?", options: ["Eliud Kipchoge", "Haile Gebrselassie", "Paula Radcliffe", "Wilson Kipsang"], correct: 0 },
    { question: "Who holds the world record for the highest jump by a human?", options: ["Alan Eustace", "Felix Baumgartner", "Joseph Kittinger", "Yves Rossy"], correct: 0 },
    { question: "What is the world record for the longest time spent in space?", options: ["Gennady Padalka", "Sergei Avdeyev", "Valeri Polyakov", "Peggy Whitson"], correct: 0 },
    { question: "Who holds the world record for the fastest 100-meter dash?", options: ["Usain Bolt", "Tyson Gay", "Asafa Powell", "Justin Gatlin"], correct: 0 },
    { question: "Who holds the world record for the longest distance swum without flippers?", options: ["Ben Lecomte", "Martin Strel", "Diana Nyad", "Lynne Cox"], correct: 0 },
    { question: "Who holds the world record for the most goals scored in a single football match?", options: ["Archie Thompson", "Stephan Stanisic", "Lionel Messi", "Cristiano Ronaldo"], correct: 0 },
    { question: "Who holds the world record for the fastest time to solve a Rubik's Cube?", options: ["Feliks Zemdegs", "Max Park", "Yusheng Du", "Patrick Ponce"], correct: 0 },
    { question: "Who holds the world record for the longest time spent underwater without breathing apparatus?", options: ["Stig Severinsen", "Stephen Keenan", "Tom Sietas", "Budimir Šobat"], correct: 0 }

];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let username;

function startQuiz() {
    const username = document.getElementById('username').value.trim(); // Get and trim the username input
    if (!username) { // Check if username is empty
        alert('Please enter your name to start the quiz!'); // Show an alert if no name is entered
        return; // Stop the function
    }
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

function tryAgain() {
    location.reload();
}
