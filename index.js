// Button click -> go to celebration page
document.getElementById("celebrateBtn")?.addEventListener("click", () => {
  window.location.href = "celebration.html";
});

// -----------------------------
// PARTICLES (GIFs)
const particlesContainer = document.querySelector(".particles-container");
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("img");
  particle.src = "assets/particle.gif";
  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.width = 120 + Math.random() * 200 + "px";
  particle.style.animationDuration = 5 + Math.random() * 7 + "s";
  particle.style.animationDelay = Math.random() * 5 + "s";
  particle.style.top = -200 - Math.random() * 200 + "px";

  particlesContainer.appendChild(particle);
}

// -----------------------------
// BALLOONS
const balloonImages = [
  "assets/ballon1.png",
  "assets/ballon2.png",
  "assets/ballon3.png",
];
const balloonCount = 30;

for (let i = 0; i < balloonCount; i++) {
  const balloon = document.createElement("img");
  balloon.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
  balloon.classList.add("balloon");

  balloon.style.bottom = -200 - Math.random() * 100 + "px";
  balloon.style.left = Math.random() * 90 + "vw";
  balloon.style.width = 250 + Math.random() * 50 + "px";

  balloon.style.animationDuration = 10 + Math.random() * 5 + "s";
  balloon.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(balloon);
}

// -----------------------------
// SPARKLES
const sparkleCount = 100;
for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.width = sparkle.style.height = 2 + Math.random() * 3 + "px";
  sparkle.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(sparkle);
}

// -----------------------------
// CRACKERS
const crackerImages = ["assets/cracker.png", "assets/cracker-box.png"];
const crackerCount = 10;

for (let i = 0; i < crackerCount; i++) {
  const cracker = document.createElement("img");
  cracker.src = crackerImages[Math.floor(Math.random() * crackerImages.length)];
  cracker.classList.add("cracker");

  cracker.style.left = Math.random() * 90 + "vw";
  cracker.style.width = 50 + Math.random() * 50 + "px";
  cracker.style.animationDuration = 3 + Math.random() * 3 + "s";
  cracker.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(cracker);
}

// Background music
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.2;

// Unmute on first user interaction
document.addEventListener(
  "click",
  () => {
    bgMusic.muted = false;
    bgMusic.currentTime = 45; // start from 42s
    bgMusic.play();
  },
  { once: true }
);
