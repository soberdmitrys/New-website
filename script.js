// Scroll reveal effect
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) el.classList.add('visible');
  });
});

// Modal logic (open/close)
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

// Mobile sidebar toggle
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Simulated registration redirect
const registerBtn = document.querySelector('#signup .btn.signup');
if (registerBtn) {
  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('#signup input');
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) valid = false;
    });

    if (!valid) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Registration successful!");
    window.location.href = "dashboard.html";
  });
}

// Simulated login redirect
function redirect() {
  alert("Login successful!");
  window.location.href = "dashboard.html";
}

// Dashboard tab switching
const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabSections = document.querySelectorAll('.tab-section');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;
    tabSections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === target) sec.classList.add('active');
    });
  });
});
