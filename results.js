window.onload = () => {
  const scores = JSON.parse(localStorage.getItem("epicScores"));
  let output = "";
  for (let [key, val] of Object.entries(scores)) {
    output += `${key.toUpperCase()}: ${val}\n`;
  }
  document.getElementById("result-text").innerText = output;
};

function getArchetype(scores) {
  if (scores.order > scores.chaos && scores.divine > scores.heretic)
    return "The Celestial Bureaucrat";
  if (scores.chaos > scores.order && scores.heretic > scores.divine)
    return "The Laughing Heresiarch";
  return "The Undefined Wanderer";
}

document.getElementById("result-text").innerText = 
  `You are: ${getArchetype(scores)}\n\n` + output;
