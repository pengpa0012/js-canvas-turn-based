const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let y = canvas.height / 2 - 20
let arrowAngle = 0

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 20, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
}

function drawArrow(x, y, angle) {
  ctx.save()
  ctx.translate(x - 20, y)
  ctx.rotate(angle)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(50, 0)
  ctx.moveTo(50, 0)
  ctx.lineTo(40, -10)
  ctx.moveTo(50, 0)
  ctx.lineTo(40, 10)
  ctx.stroke()
  ctx.restore()
}

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  drawCircle(100, canvas.height - 20)
}

function updateArrowPosition(event) {
  const rect = canvas.getBoundingClientRect()
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top
  const dx = mouseX - 100
  const dy = mouseY - (y + 20)
  arrowAngle = Math.atan2(dy, dx)
}

window.addEventListener("resize", resizeCanvas)
window.addEventListener("mousemove", updateArrowPosition)
resizeCanvas()

function animate() {
  y += 10
  if (y >= canvas.height - 20) {
    y = canvas.height - 20
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCircle(100, y)
  drawCircle(canvas.width - 100, y)
  drawArrow(100 + 20, y, arrowAngle) // Drawing arrow relative to the circle
  requestAnimationFrame(animate)
}

animate()
