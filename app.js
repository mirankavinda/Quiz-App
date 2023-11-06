const questions = [
    {
        topic: 'Computer Science',
        question: 'What does CPU stand for?',
        possibleAnswers: ['Central Processing Unit', 'Computer Program Unit', 'Central Power Unit'],
        correctAnswer: 'Central Processing Unit',
    },
    {
        topic: 'Software Engineering',
        question: 'What is the purpose of version control systems in software development?',
        possibleAnswers: ['To manage different versions of software', 'To write code faster', 'To improve user interface'],
        correctAnswer: 'To manage different versions of software',
    },
    {
        topic: 'Computer Science',
        question: 'What is an algorithm?',
        possibleAnswers: ['A step-by-step procedure for solving a problem', 'A type of computer hardware', 'A software bug'],
        correctAnswer: 'A step-by-step procedure for solving a problem',
    },
    {
        topic: 'Software Engineering',
        question: 'What is the primary function of a compiler?',
        possibleAnswers: ['To translate source code into machine code', 'To execute a program', 'To design user interfaces'],
        correctAnswer: 'To translate source code into machine code',
    },
    {
        topic: 'Computer Science',
        question: 'What does HTML stand for in web development?',
        possibleAnswers: ['Hypertext Markup Language', 'High-Technology Multilayer Language', 'Hyperlink Text Manipulation'],
        correctAnswer: 'Hypertext Markup Language',
    },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0;

function handleQuestion(index) {
  // handle quiz progress section
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  // topic/question
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p>
  `;

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });
  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (e.target.textContent === questions[index].correctAnswer) {
        console.log("correct! ");
      } else {
        console.log("wrong");
      }
      if (currentQuestionIndex === questions.length - 1) {
        currentQuestionIndex = 0;
      } else {
        currentQuestionIndex++;
      }
      handleQuestion(currentQuestionIndex);
    });
  });
}

handleQuestion(currentQuestionIndex);
