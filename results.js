window.onload = () => {
  const scores = JSON.parse(localStorage.getItem("epicScores"));

  const container = document.getElementById("results");
/*
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
  }*/

  renderBars(results);
};

const axisColors = {
  order: { left: '#4444ff', right: '#ffd700' },      // blue vs gold
  mech: { left: '#aaaaaa', right: '#00ff99' },     // gray vs green
  divine: { left: '#ffff00', right: '#ff00ff' },     // yellow vs magenta
  rational: { left: '#00ffff', right: '#6666ff' }    // cyan vs violet
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
