// NAV MOBILE TOGGLE
document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// MODAL LOGIC
const openBtns = document.querySelectorAll('[data-open]');
const closeBtns = document.querySelectorAll('[data-close]');
const switches = document.querySelectorAll('[data-switch]');

openBtns.forEach(btn => {
  btn.onclick = () => {
    document.getElementById(btn.dataset.open).style.display = 'flex';
  };
});
closeBtns.forEach(btn => {
  btn.onclick = () => {
    btn.closest('.modal').style.display = 'none';
  };
});
switches.forEach(sp => {
  sp.onclick = () => {
    const from = sp.parentElement.parentElement.id;
    const to = sp.dataset.switch;
    document.getElementById(from).style.display = 'none';
    document.getElementById(to).style.display = 'flex';
  };
});
window.onclick = e => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};

// SCROLL REVEAL
const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

items.forEach(i => io.observe(i));

// REDIRECT AFTER AUTH (demo)
function redirect() {
  window.location.href = 'dashboard.html';
}
