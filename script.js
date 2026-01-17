const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1
  },
  {
    question: "Which is not a programming language?",
    options: ["Java", "Python", "HTML", "C++"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  resetOptions();
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(index) {
  const correctIndex = questions[currentQuestion].answer;

  optionBtns.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    optionBtns[index].classList.add("correct");
    score++;
  } else {
    optionBtns[index].classList.add("wrong");
    optionBtns[correctIndex].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

function resetOptions() {
  optionBtns.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  document.querySelector(".options").style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerText = `🎉 Your Score: ${score} / ${questions.length}`;
}

loadQuestion();