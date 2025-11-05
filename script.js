const questions = [
  { text: "Only through structure can the universe sing in harmony.", axis: "order", effect: 1 },
  { text: "Rust and vines are both forms of growth.", axis: "mechanism", effect: -1 },
  { text: "The sacred code must never be rewritten.", axis: "divine", effect: 1 },
  { text: "To change is to live, to remain is to die.", axis: "flux", effect: 1 }
];

let i = 0;
let results = { order: 0, mechanism: 0, divine: 0, flux: 0 };

function showQuestion() {
  if (i < questions.length) {
    document.getElementById("question").innerText = questions[i].text;
  } else {
    showResults();
  }
}

function answer(value) {
  const q = questions[i];
  results[q.axis] += value * q.effect;
  i++;
  showQuestion();
}

function showResults() {
  document.getElementById("question-box").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("result").style.display = "block";
  
  let text = Object.entries(results)
    .map(([axis, score]) => `${axis.toUpperCase()}: ${score}`)
    .join("\n");
  
  document.getElementById("result-text").innerText = text;
}

showQuestion();
