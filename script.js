/*
  RAFY TECH portfolio settings
  1) Replace whatsappNumber with your WhatsApp number in international format.
     Pakistan example: 923001234567 (no +, spaces, or dashes).
  2) Update social links in index.html when you have your real profile URLs.
*/
const CONFIG = {
  whatsappNumber: "923370367496"
};

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const progress = document.getElementById("progress");
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
  progress.style.width = `${percent}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();

  if (!name || !message) {
    alert("Please enter your name and message.");
    return;
  }
  if (!/^\d{10,15}$/.test(CONFIG.whatsappNumber) || CONFIG.whatsappNumber === "923000000000") {
    alert("Set your real WhatsApp number in script.js first. Use country code and digits only, e.g. 923001234567.");
    return;
  }

  const body = `Hello RAFY TECH!%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email || "Not provided")}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${body}`, "_blank", "noopener,noreferrer");
});
