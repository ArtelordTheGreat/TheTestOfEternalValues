window.onload = () => {
  const scores = JSON.parse(localStorage.getItem("epicScores"));
  let output = "";
  for (let [key, val] of Object.entries(scores)) {
    output += `${key.toUpperCase()}: ${val}\n`;
  }
  document.getElementById("result-text").innerText = output;
};
