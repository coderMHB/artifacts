const allElemens = document.querySelector("#cotainer-all-elements");
const loader = document.querySelector("#loader");

function loadHandler() {
  setTimeout(() => {
    allElemens.style.display = "block";
    loader.style.display = "none";
  }, 1000);
}

window.addEventListener("DOMContentLoaded", loadHandler);
