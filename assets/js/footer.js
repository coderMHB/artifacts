const btnFooter = document.querySelectorAll(".btn-footer");

btnFooter.forEach((btn) => {
  btn.addEventListener("click", () => {
    let isShow = btn.nextElementSibling.style.display;
    if (isShow == "none") {
      btn.nextElementSibling.style.display = "block";
    } else {
      btn.nextElementSibling.style.display = "none";
    }
  });
});
