const quizData = [
  {
    question: "What is actually electricity?",
    a: "A flow of water",
    b: "A flow of air",
    c: "A flow of electrons",
    d: "A flow of atoms",
    correct: "c",
  },
  {
    question: "Which of the following is not an international organisation?",
    a: "FIFA",
    b: "NATO",
    c: "ASEAN",
    d: "FBI",
    correct: "d",
  },
  {
    question: "What is the speed of sound?",
    a: "120 km/h",
    b: "1200 km/h",
    c: "400 km/h",
    d: "700 km/h",
    correct: "b",
  },
  {
    question: "Which of the following animals can run the fastest?",
    a: "Cheetah",
    b: "Leopard",
    c: "Tiger",
    d: "Lion",
    correct: "a",
  },
  {
    question: "What is the rarest type of blood in the human body?",
    a: "AB negative",
    b: "O positive",
    c: "B negative",
    d: "A positive",
    correct: "a",
  },
];

let currentQuestion = 0;
const question = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let answer = undefined;
let score = 0;
const answerEls = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
    }
  }
});
