document.getElementById("openLogin").onclick = () => {
  document.getElementById("loginModal").style.display = "flex";
};

document.getElementById("openSignup").onclick = () => {
  document.getElementById("signupModal").style.display = "flex";
};

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-close");
    document.getElementById(modalId).style.display = "none";
  };
});

window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
