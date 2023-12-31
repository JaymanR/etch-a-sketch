function drawOn(e) {
    e.preventDefault();
  if (!e.target.classList.contains("draw")) {
    e.target.classList.toggle("draw");
  }
}

let mouseStatus = false;

function mouseDown(e) {
    e.preventDefault();
    mouseStatus = true;
    drawOn(e);
}

function mouseEnter(e) {
    if(mouseStatus) drawOn(e);
}

function mouseUp() {
    mouseStatus = false;
}

const canvas = document.getElementById("canvas");

for (let i = 0; i < 16; i++) {
  const canvasRow = document.createElement("div");
  canvasRow.classList.add("row");
  canvas.appendChild(canvasRow);
  for (let j = 0; j < 16; j++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mousedown", mouseDown);
    tile.addEventListener("mouseenter", mouseEnter);
    tile.addEventListener("mouseup", mouseUp);
    canvasRow.appendChild(tile);
  }
}
