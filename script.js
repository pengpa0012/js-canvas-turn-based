const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let y = canvas.height / 2 - 20

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
  y += 10
  if(y >= canvas.height - 20) {
    y = canvas.height - 20
  }
  ctx.clearRect(0,0,canvas.width, canvas.height)
  drawCircle(100, y)
  drawCircle(canvas.width - 100, y)
  requestAnimationFrame(animate)
}

animate()

// ball can shoot
// add health bars
// turn based combat