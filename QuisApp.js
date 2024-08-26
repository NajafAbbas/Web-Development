const questions = [{
        question: "What is the largest planet in our solar system?",
        answers: ["Jupiter", "Saturn", "Earth", "Mars"],
        correct: 0
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"],
        correct: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Pb", "Fe"],
        correct: 0
    },
    {
        question: "Which element has the atomic number 1?",
        answers: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
        correct: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Diamond", "Gold", "Iron", "Platinum"],
        correct: 0
    },
    {
        question: "Which ocean is the largest by surface area?",
        answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correct: 0
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Tokyo", "Kyoto", "Seoul", "Beijing"],
        correct: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correct: 0
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1912", "1905", "1923", "1898"],
        correct: 0
    },
    {
        question: "What is the smallest unit of life that can replicate independently?",
        answers: ["Cell", "Tissue", "Organ", "Molecule"],
        correct: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    answerForm.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerForm.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.classList.add('answer-option');
        div.innerHTML = `
        <input type="radio" name="answer" id="option${index}" value="${index}">
        <label for="option${index}">${answer}</label>
      `;
        answerForm.appendChild(div);
    });

    answerForm.appendChild(nextButton);
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    } else {
        alert('Please select an answer.');
    }
}

function showResult() {
    answerForm.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultText.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}`;
}

function restartGame() {
    startGame();
}

nextButton.addEventListener('click', selectAnswer);
restartButton.addEventListener('click', restartGame);

// Initialize game
startGame();