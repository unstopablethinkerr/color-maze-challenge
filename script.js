// quiz.js
document.getElementById('start-quiz').addEventListener('click', function () {
    fetch('/quiz-app/questions.csv') // Update the path if necessary
        .then(response => response.text())
        .then(csvData => {
            const questions = parseCSV(csvData);
            displayQuiz(questions);
        });
});

// Parse CSV data into an array of objects
function parseCSV(csv) {
    const rows = csv.split('\n').map(row => row.split(','));
    const headers = rows[0];
    return rows.slice(1).map(row => {
        let obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = row[index].trim();
        });
        return obj;
    });
}

// Display quiz questions
function displayQuiz(questions) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; // Clear previous content

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <label><input type="radio" name="q${index}" value="${q.option1}"> ${q.option1}</label><br>
            <label><input type="radio" name="q${index}" value="${q.option2}"> ${q.option2}</label><br>
            <label><input type="radio" name="q${index}" value="${q.option3}"> ${q.option3}</label><br>
            <label><input type="radio" name="q${index}" value="${q.option4}"> ${q.option4}</label><br>
        `;
        container.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.addEventListener('click', () => gradeQuiz(questions));
    container.appendChild(submitButton);
}

// Grade the quiz
function gradeQuiz(questions) {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    alert(`Your score: ${score}/${questions.length}`);
}
