window.onload = () => {
  const scores = JSON.parse(localStorage.getItem("epicScores"));

  const axes = {
    order: ["Chaos", "Order"],
    mech: ["Nature", "Mechanism"],
    divine: ["Heretic", "Divine"],
    rational: ["Esoteric", "Rational"]
  };

  let output = "";

  for (let [axis, [left, right]] of Object.entries(axes)) {
    const val = scores[axis] ?? 0;
    const percentage = Math.round(((val + 100) / 200) * 100);
    output += `${left} ${percentage}% ${right}\n`;
  }

  document.getElementById("result-text").innerText = output;
};
