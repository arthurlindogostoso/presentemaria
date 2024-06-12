const quizData = [
    {
        question: "Qual meu nick no DC quando me sinto amado?",
        a: "/lovely glubyw",
        b: "/amado glubyw",
        c: "?loved glubyw",
        d: "?amado glubyw",
        correct: "c"
    },
    {
        question: "Qual é meu filme favorito?",
        a: "Velozes e Furiosos 5",
        b: "Maze Runner : A Cura Mortal",
        c: "Blue Lock : Movie",
        d: "Pegadinha, não tenho filme favorito",
        correct: "d"
    },
    {
        question: "Como nós conhecemos?",
        a: "House anime",
        b: "RP Server",
        c: "Web Hype Server",
        d: "Server Ilegal",
        correct: "a"
    },
    {
        question: "Qual a minha caracteristica fisica da qual me orgulho?",
        a: "Altura",
        b: "Cintura",
        c: "Beleza no Geral",
        d: "Pegadinha, amo as 3 igualmente",
        correct: "b"
    },
    {
        question: "Qual é a minha comida favorita?",
        a: "Pizza",
        b: "Sushi",
        c: "Churrasco",
        d: "Macarrão da vovó",
        correct: "d"
    },
    {
        question: "O que eu mais amo fazer com a Maria?",
        a: "Conversar",
        b: "Call",
        c: "Jogar",
        d: "Pegadinha novamente, amo as 3 igualmente",
        correct: "b"
    },
    {
        question: "Qual animal de estimação quero ter com você?",
        a: "Cachorro",
        b: "Gato",
        c: "Pássaro",
        d: "Peixe",
        correct: "a"
    },
    {
        question: "Qual meu manga favorito?",
        a: "Lookism",
        b: "How to Fight",
        c: "Solo Leveling",
        d: "Pegadinha, todos citados são manwhas",
        correct: "d"
    },
    {
        question: "Qual faculdade eu pretendo fazer?",
        a: "Engenharia de Software",
        b: "Segurança de Software",
        c: "Gastronomia",
        d: "Nenhuma faculdade",
        correct: "a"
    },
    {
        question: "Eu te amo?",
        a: "Sim.",
        b: "Infinitamente.",
        c: "Indescritivelmente",
        d: "Incondicionalmente",
        correct: "c"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h2>${currentQuizData.question}</h2>
            <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
            <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
            <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
            <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
        </div>
    `;
}

function checkAnswer() {
    const answerElements = document.getElementsByName('answer');
    let selectedAnswer;
    for (const answerElement of answerElements) {
        if (answerElement.checked) {
            selectedAnswer = answerElement.value;
        }
    }

    if (selectedAnswer) {
        const correctAnswer = quizData[currentQuestion].correct;
        for (const answerElement of answerElements) {
            if (answerElement.value === correctAnswer) {
                answerElement.parentElement.classList.add('correct');
            }
            if (answerElement.value === selectedAnswer && selectedAnswer !== correctAnswer) {
                answerElement.parentElement.classList.add('incorrect');
            }
        }

        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        nextButton.style.display = 'block';
    } else {
        alert('Por favor, selecione uma resposta!');
    }
}

function nextQuestion() {
    currentQuestion++;
    nextButton.style.display = 'none';

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `Você acertou ${correctAnswers} de ${quizData.length} perguntas!`;
    correctAnswersElement.innerText = `Número de acertos: ${correctAnswers}`;
    wrongAnswersElement.innerText = `Número de erros: ${incorrectAnswers}`;
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    quizContainer.style.display = 'block';
    nextButton.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    quizContainer.addEventListener('change', checkAnswer);
});
