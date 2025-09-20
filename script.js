// Global variable to demonstrate scope
let globalCounter = 0;

// Pure function: returns a random hex color
function randomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

// Function with parameter + return value
function incrementCounter(amount) {
  let localCounter = globalCounter + amount; // local scope
  globalCounter = localCounter;              // update global
  return localCounter;
}

// Reusable animation controller
function triggerAnimation(selector, className) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.classList.remove(className); // reset
  void el.offsetWidth;            // force reflow
  el.classList.add(className);
}

// Animate box on button click
document.getElementById("triggerBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  triggerAnimation("#box", "chain-animate");
  box.style.backgroundColor = randomColor();
  console.log("Animation count:", incrementCounter(1));
});

// Modal logic
const overlay = document.getElementById("modalOverlay");
document.getElementById("openModalBtn").addEventListener("click", () => {
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  overlay.classList.remove("show");
  // wait for fade-out before hiding to remove from layout
  setTimeout(() => overlay.classList.add("hidden"), 400);
});

// Optional: close modal on background click
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
    setTimeout(() => overlay.classList.add("hidden"), 400);
  }
});
