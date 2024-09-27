const btnFooter = document.querySelectorAll(".btn-footer");

let isShow = false;
btnFooter.forEach((btn) => {
  btn.addEventListener("click", () => {
    isShow = !isShow;
    if (isShow) {
      btn.nextElementSibling.style.display = "block";
    } else {
      btn.nextElementSibling.style.display = "none";
    }
  });
});
