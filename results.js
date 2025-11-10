window.onload = () => {
  const results = JSON.parse(localStorage.getItem("epicScores"));
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
    const percent = 50 + results[axis];
    const colors = axisColors[axis] || { left: '#fff', right: '#777' };
    const gradient = `linear-gradient(to right, ${colors.left} ${percent}%, ${colors.right} ${percent}%)`;
    bar.style.background = gradient;
    bar.style.width = "100%";
  }
}
