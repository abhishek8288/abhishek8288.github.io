// === 3D Floating Cloud + Gear Animation ===
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const icons = ["☁️", "⚙️", "💻", "☁️", "⚙️"];
const colors = ["#00aaff", "#66ccff", "#88e0ff", "#3399ff"];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 24 + 14,
    speedX: Math.random() * 0.6 - 0.3,
    speedY: Math.random() * 0.6 - 0.3,
    icon: icons[Math.floor(Math.random() * icons.length)],
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.font = `${p.size}px Arial`;
    ctx.fillStyle = p.color;
    ctx.fillText(p.icon, p.x, p.y);
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// === Experience Counter ===
const startDate = new Date("2022-01-01"); // your start date
const experienceElement = document.getElementById("experience");

function calculateExperience() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  experienceElement.textContent = `Experience: ${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}

calculateExperience();
setInterval(calculateExperience, 86400000);
