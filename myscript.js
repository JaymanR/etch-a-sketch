function drawOn() {
  if (!e.target.classList.contains("draw")) {
    e.target.classList.toggle("draw");
  }
}

const canvas = document.getElementById("canvas");

for (let i = 0; i < 16; i++) {
  const canvasRow = document.createElement("div");
  canvasRow.classList.add("row");
  canvas.appendChild(canvasRow);
  for (let j = 0; j < 16; j++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mousedown", drawOn);
    canvasRow.appendChild(tile);
  }
}
