// Fade-in animation for input fields
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input-group");
  inputs.forEach((input, i) => {
    setTimeout(() => {
      input.style.opacity = "1";
      input.style.transform = "translateY(0)";
    }, i * 200);
  });
});

// ✨ Interactive Particle Background
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
const numParticles = 70;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#00a0dc";
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector("button[type='submit']");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        window.location.href = "home.html";
      } else {
        form.reportValidity();
      }
    });
  } else if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});

