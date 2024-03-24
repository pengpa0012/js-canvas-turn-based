const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 20, 0, 2 * Math.PI)
  ctx.fill()
}


function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  drawCircle(100, canvas.height - 20)
}

window.addEventListener("resize", resizeCanvas)
resizeCanvas()

function animate() {
  requestAnimationFrame(animate)
}

// animate()


// create full canvas
// add two ball
// make ball attack
// like an arc
// add health bars
// turn based combat
// repeat
// add 