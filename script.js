let currentQuestionIndex = 0;
const questions = [
    {
        question: "Ms. Ortega’s development team contributed ——– to the successful launch of the newest mobile application.",
        answers: [
            "(A) automatically",
            "(B) substantially",
            "(C) sharply",
            "(D) accordingly"
        ],
        correctAnswer: "(B) substantially"
    },
    // 他の問題をここに追加...
];

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = questions[currentQuestionIndex].question;
    answersElement.innerHTML = '';
    questions[currentQuestionIndex].answers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.innerText = answer;
        answersElement.appendChild(answerDiv);
    });
}

function setupNextButton() {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('問題の終わりです');
        }
    });
}

displayQuestion();
setupNextButton();
