function menuReveal() {
  document.getElementById("columnMenu").classList.remove("hidden");
  document.getElementById("columnMenu").classList.add("sm:block");
  document.getElementById("hamburger").onclick = menuHide;
}

function menuHide() {
  document.getElementById("columnMenu").classList.add("hidden");
  document.getElementById("columnMenu").classList.remove("sm:block");
  document.getElementById("hamburger").onclick = menuReveal;
}
