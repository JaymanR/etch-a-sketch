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
  if (mouseStatus) drawOn(e);
}

function mouseUp() {
  mouseStatus = false;
}

function getGridSize() {
  const gridButtons = document.querySelectorAll("#grid-size button");
  gridButtons.forEach((button) => {
    button.addEventListener("click", () => {
      gridSize = +button.textContent.substring(0, 2);
      createCanvasGrid(gridSize);
    });
  });
}

function createCanvasGrid(gridSize) {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    const canvasRow = document.createElement("div");
    canvasRow.classList.add("row");
    canvas.appendChild(canvasRow);
    for (let j = 0; j < gridSize; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.addEventListener("mousedown", mouseDown);
      tile.addEventListener("mouseenter", mouseEnter);
      tile.addEventListener("mouseup", mouseUp);
      canvasRow.appendChild(tile);
    }
  }
}

let gridSize = 16;

window.onload = () => {
  getGridSize();
  createCanvasGrid(gridSize);
};
