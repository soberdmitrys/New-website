// script.js

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) el.classList.add('visible');
  });
});

// Modal logic
const openButtons = document.querySelectorAll('[data-open]');
const closeButtons = document.querySelectorAll('[data-close], .modal-close');
const modals = document.querySelectorAll('.modal');
const switchLinks = document.querySelectorAll('[data-switch]');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.open);
    if (modal) modal.style.display = 'flex';
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modals.forEach(m => m.style.display = 'none');
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

switchLinks.forEach(link => {
  link.addEventListener('click', () => {
    modals.forEach(m => m.style.display = 'none');
    const modal = document.getElementById(link.dataset.switch);
    if (modal) modal.style.display = 'flex';
  });
});

function redirect() {
  alert("Redirecting to dashboard...");
  // Replace with actual redirect
  // window.location.href = "/dashboard.html";
}
