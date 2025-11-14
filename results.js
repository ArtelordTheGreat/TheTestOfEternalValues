// Axis label & icon configuration
//be careful about names - png and axis must be accurate
const axisLabels = {
  order: {
    leftLabel: "Order",
    rightLabel: "Chaos",
    leftIcon: "order.png",
    rightIcon: "chaos.png"
  },
  mech: {
    leftLabel: "Mechanism",
    rightLabel: "Nature",
    leftIcon: "mechanism.png",
    rightIcon: "nature.png"
  },
  divine: {
    leftLabel: "Divine",
    rightLabel: "Heretic",
    leftIcon: "divine.png",
    rightIcon: "heretic.png"
  },
  rational: {
    leftLabel: "Rational",
    rightLabel: "Esoteric",
    leftIcon: "rational.png",
    rightIcon: "esoteric.png"
  }
};


window.onload = () => {
  const results = JSON.parse(localStorage.getItem("epicScores"));
  renderBars(results);
};

const axisColors = {
  order: { left: "#8a2be2", right: "#ffcc00" },      // blue vs gold
  mech: { left: "#aaaaaa", right: "#00ff88" },     // gray vs green
  divine: { left: "#ffff33", right: "#ff33ff" },     // yellow vs magenta
  rational: { left: "#00ffff", right: "#8000ff" }    // cyan vs violet
};

function renderBars(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  for (const [axis, value] of Object.entries(results)) {
    const axisData = axisLabels[axis]; // assuming you have axisLabels defined
    const leftVal = Math.round(value);
    const rightVal = 100 - leftVal;

    const axisDiv = document.createElement("div");
    axisDiv.className = "axis";

    // Row with icons, names, and percentages
    const labelRow = document.createElement("div");
    labelRow.className = "axis-labels";

    labelRow.innerHTML = `
      <div class="axis-side left">
        <img src="images/${axisData.leftIcon}" class="axis-icon">
        <span>${axisData.leftLabel}</span>
        <span class="axis-percent">${leftVal}%</span>
      </div>
      <div class="axis-side right">
        <span class="axis-percent">${rightVal}%</span>
        <span>${axisData.rightLabel}</span>
        <img src="images/${axisData.rightIcon}" class="axis-icon">
      </div>
    `;

    // Bar showing proportion
    const barContainer = document.createElement("div");
    barContainer.className = "bar-container";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = `${leftVal}%`;

    const colors = axisColors[axis] || { left: "#888", right: "#555" };
    const gradient = `linear-gradient(to right, ${colors.left}, ${colors.right})`;
    bar.style.background = gradient;

    barContainer.appendChild(bar);
    axisDiv.appendChild(labelRow);
    axisDiv.appendChild(barContainer);
    container.appendChild(axisDiv);
  }
}

