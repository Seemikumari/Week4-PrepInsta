let currentQuestion = 0;
let score = 0;
let timer;
const totalQuestions = 10; // Total number of questions
const timePerQuestion = 10; // Time per question in seconds

const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["W", "H2", "O", "CO2"],
        answer: "O"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "Stephen King", "J.R.R. Tolkien"],
        answer: "Harper Lee"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the tallest mammal in the world?",
        options: ["Elephant", "Giraffe", "Horse", "Kangaroo"],
        answer: "Giraffe"
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "India", "Italy", "Egypt"],
        answer: "China"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Chili"],
        answer: "Avocado"
    }
    // Add more questions
];

function displayQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('questionText').textContent = questionObj.question;
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    questionObj.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(option);
        };
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestion];
    const options = document.querySelectorAll('.options button');
    options.forEach(option => {
        if (option.textContent === selectedOption) {
            option.style.backgroundColor = '#ff69b4'; // Change color to pink
        }
        option.disabled = true;
    });
    if (selectedOption === questionObj.answer) {
        score++;
    }
    document.getElementById('score').textContent = score;
}

function disableOptions() {
    const options = document.querySelectorAll('.options button');
    options.forEach(option => {
        option.disabled = true;
    });
}

function startTimer() {
    let timeLeft = timePerQuestion;
    updateTimerDisplay(timeLeft);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft < 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function handleTimeOut() {
    disableOptions();
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        displayQuestion();
        resetTimer();
    } else {
        endQuiz();
    }
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

function endQuiz() {
    clearInterval(timer);
    alert(`Quiz ended. Your score is ${score}/${totalQuestions}`);
}

// Start quiz
displayQuestion();
startTimer();

