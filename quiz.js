let qIndex = 0;
let scores = {};

function initScores() {
  const axisNames = ["order", "mech", "divine", "rational"];
  for (let name of axisNames) {
    scores[name] = 0;
  }
}


function showQuestion() {
  if (qIndex >= questions.length) {
    finishQuiz();
    return;
  }
  document.getElementById("question").innerText = questions[qIndex].question;
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
