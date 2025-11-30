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
  },
  violence: {
    leftLabel: "Violence",
    rightLabel: "Mercy",
    leftIcon: "violence.png",
    rightIcon: "mercy.png"
  },
  evolution: {
    leftLabel: "Evolution",
    rightLabel: "Stasis",
    leftIcon: "evolution.png",
    rightIcon: "stasis.png"
  },
  creation: {
    leftLabel: "Creation",
    rightLabel: "Erosion",
    leftIcon: "creation.png",
    rightIcon: "erosion.png"
  },
  reality: {
    leftLabel: "Reality",
    rightLabel: "Delirium",
    leftIcon: "reality.png",
    rightIcon: "delirium.png"
  },
  might: {
    leftLabel: "Might",
    rightLabel: "Intellect",
    leftIcon: "might.png",
    rightIcon: "intellect.png"
  },
  spread: {
    leftLabel: "Spread",
    rightLabel: "Preserve",
    leftIcon: "spread.png",
    rightIcon: "preserve.png"
  }
};


window.onload = () => {
  const results = JSON.parse(localStorage.getItem("epicScores"));
  renderBars(results);
  
  const best = getClosestArchetype(results);
  document.getElementById("closest-match").innerHTML = `
  <h2>${best.name}</h2>
  <p>${best.description}</p>
`;

};

const axisColors = {
  order: { left: "#6100ff", right: "#ff5900" },      
  mech: { left: "#898989", right: "#00bd00" },     
  divine: { left: "#fffe00", right: "#ff00ab" },     
  rational: { left: "#b3ff00", right: "#8600ff" },     
  violence: { left: "#ff0000", right: "#ff00ff" },     
  evolution: { left: "#74ff00", right: "#00b5ff" },     
  creation: { left: "#ffcf00", right: "#ff0053" },     
  reality: { left: "#00d089", right: "#b000ff" },     
  might: { left: "#0010ff", right: "#00ffc7" },     
  spread: { left: "#006eff", right: "#a3ff00" }
};

function renderBars(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  for (const axis in results) {
    const score = results[axis]; // -100 to +100
    const config = axisLabels[axis];
    const colors = axisColors[axis];

    // Convert to two 0–100 percentages
    const leftPercent  = Math.round((100 + score) / 2);
    const rightPercent = Math.round((100 - score) / 2);

    // Create row
    const row = document.createElement("div");
    row.className = "axis-row";

    // Icons + labels
    row.innerHTML = `
      <div class="axis-icon-div">
        <img src="images/${config.leftIcon}" class="axis-icon">
      </div>
      
      <div class="axis-body">
        <div class="axis-labels">
          <span class="axis-label-left">${config.leftLabel} ${leftPercent}%</span>
          <span class="axis-label-right">${rightPercent}% ${config.rightLabel}</span>
        </div>
        <div class="axis-bar">
          <div class="bar-left"  style="width:${leftPercent}%; background:${colors.left};"></div>
          <div class="bar-right" style="width:${rightPercent}%; background:${colors.right};"></div>
        </div>
      </div>
      
      <div class="axis-icon-div">
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
