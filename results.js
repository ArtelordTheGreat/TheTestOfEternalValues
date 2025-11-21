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
  
  const best = getClosestArchetype(results);
  document.getElementById("closest-match").innerText =
    "Closest Archetype: " + best.name;
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

  for (const axis in results) {
    const score = results[axis]; // -100 to +100
    const config = axisLabels[axis];
    const colors = axisColors[axis];

    // Convert to two 0–100 percentages
    const leftPercent  = Math.round((100 - score) / 2);
    const rightPercent = Math.round((100 + score) / 2);

    // Create row
    const row = document.createElement("div");
    row.className = "axis-row";

    // Icons + labels
    row.innerHTML = `
      <div class="axis-left">
        <img src="images/${config.leftIcon}" class="axis-icon">
        <span>${config.leftLabel} ${leftPercent}%</span>
      </div>

      <div class="axis-bar">
        <div class="bar-left"  style="width:${leftPercent}%; background:${colors.left};"></div>
        <div class="bar-right" style="width:${rightPercent}%; background:${colors.right};"></div>
      </div>

      <div class="axis-right">
        <span>${rightPercent}% ${config.rightLabel}</span>
        <img src="images/${config.rightIcon}" class="axis-icon">
      </div>
    `;

    container.appendChild(row);
  }
}

function distance(a, b) {
  let sum = 0;
  for (let axis in a) {
    sum += Math.pow(a[axis] - b[axis], 2);
  }
  return Math.sqrt(sum);
}

function getClosestArchetype(scores) {
  let best = null;
  let bestDistance = Infinity;
  
  archetypes.forEach(arch => {
    const d = distance(scores, arch.stats);
    if (d < bestDistance) {
      bestDistance = d;
      best = arch;
    }
  });

  return best;
}
