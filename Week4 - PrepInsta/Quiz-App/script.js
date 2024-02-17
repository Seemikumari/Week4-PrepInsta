const quizContainer = document.querySelector(".quiz-container");
const timerValue = document.getElementById("timer");
const scoreValue = document.getElementById("score");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
let timer;

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: 0,
    },
    {
        question: "Who is the CEO of Tesla?",
        options: ["Elon Musk", "Bill Gates", "Jeff Bezos", "Tim Cook"],
        correctAnswer: 0,
    },
    // Add more questions as needed
];

function startQuiz() {
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.setAttribute("data-index", index);
        optionButton.addEventListener("click", selectOption);
        optionsContainer.appendChild(optionButton);
    });
}

function selectOption(event) {
    const selectedOptionIndex = parseInt(event.target.dataset.index);
    const currentQuizData = quizData[currentQuestion];

    if (selectedOptionIndex === currentQuizData.correctAnswer) {
        score++;
        scoreValue.textContent = score;
    }

    disableOptions();
}

function disableOptions() {
    const optionButtons = document.querySelectorAll(".options button");
    optionButtons.forEach((button) => {
        button.disabled = true;
    });
}

function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        timerValue.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            moveToNextQuestion();
        }
    }, 1000);
}

function submitAnswer() {
    clearInterval(timer);
    moveToNextQuestion();
}

function moveToNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        startQuiz();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Your final score is: ${score} out of ${quizData.length}</p>
    `;
    submitButton.disabled = true;
}

// Start the quiz when the page loads
startQuiz();
