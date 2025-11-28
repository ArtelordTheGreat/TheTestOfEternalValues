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

    Object.keys(results).forEach(axis => {
        const value = results[axis];          // -100 .. 100
        const leftPercent = (100 + value) / 2;
        const rightPercent = (100 - value) / 2;

        const labels = axisLabels[axis];      // { leftLabel, rightLabel, leftIcon, rightIcon }

        // AXIS WRAPPER
        const axisDiv = document.createElement("div");
        axisDiv.classList.add("axis");

        // HEADER
        const header = document.createElement("div");
        header.classList.add("axis-header");

        const leftIcon = document.createElement("img");
        leftIcon.classList.add("axis-icon");
        leftIcon.src = `images/${labels.leftIcon}`;

        const title = document.createElement("div");
        title.classList.add("axis-title");
        title.textContent = axis;

        const rightIcon = document.createElement("img");
        rightIcon.classList.add("axis-icon");
        rightIcon.src = `images/${labels.rightIcon}`;

        header.appendChild(leftIcon);
        header.appendChild(title);
        header.appendChild(rightIcon);

        // PERCENTAGES
        const percentRow = document.createElement("div");
        percentRow.classList.add("axis-percentages");

        const leftP = document.createElement("span");
        leftP.classList.add("left-percent");
        leftP.textContent = `${Math.round(leftPercent)}% ${labels.leftLabel}`;

        const rightP = document.createElement("span");
        rightP.classList.add("right-percent");
        rightP.textContent = `${labels.rightLabel} ${Math.round(rightPercent)}%`;

        percentRow.appendChild(leftP);
        percentRow.appendChild(rightP);

        // BAR
        const barWrapper = document.createElement("div");
        barWrapper.classList.add("axis-bar");

        const leftBar = document.createElement("div");
        leftBar.classList.add("bar-left");
        leftBar.style.width = `${leftPercent}%`;

        const rightBar = document.createElement("div");
        rightBar.classList.add("bar-right");
        rightBar.style.width = `${rightPercent}%`;

        barWrapper.appendChild(leftBar);
        barWrapper.appendChild(rightBar);

        // BUILD AXIS
        axisDiv.appendChild(header);
        axisDiv.appendChild(percentRow);
        axisDiv.appendChild(barWrapper);

        container.appendChild(axisDiv);
    });
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
