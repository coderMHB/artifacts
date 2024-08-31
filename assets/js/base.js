// coder: MHB(:
const btnAdditional = document.querySelector("#btn-additional");
const txtAdditional = document.querySelector("#txt-additional");

let isShowTxt = false;
btnAdditional.addEventListener("click", () => {
  if (isShowTxt === false) {
    txtAdditional.style.display = "inline";
    btnAdditional.innerHTML = "نمایش کمتر";
    isShowTxt = true;
  } else if (isShowTxt === true) {
    txtAdditional.style.display = "none";
    btnAdditional.innerHTML = "نمایش بیشتر";
    isShowTxt = false;
  }
});

const btnAdditional2 = document.querySelector("#btn-additional2");
const txtAdditional2 = document.querySelector("#txt-additional2");

let isShowTxt2 = false;
btnAdditional2.addEventListener("click", () => {
  if (isShowTxt2 === false) {
    txtAdditional2.style.display = "inline";
    btnAdditional2.innerHTML = "نمایش کمتر";
    isShowTxt2 = true;
  } else if (isShowTxt2 === true) {
    txtAdditional2.style.display = "none";
    btnAdditional2.innerHTML = "نمایش بیشتر";
    isShowTxt2 = false;
  }
});































