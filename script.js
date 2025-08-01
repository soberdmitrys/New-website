// script.js

// Popup Modals Logic
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const closeButtons = document.querySelectorAll(".modal .close");

// Open modals
loginBtn?.addEventListener("click", () => {
  loginModal.style.display = "flex";
});
signupBtn?.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

// Close modals
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Handle "Get Started" button
const getStartedBtn = document.querySelector(".get-started");
getStartedBtn?.addEventListener("click", () => {
  window.location.href = "dashboard.html"; // Change if needed
});

// Scroll reveal animation (basic)
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, {
  threshold: 0.2
});
sections.forEach(section => observer.observe(section));
