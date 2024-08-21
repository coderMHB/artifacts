// coder: MHB(:
// btn up

const btnUpElem = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  btnUpElem.classList.add("show-btn-up");
  if (document.documentElement.scrollTop === 0) {
    btnUpElem.classList.remove("show-btn-up");
    btnUpElem.style.cursor = "default";
  }
});

btnUpElem.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
