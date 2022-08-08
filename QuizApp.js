const quizData = [
  {
    Question: "How old is Imran Khan ?",
    a: "70",
    b: "68",
    c: "69",
    d: "71",
    correct: "c",
  },
  {
    Question: "what is the most used programming language in 2019 ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    Question: "who is the Priminster of Pakistan ?",
    a: "Imran khan",
    b: "Shabaz Sharif",
    c: "Zardari",
    d: "Bilawal Baji",
    correct: "b",
  },
  {
    Question: "what does HTML stands for  ?",
    a: "HyperText Markup Language ",
    b: "Cascading Style Sheet",
    c: "Jason object Notation",
    d: "Halicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },

  {
    Question: "what year was Javascript was launched  ?",
    a: "1996",
    b: "1995",
    c: "1997",
    d: "None of the above",
    correct: "d",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.Question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSlected() {
  // to debug
  // console.log( document.querySelectorAll(".answer"))
  // return ;

  // const answerEls = document.querySelectorAll(".answer");
  var answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answer) => {
    answer.checked = false;
  });
}

deselectAnswer();
submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSlected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
     quiz.innerHTML = `<h2> you answer correctly at ${score} / ${quizData.length} question</h2> 
     <button onclick = "location.reload()"> Reload </button>`;
    }
  }
});
