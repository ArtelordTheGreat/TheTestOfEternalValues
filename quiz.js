let qIndex = 0;
let scores = {};

function initScores() {
  const axisNames = ["order", "mech", "divine", "rational"];
  for (let name of axisNames) {
    scores[name] = 0;
  }
}

function nextQuestion(multiplier) {
  const q = questions[qIndex];
  for (let key in q.effect) {
    scores[key] += q.effect[key] * multiplier;
  }
  qIndex++;
  showQuestion();
}

function finishQuiz() {
  localStorage.setItem("epicScores", JSON.stringify(scores));
  window.location.href = "results.html";
}

window.onload = () => {
  initScores();
  showQuestion();
};

// Answer options with color-coded classes
const answers = [
  { text: "Strongly Disagree", class: "answer-strongly-disagree", value: -2 },
  { text: "Disagree", class: "answer-disagree", value: -1 },
  { text: "Neutral", class: "answer-neutral", value: 0 },
  { text: "Agree", class: "answer-agree", value: 1 },
  { text: "Strongly Agree", class: "answer-strongly-agree", value: 2 }
];

// When displaying a question:
function showQuestion() {
  const q = questions[currentQuestion];
  //if (qIndex >= questions.length) {
    //finishQuiz();
    //return;
  //}
  document.getElementById("question-text").innerText = q.question;

  const answerDiv = document.getElementById("answers");
  answerDiv.innerHTML = "";

  answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = `answer-button ${a.class}`;
    btn.innerText = a.text;
    btn.onclick = () => nextQuestion(a.value);
    answerDiv.appendChild(btn);
  });
}
