window.onload = () => {
  const scores = JSON.parse(localStorage.getItem("epicScores"));

  // Define the axes (left label, right label, color)
  const axes = {
    order:   { labels: ["Chaos", "Order"],    color: "#ffcc00" },
    mech:    { labels: ["Nature", "Mechanism"], color: "#66cc66" },
    divine:  { labels: ["Heretic", "Divine"], color: "#cc66ff" },
    rational:{ labels: ["Esoteric", "Rational"], color: "#66aaff" }
  };

  const container = document.getElementById("results");

  for (let [axis, data] of Object.entries(axes)) {
    const val = scores[axis] ?? 0;
    const pct = Math.round(((val + 100) / 200) * 100);

    // Create axis container
    const axisDiv = document.createElement("div");
    axisDiv.className = "axis";

    // Label row
    const labelRow = document.createElement("div");
    labelRow.className = "labels";
    labelRow.innerHTML = `<span>${data.labels[0]}</span><span>${data.labels[1]}</span>`;

    // Bar background
    const bar = document.createElement("div");
    bar.className = "bar";

    // Filled part
    const fill = document.createElement("div");
    fill.className = "fill";
    fill.style.width = pct + "%";
    fill.style.backgroundColor = data.color;

    // Percent text
    const percent = document.createElement("span");
    percent.className = "percent";
    percent.textContent = pct + "%";

    bar.appendChild(fill);
    bar.appendChild(percent);

    axisDiv.appendChild(labelRow);
    axisDiv.appendChild(bar);

    container.appendChild(axisDiv);
  }

  renderBars(results);
};

const axisColors = {
  chaos: { left: '#ffd700', right: '#4444ff' },      // gold vs blue
  nature: { left: '#00ff99', right: '#aaaaaa' },     // green vs gray
  divine: { left: '#ff00ff', right: '#ffff00' },     // magenta vs yellow
  esoteric: { left: '#6666ff', right: '#00ffff' }    // violet vs cyan
};

function renderBars(results) {
  for (let axis in results) {
    const bar = document.getElementById(`fill-${axis}`);
    const percent = results[axis];
    const colors = axisColors[axis] || { left: '#fff', right: '#777' };
    const gradient = `linear-gradient(to right, ${colors.left} ${percent}%, ${colors.right} ${percent}%)`;
    bar.style.background = gradient;
    bar.style.width = "100%";
  }
}
